// src/components/ToggleSwitch.jsx
import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// ✅ Styled Components
const ToggleContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
`;

const ToggleLabel = styled.span`
  font-size: ${(props) => props.labelSize || "16px"};
  color: ${(props) => props.labelColor || "#333"};
`;

const Switch = styled.div`
  width: ${(props) => props.width || "50px"};
  height: ${(props) => props.height || "26px"};
  background: ${(props) => (props.toggled ? props.activeBg || "#4CAF50" : props.inactiveBg || "#ccc")};
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 2px;
  transition: background 0.3s ease-in-out;
  position: relative;
`;

const Knob = styled.div`
  width: ${(props) => props.knobSize || "22px"};
  height: ${(props) => props.knobSize || "22px"};
  background: ${(props) => props.knobColor || "white"};
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.toggled ? `translateX(${props.width ? parseInt(props.width) - 26 + "px" : "24px"})` : "translateX(0)")};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;

const ToggleSwitch = ({ toggled, onToggle, label, ...props }) => {
  return (
    <ToggleContainer onClick={() => onToggle(!toggled)}>
      {label && <ToggleLabel {...props}>{label}</ToggleLabel>}
      <Switch toggled={toggled} {...props}>
        <Knob toggled={toggled} {...props} />
      </Switch>
    </ToggleContainer>
  );
};

// ✅ PropTypes Validation
ToggleSwitch.propTypes = {
  toggled: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  label: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  activeBg: PropTypes.string,
  inactiveBg: PropTypes.string,
  knobSize: PropTypes.string,
  knobColor: PropTypes.string,
  labelSize: PropTypes.string,
  labelColor: PropTypes.string,
};

// ✅ Default Props
ToggleSwitch.defaultProps = {
  toggled: false,
  width: "50px",
  height: "26px",
  activeBg: "#4CAF50",
  inactiveBg: "#ccc",
  knobSize: "22px",
  knobColor: "white",
  labelSize: "16px",
  labelColor: "#333",
};

export default ToggleSwitch;
