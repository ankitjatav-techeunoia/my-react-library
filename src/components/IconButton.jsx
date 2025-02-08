// src/components/IconButton.jsx
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// ✅ Styled Button Component
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.gap || "8px"};
  padding: ${(props) => props.padding || "10px 16px"};
  border-radius: ${(props) => props.borderRadius || "8px"};
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  background-color: ${(props) =>
    props.variant === "primary"
      ? "#007bff"
      : props.variant === "secondary"
      ? "#6c757d"
      : "#dc3545"};
  color: ${(props) => props.textColor || "white"};

  &:hover {
    opacity: 0.8;
  }
  
  svg {
    width: ${(props) => props.iconSize || "18px"};
    height: ${(props) => props.iconSize || "18px"};
  }
`;

const IconButton = ({ text, variant, onClick, prefixIcon, suffixIcon, ...props }) => {
  return (
    <StyledButton variant={variant} onClick={onClick} {...props}>
      {prefixIcon && <span>{prefixIcon}</span>}
      {text}
      {suffixIcon && <span>{suffixIcon}</span>}
    </StyledButton>
  );
};

// ✅ PropTypes Validation
IconButton.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  onClick: PropTypes.func,
  prefixIcon: PropTypes.element,
  suffixIcon: PropTypes.element,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  textColor: PropTypes.string,
  iconSize: PropTypes.string,
  gap: PropTypes.string,
};

// ✅ Default Props
IconButton.defaultProps = {
  text: "Click Me",
  variant: "primary",
  onClick: () => alert("Button Clicked!"),
  prefixIcon: null,
  suffixIcon: null,
  padding: "10px 16px",
  borderRadius: "8px",
  textColor: "white",
  iconSize: "18px",
  gap: "8px",
};

export default IconButton;
