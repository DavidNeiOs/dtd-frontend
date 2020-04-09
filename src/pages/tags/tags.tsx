import React, { useEffect, useState } from "react";
import { apiClient } from "../../services/apiClient";

export const Tags = () => {
  useEffect(() => {
    async function getData() {
      const response = apiClient.get("/tags");
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
