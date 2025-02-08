// stories/IconButton.stories.jsx
import React from "react";
import IconButton from "../components/IconButton";
import { FiSearch, FiCheckCircle } from "react-icons/fi"; // Icons for demo

export default {
  title: "Components/IconButton",
  component: IconButton,
  argTypes: {
    variant: {
      control: { type: "select", options: ["primary", "secondary", "danger"] },
    },
    iconSize: {
      control: { type: "text" },
    },
    textColor: {
      control: { type: "color" },
    },
  },
};

const Template = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary",
  variant: "primary",
  prefixIcon: <FiSearch />,
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Secondary",
  variant: "secondary",
  suffixIcon: <FiCheckCircle />,
};

export const BothIcons = Template.bind({});
BothIcons.args = {
  text: "Confirm",
  variant: "danger",
  prefixIcon: <FiSearch />,
  suffixIcon: <FiCheckCircle />,
};
