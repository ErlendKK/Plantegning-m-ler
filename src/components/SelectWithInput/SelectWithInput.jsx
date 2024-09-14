import { useState, useEffect } from "react";
import { Select, lighten } from "@mantine/core";
import styles from "./SelectWithInput.module.css";
import { DEFAULT_VARMELAGRING_FASADE } from "../../constants/results-table-constants";

const SelectWithInput = ({ value, onChange, data, tabIndex }) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (newValue) => {
    setInputValue(newValue.trim());
    onChange(newValue.trim());
  };

  const handleSearchChange = (newValue) => {
    console.log("handleSearchChange", newValue);
    setInputValue(newValue);
    if (data.includes(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <Select
      data={data}
      value={value}
      onChange={handleChange}
      searchable
      clearable={false}
      maxDropdownHeight={300}
      placeholder={DEFAULT_VARMELAGRING_FASADE}
      onSearchChange={handleSearchChange}
      searchValue={inputValue}
      nothingFoundMessage="Ingen treff"
      tabIndex={tabIndex}
      comboboxProps={{
        position: "left",
        middlewares: { flip: false, shift: false },
        withinPortal: true,
        shadow: "md",
      }}
      classNames={{
        root: styles.root,
        input: styles.input,
        dropdown: styles.dropdown,
        options: styles.dropdownContent,
      }}
      styles={(theme) => ({
        input: {
          backgroundColor: lighten(theme.colors.dark[7], 0.95),
        },
        options: {
          maxHeight: "none", // Remove max-height limitation
        },
      })}
    />
  );
};

export default SelectWithInput;
