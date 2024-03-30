/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import CountryFlag from "react-country-flag";

function FlagImoji({ countryCode }) {
  return (
    <div>
      <CountryFlag countryCode={countryCode} svg />
    </div>
  );
}

export default FlagImoji;
