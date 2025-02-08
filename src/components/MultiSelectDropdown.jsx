// src/components/MultiSelectDropdown.jsx
import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// ✅ Styled Dropdown Wrapper
const SelectWrapper = styled.div`
  width: ${(props) => props.width || "220px"};
  position: relative;
  font-size: ${(props) => props.fontSize || "16px"};
`;

// ✅ Styled Select Box
const StyledSelect = styled.div`
  padding: ${(props) => props.padding || "10px 12px"};
  border: 1px solid #ccc;
  border-radius: ${(props) => props.borderRadius || "6px"};
  background-color: ${(props) => props.bgColor || "white"};
  color: ${(props) => props.textColor || "#333"};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    border-color: #007bff;
  }
`;

// ✅ Styled Options List
const OptionsList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
`;

// ✅ Styled Option
const Option = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${(props) => (props.selected ? "#007bff" : "white")};
  color: ${(props) => (props.selected ? "white" : "#333")};

  &:hover {
    background: #007bff;
    color: white;
  }
`;

// ✅ Multi-Select Dropdown Component
const MultiSelectDropdown = ({ options, onChange, width, ...props }) => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Handle Selection
  const handleSelect = (id) => {
    let updatedSelection;
    if (selectedIds.includes(id)) {
      updatedSelection = selectedIds.filter((selectedId) => selectedId !== id);
    } else {
      updatedSelection = [...selectedIds, id];
    }

    setSelectedIds(updatedSelection);
    onChange(updatedSelection); // Return selected IDs
    console.log("Selected IDs:", updatedSelection);
  };

  return (
    <SelectWrapper width={width} {...props}>
      <StyledSelect onClick={() => setIsOpen(!isOpen)}>
        {selectedIds.length > 0
          ? options
              .filter((option) => selectedIds.includes(option.id))
              .map((option) => option.value)
              .join(", ")
          : "Select options"}
        <span>▼</span>
      </StyledSelect>

      {isOpen && (
        <OptionsList>
          {options.map((option) => (
            <Option
              key={option.id}
              selected={selectedIds.includes(option.id)}
              onClick={() => handleSelect(option.id)}
            >
              <input
                type="checkbox"
                checked={selectedIds.includes(option.id)}
                readOnly
              />
              {option.value}
            </Option>
          ))}
        </OptionsList>
      )}
    </SelectWrapper>
  );
};

// ✅ PropTypes Validation
MultiSelectDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  width: PropTypes.string,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  fontSize: PropTypes.string,
};

// ✅ Default Props
MultiSelectDropdown.defaultProps = {
  options: [],
  onChange: () => {},
  width: "220px",
  padding: "10px 12px",
  borderRadius: "6px",
  bgColor: "white",
  textColor: "#333",
  fontSize: "16px",
};

export default MultiSelectDropdown;
