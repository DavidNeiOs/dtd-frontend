import React, { useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";

import { apiClient } from "../../services/apiClient";

interface Props extends RouteComponentProps {}

export const Tag = ({ history }: Props) => {
  const { tag } = useParams();

  useEffect(() => {
    async function getData() {
      const response = apiClient.get(`/tags/${tag}`);
      console.log((await response).data);
    }
    getData();
  }, []);

  return (
    <div className="inner">
      <h2>Tags</h2>
    </div>
  );
};
