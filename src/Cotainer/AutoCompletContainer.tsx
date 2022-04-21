import React, { useState } from "react";
import AutoCoomplete from "../Component/AutoComplete";
import View from "../Component/View";
import { countries } from "./country";

const AutoCompletContainer: React.FC = () => {
  const [options, setOptions] = useState<Array<string>>([]);
  const [country, setCountry] = useState<string>("");
  const [currentOption, setCurrentOption] = useState(0);
  const [activeComponent, setActiveComponent] = useState<Boolean>(false);

  const handleChange = (e: any) => {
    setCountry(e.target.value);
    let getSelectedCountries: string[] = [];
    countries.forEach((option: string) => {
      if (option.toLowerCase().startsWith(e.target.value.toLowerCase())) {
        return getSelectedCountries.push(option);
      }
    });
    setOptions(getSelectedCountries);
  };

  const handleClick = (e: any) => {
    setCountry(options[e]);
    setOptions([]);
  };

  const hadleUpAndDown = (e: any) => {
    switch (e.key) {
      case "ArrowDown":
        return downToList();
      case "ArrowUp":
        return upToList();
      case "Enter":
        return enterToList(e);
      default:
        return null;
    }
  };

  const downToList = () => {
    setCurrentOption((prevOption) => prevOption + 1);
    if (currentOption >= options.length - 1) {
      setCurrentOption(0);
    }
  };

  const upToList = () => {
    setCurrentOption((prevOption) => prevOption - 1);
    if (currentOption <= 0) {
      setCurrentOption(options.length - 1);
    }
  };

  const enterToList = (e: any) => {
    e.preventDefault();
    setCountry(options[currentOption]);
    setOptions([]);
  };

  const handleSubmit = () => {
    if (country) {
      setActiveComponent(true);
    }
  };

  if (activeComponent)
    return (
      <View
        country={country}
        setActiveComponent={() => setActiveComponent(!activeComponent)}
      />
    );
  return (
    <div>
      <AutoCoomplete
        country={country}
        options={options}
        handleClick={handleClick}
        handleChange={handleChange}
        currentOption={currentOption}
        hadleUpAndDown={hadleUpAndDown}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AutoCompletContainer;
