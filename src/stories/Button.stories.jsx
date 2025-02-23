// stories/Calendar.stories.jsx
import React, { useState } from "react";
import Calendar from "../components/Calendar";

export default {
  title: "Components/Calendar",
  component: Calendar,
  argTypes: {
    width: { control: "text" },
    padding: { control: "text" },
    borderRadius: { control: "text" },
    bgColor: { control: "color" },
    textColor: { control: "color" },
    fontSize: { control: "text" },
  },
};

const Template = (args) => {
  const [date, setDate] = useState("");

  return <Calendar {...args} value={date} onChange={setDate} />;
};

// ✅ **Fix: Rename Default Exports**
export const DefaultCalendar = Template.bind({});
DefaultCalendar.args = {
  width: "80px",
  padding: "12px 16px",
  borderRadius: "8px",
  bgColor: "white",
  textColor: "#333",
  fontSize: "16px",
};

export const CalendarWithCustomStyle = Template.bind({});
CalendarWithCustomStyle.args = {
  width: "30px",
  padding: "14px 18px",
  borderRadius: "10px",
  bgColor: "#f5f5f5",
  textColor: "#444",
  fontSize: "18px",
};
