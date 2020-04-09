import React, { useEffect, useState, useCallback } from "react";
import { RouteComponentProps, useParams, Link } from "react-router-dom";
import { isEmpty } from "lodash";

import { apiClient } from "../../services/apiClient";
import { getStaticMap } from "../../services/google-maps";
import { useFlashes } from "../../context/flash";
import { StoreComplete, tags as Tags } from "../../types/store";
import { tags } from "../../constants/stores";

interface Props extends RouteComponentProps {}

export const SingleStore = ({ history }: Props) => {
  const { slug } = useParams();
  const [flashes, setFlashes] = useFlashes();
  const [store, setStore] = useState({} as StoreComplete);

  const memoizedGetData = useCallback(
    async function getData() {
      const response = await apiClient.get(`/store/${slug}`);
      if (!response.data) {
        setFlashes([
          ...flashes,
          { success: false, message: "The store you requested doesn't exist" },
        ]);
        history.push("/");
      } else {
        setStore(response.data);
      }
    },
    [slug]
  );

  useEffect(() => {
    memoizedGetData();
  }, [memoizedGetData]);

  console.log(store);

  return (
    <>
      {!isEmpty(store) && (
        <>
          <div className="single">
            <div className="single__hero">
              <img
                src={`${process.env.REACT_APP_FETCH_URL}/${store.url}`}
                alt="look of restaurant"
                className="single__image"
              />
              <h2 className="title title--single">
                <Link to={`/store/${store.slug}`}>{store.name}</Link>
              </h2>
            </div>
          </div>
          <div className="single__details inner">
            <img
              src={getStaticMap(store.location.coordinates)}
              alt="google map"
              className="single__map"
            />
            <p className="single__location">{store.location.address}</p>
            {store.description && <p>{store.description}</p>}
            <ul className="tags">
              {store.tags.map((tag, index: number) => (
                <li className="tag" key={index}>
                  <Link to={`/tags/${tag}`} className="tag__link">
                    <span className="tag__text">{tags[tag]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};
