// stories/Dropdown.stories.jsx
import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
};

const Template = (args) => {
  const [selected, setSelected] = useState(args.selectedValue || "");

  return <Dropdown {...args} selectedValue={selected} onChange={setSelected}  />;
};

export const Default = Template.bind({});
Default.args = {
  options: [
    { id: 1, value: "Option 1" },
    { id: 2, value: "Option 2" },
    { id: 3, value: "Option 3" },
  ],
};
