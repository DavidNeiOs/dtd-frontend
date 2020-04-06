import React, { useEffect, useState, useCallback } from "react";
import { isEmpty } from "lodash";

import { StoreComplete } from "../../types/store";
import { apiClient } from "../../services/apiClient";
import { StoreCard } from "../../components/store-card";
import { useFlashes } from "../../context/flash";

export const Home = () => {
  const [stores, setStores] = useState<StoreComplete[]>([]);
  const [flashes, setFlashes] = useFlashes();

  const memoizedGetData = useCallback(async () => {
    try {
      const response = await apiClient.get("/");
      setStores(response.data.stores);
    } catch (e) {
      setFlashes([
        ...flashes,
        { success: false, message: "There was an error fetching the data" },
      ]);
    }
  }, []);

  useEffect(() => {
    memoizedGetData();
  }, [memoizedGetData]);

  return (
    <div className="inner">
      <h2>Stores</h2>
      <div className="stores">
        {!isEmpty(stores) &&
          stores.map((store) => <StoreCard store={store} key={store.slug} />)}
      </div>
    </div>
  );
};
