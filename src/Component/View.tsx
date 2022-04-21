import React, { Fragment } from "react";
import "./autoComplete.css";

interface view {
  country: string;
  setActiveComponent: () => void;
}
const View: React.FC<view> = ({ country, setActiveComponent }) => {
  return (
    <Fragment>
      <h1>Submitted Form Data</h1>
      <h2>Your input was received as:</h2>
      <div className="w3-border">{`myCountry=${country}`}</div>

      <button className="btn" onClick={setActiveComponent}>
        Back
      </button>
    </Fragment>
  );
};

export default View;
