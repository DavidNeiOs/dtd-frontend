import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { RouteComponentProps, useParams } from "react-router-dom";
import { FormikHelpers } from "formik";
import { isEmpty } from "lodash";

import { apiClient } from "../../services/apiClient";
import { useFlashes } from "../../context/flash";
import { StoreComplete, Store } from "../../types/store";
import { StoreForm } from "../../components/store-form";
import { GET_ERRORS } from "../../actions/types";
import createErrorMessage from "../../utils/createErrorMessage";

interface Props extends RouteComponentProps {}

export const EditStore = ({ history }: Props) => {
  const { id } = useParams();
  const [flashes, setFlashes] = useFlashes();
  const [storeData, setStoreData] = useState({} as StoreComplete);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      try {
        const response = await apiClient.get(`/stores/${id}/edit`);
        setStoreData(response.data);
      } catch (err) {
        dispatch({
          type: GET_ERRORS,
          payload: { success: false, message: createErrorMessage(err.message) },
        });
      }
    }
    getData();
  }, [id, dispatch]);

  const onSubmitForm = async (values: Store, actions: FormikHelpers<Store>) => {
    const { data } = await apiClient.post(`/stores/${id}/edit`, values);
    setFlashes([...flashes, data]);
    if (data.success) {
      history.push(`/stores/${id}/edit`);
    }
  };

  return (
    <div className="inner">
      <h1>Store</h1>
      {!isEmpty(storeData) && (
        <StoreForm store={storeData} onSubmit={onSubmitForm} />
      )}
    </div>
  );
};
