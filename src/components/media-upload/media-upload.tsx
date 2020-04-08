import React from "react";
import { FieldProps } from "formik";
import { apiClient } from "../../services/apiClient";
import { useFlashes } from "../../context/flash";

export const MediaUpload = (props: FieldProps) => {
  const { field, form } = props;
  const [flashes, setFlashes] = useFlashes();
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!e.currentTarget.files || !e.currentTarget.files.length) {
        return;
      }
      const image = e.currentTarget.files[0];
      const formData = new FormData();
      formData.append("image", image);

      const response = await apiClient.post("/upload-image", formData);
      if (response.data.success) {
        setFlashes([
          ...flashes,
          { success: true, message: "file uploaded! :)" },
        ]);
      }
      form.setFieldValue(field.name, response.data.url);
    } catch (err) {
      setFlashes([
        ...flashes,
        { success: false, message: "Make sure the file is a valid image" },
      ]);
    }
  };

  return (
    <input
      type="file"
      onChange={handleChange}
      accept="image/gif, image/png, image/jpeg"
    />
  );
};
