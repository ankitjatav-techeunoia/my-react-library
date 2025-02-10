import React, { useState } from "react";
import ToggleSwitch from "../components/ToggleSwitch";

export default {
  title: "Components/ToggleSwitch",
  component: ToggleSwitch,
  argTypes: {
    width: { control: "text" },
    height: { control: "text" },
    activeBg: { control: "color" },
    inactiveBg: { control: "color" },
    knobSize: { control: "text" },
    knobColor: { control: "color" },
    label: { control: "text" },
    labelSize: { control: "text" },
    labelColor: { control: "color" },
  },
};

// ✅ Reusable Template for Stories
const Template = (args) => {
  const [toggled, setToggled] = useState(false);
  return <ToggleSwitch {...args} toggled={toggled} onToggle={setToggled} />;
};

// ✅ Default Toggle
export const DefaultToggle = Template.bind({});
DefaultToggle.args = {
  width: "50px",
  height: "26px",
  activeBg: "#4CAF50",
  inactiveBg: "#ccc",
  knobSize: "22px",
  knobColor: "white",
};

// ✅ Custom Styled Toggle
export const CustomStyledToggle = Template.bind({});
CustomStyledToggle.args = {
  width: "60px",
  height: "30px",
  activeBg: "#007BFF",
  inactiveBg: "#ddd",
  knobSize: "26px",
  knobColor: "#fff",
  label: "Dark Mode",
  labelSize: "18px",
  labelColor: "#000",
};
