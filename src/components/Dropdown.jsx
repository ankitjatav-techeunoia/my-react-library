// src/components/Dropdown.jsx
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// ✅ Styled Dropdown
const SelectWrapper = styled.select`
  width: ${(props) => props.width || "200px"};
  padding: ${(props) => props.padding || "8px 12px"};
  border: 1px solid #ccc;
  border-radius: ${(props) => props.borderRadius || "6px"};
  background-color: ${(props) => props.bgColor || "white"};
  color: ${(props) => props.textColor || "#333"};
  font-size: ${(props) => props.fontSize || "16px"};
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Dropdown = ({ options, onChange, selectedValue, ...props }) => {
  return (
    <SelectWrapper onChange={(e) => onChange(e.target.value)} value={selectedValue} {...props}>
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.value}
        </option>
      ))}
    </SelectWrapper>
  );
};

// ✅ PropTypes Validation
Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  selectedValue: PropTypes.string,
  width: PropTypes.string,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  fontSize: PropTypes.string,
};

// ✅ Default Props
Dropdown.defaultProps = {
  options: [],
  onChange: () => {},
  selectedValue: "",
  width: "200px",
  padding: "8px 12px",
  borderRadius: "6px",
  bgColor: "white",
  textColor: "#333",
  fontSize: "16px",
};

export default Dropdown;
