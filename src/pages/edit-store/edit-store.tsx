import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { FormikHelpers } from "formik";
import { isEmpty } from "lodash";

import { apiClient } from "../../services/apiClient";
import { useFlashes } from "../../context/flash";
import { useParams } from "react-router-dom";
import { StoreComplete, Store } from "../../types/store";
import { StoreForm } from "../../components/store-form";

interface Props extends RouteComponentProps {}

export const EditStore = ({ history }: Props) => {
  const { id } = useParams();
  const [flashes, setFlashes] = useFlashes();
  const [storeData, setStoreData] = useState({} as StoreComplete);

  useEffect(() => {
    async function getData() {
      const response = await apiClient.get(`/stores/${id}/edit`);
      setStoreData(response.data);
    }
    getData();
  }, [id]);

  const onSubmitForm = async (values: Store, actions: FormikHelpers<Store>) => {
    const { data } = await apiClient.post(`/stores/${id}/edit`, values);
    setFlashes([...flashes, data]);
    if (data.success) {
      history.push(`/stores/${id}/edit`);
    }
  };

  return (
    <div>
      <h1>Store</h1>
      {!isEmpty(storeData) && (
        <StoreForm store={storeData} onSubmit={onSubmitForm} />
      )}
    </div>
  );
};
