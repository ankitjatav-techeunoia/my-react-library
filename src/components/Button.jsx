// src/components/Button.jsx
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// ✅ Styled Button Component
const StyledButton = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  /* Dynamic Props Based Styling */
  background-color: ${(props) =>
    props.variant === "primary" ? "#007bff" : props.variant === "secondary" ? "#6c757d" : "#dc3545"};
  color: white;
  
  &:hover {
    opacity: 0.8;
  }
`;

const Button = ({ text, variant, onClick }) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

// ✅ PropTypes Validation
Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  onClick: PropTypes.func,
};

// ✅ Default Props
Button.defaultProps = {
  text: "Click me",
  variant: "primary",
  onClick: () => alert("Button Clicked!"),
};

export default Button;
