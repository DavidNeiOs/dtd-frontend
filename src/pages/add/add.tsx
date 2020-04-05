import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { FormikHelpers } from "formik";

import { StoreForm } from "../../components/store-form";
import { useFlashes } from "../../context/flash";
import { Store } from "../../types/store";
import { apiClient } from "../../services/apiClient";
interface Props extends RouteComponentProps {}

export const Add = ({ history }: Props) => {
  const [flashes, setFlashes] = useFlashes();

  const onFormSubmit = async (
    values: Store,
    actions: FormikHelpers<Store>
  ): Promise<any> => {
    const { data } = await apiClient.post("/add", values);
    if (data.success) {
      setFlashes([...flashes, data]);
      history.push(`/store/${data.slug}`);
    }
  };

  return (
    <div className="inner">
      <h2>Add store</h2>
      <StoreForm onSubmit={onFormSubmit} />
    </div>
  );
};
