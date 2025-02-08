// stories/Button.stories.jsx
import React from "react";
import Button from "../components/Button";

export default {
  title: "Components/Button", // Category name in Storybook
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select", options: ["primary", "secondary", "danger"] },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary Button",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Secondary Button",
  variant: "secondary",
};

export const Danger = Template.bind({});
Danger.args = {
  text: "Danger Button",
  variant: "danger",
};
