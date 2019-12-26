import React from "react";
import { FieldProps } from "formik";
import { apiClient } from "../../services/apiClient";

export const MediaUpload = (props: FieldProps) => {
  const { field, form } = props;
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!e.currentTarget.files || !e.currentTarget.files.length) {
        return;
      }
      const image = e.currentTarget.files[0];
      const formData = new FormData();
      formData.append("image", image);

      const response = await apiClient.post("/upload-image", formData);

      form.setFieldValue(field.name, response.data.url);
    } catch (err) {
      console.log(err);
    }
  };

  return <input type="file" onChange={handleChange} />;
};
