import React, { useEffect, useState } from "react";
import { RouteComponentProps, useParams, Link } from "react-router-dom";

import { tags as TAGS } from "../../constants/stores/tags";
import { StoreCard } from "../../components/store-card";
import { apiClient } from "../../services/apiClient";
import { StoreComplete } from "../../types/store";

interface Props extends RouteComponentProps {}

export const Tag = ({ history }: Props) => {
  const { tag } = useParams();
  const [tags, setTags] = useState([]);
  const [stores, setStores] = useState([] as StoreComplete[]);

  useEffect(() => {
    async function getData() {
      const response = await apiClient.get(`/tags/${tag}`);
      console.log(response);
      setTags(response.data.tags);
      setStores(response.data.stores);
    }
    getData();
  }, [tag]);

  return (
    <div className="inner">
      <h2>{tag && TAGS[tag]}</h2>
      <ul className="tags">
        {tags.map(({ _id, count }: any) => (
          <li className="tag" key={`${_id}`}>
            <Link
              to={`/tags/${_id}`}
              className={`tag__link ${tag === _id ? "tag__link--active" : ""}`}
            >
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
