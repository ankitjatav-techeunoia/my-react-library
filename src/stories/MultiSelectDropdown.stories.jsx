// stories/MultiSelectDropdown.stories.jsx
import React, { useState } from "react";
import MultiSelectDropdown from "../components/MultiSelectDropdown";

export default {
  title: "Components/MultiSelectDropdown",
  component: MultiSelectDropdown,
};

const Template = (args) => {
  const [selected, setSelected] = useState([]);

  return (
    <MultiSelectDropdown {...args} onChange={setSelected} />
  );
};

export const Default = Template.bind({});
Default.args = {
  options: [
    { id: 1, value: "Option 1" },
    { id: 2, value: "Option 2" },
    { id: 3, value: "Option 3" },
    { id: 4, value: "Option 4" },
  ],
};
