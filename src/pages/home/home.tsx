import React, { useEffect, useState } from "react";
import { apiClient } from "../../services/apiClient";

export const Home = () => {
  const [homeData, setHomeData] = useState("");
  useEffect(() => {
    async function getData() {
      const response = await apiClient.get("/");
      setHomeData(response.data.data);
    }
    getData();
  }, []);

  return <p>{homeData}</p>;
};
