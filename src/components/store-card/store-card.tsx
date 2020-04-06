import React from "react";
import { StoreComplete } from "../../types/store";
import { Link } from "react-router-dom";
import { Pencil } from "../icons/pencil";

interface Props {
  store: StoreComplete;
}

export const StoreCard = ({ store }: Props) => {
  return (
    <div className="store">
      <div className="store__hero">
        <div className="store__actions">
          <div className="store__action store__action--edit">
            <a href={`/stores/${store._id}/edit`}>
              <Pencil />
            </a>
          </div>
        </div>
        <img
          src={`${process.env.REACT_APP_FETCH_URL}/${
            store.url ? store.url : "store.png"
          }`}
          alt="place"
        />
        <h2 className="title">
          <Link to={`/store/${store.slug}`}>{store.name}</Link>
        </h2>
      </div>
      <div className="store__details">
        <p>{store.description.split(" ").slice(0, 25).join(" ")}</p>
      </div>
    </div>
  );
};
