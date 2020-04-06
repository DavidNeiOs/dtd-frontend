import React, { useState, useEffect } from "react";
import { FieldProps } from "formik";

import { useDebounce } from "../../utils/useDebounce";
import { getAutoCompleteUrl, getGeocodeUrl } from "../../services/google-maps";

export const LocationInput = (props: FieldProps) => {
  const { field, form } = props;
  const [address, setAddress] = useState("");
  const [results, setResults] = useState([] as any[]);
  const [hasChooseAddress, setHasChosenAddress] = useState(false);

  let searchTerm = useDebounce(address, 500);

  const onClear = () => {
    setResults([]);
  };

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(getAutoCompleteUrl(searchTerm));
        const json = await response.json();
        setResults(json.predictions);
      } catch (err) {
        console.log(err);
      }
    };
    // if an option has been seleceted do not fetch new reults
    if (hasChooseAddress) return;
    if (searchTerm !== "") {
      fetchResults();
    } else {
      onClear();
    }
  }, [searchTerm, hasChooseAddress]);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasChosenAddress(false);
    setAddress(e.target.value);
  };

  const onSelecOption = async (address: string) => {
    try {
      const response = await fetch(getGeocodeUrl(address));
      const json = await response.json();

      setAddress(json.results[0].formatted_address);
      setResults([]);
      setHasChosenAddress(true);
      form.setFieldValue(field.name, json.results[0].formatted_address);
      form.setFieldValue("location.coordinates", [
        json.results[0].geometry.location.lng,
        json.results[0].geometry.location.lat,
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  const renderResults = () => {
    return results.map((result) => (
      <button
        className="location-option"
        type="button"
        key={result.id}
        onClick={() => onSelecOption(result.description)}
      >
        {result.description}
      </button>
    ));
  };

  return (
    <div>
      <input
        type="text"
        placeholder={field?.value || ""}
        onChange={handleChange}
        value={address}
      />
      {renderResults()}
    </div>
  );
};
