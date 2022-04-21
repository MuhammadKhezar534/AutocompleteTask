import React from "react";
import "./autoComplete.css";

interface autoComplete {
  id?: string;
  currentOption: Number;
  options: Array<string>;
  country: string;
  handleChange: (e: any) => void;
  hadleUpAndDown: (e: any) => void;
  handleClick: (e: any) => void;
  handleSubmit: () => void;
}

const AutoComplete: React.FC<autoComplete> = ({
  options,
  country,
  handleClick,
  handleSubmit,
  handleChange,
  currentOption,
  hadleUpAndDown,
}) => {
  return (
    <main className="auto-complete-container">
      <form autoComplete="false" onSubmit={handleSubmit}>
        <div className="autocomplete">
          <input
            id="myInput"
            type="text"
            name="myCountry"
            placeholder="Country"
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => hadleUpAndDown(e)}
            onKeyPress={(e) => hadleUpAndDown(e)}
            value={country}
          />
        </div>
        <input type="submit" />
      </form>
      <div className="autocomplete-items">
        {options.length > 0 &&
          options.map((option: string, index) => (
            <div
              key={option}
              className={index === currentOption ? "autocomplete-active" : ""}
              onClick={() => handleClick(index)}
            >
              {option}
            </div>
          ))}
      </div>
    </main>
  );
};

export default AutoComplete;
