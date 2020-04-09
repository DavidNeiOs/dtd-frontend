import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiClient } from "../../services/apiClient";
import { tags as TAGS } from "../../constants/stores/tags";
import { StoreComplete } from "../../types/store";
import { StoreCard } from "../../components/store-card";

export const Tags = () => {
  const [tags, setTags] = useState([]);
  const [stores, setStores] = useState([] as StoreComplete[]);

  useEffect(() => {
    async function getData() {
      const response = await apiClient.get(`/tags/`);
      console.log(response);
      setTags(response.data.tags);
      setStores(response.data.stores);
    }
    getData();
  }, []);

  return (
    <div className="inner">
      <h2>Tags</h2>
      <ul className="tags">
        {tags.map(({ _id, count }: any) => (
          <li className="tag" key={`${_id}`}>
            <Link to={`/tags/${_id}`} className={`tag__link`}>
              <span className="tag__text">{TAGS[_id]}</span>
              <span className="tag__count">{count}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="stores">
        {stores &&
          stores.map((store) => <StoreCard store={store} key={store.slug} />)}
      </div>
    </div>
  );
};
