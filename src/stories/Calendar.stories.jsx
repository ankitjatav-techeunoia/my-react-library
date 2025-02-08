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

// ✅ Reusable Template for Stories
const Template = (args) => {
  const [date, setDate] = useState("");

  return <Calendar {...args} value={date} onChange={setDate} />;
};

// ✅ Basic Calendar (Renamed from DefaultCalendar)
export const BasicCalendar = Template.bind({});
BasicCalendar.args = {
  width: "280px",
  padding: "12px 16px",
  borderRadius: "8px",
  bgColor: "white",
  textColor: "#333",
  fontSize: "16px",
};

// ✅ Custom Styled Calendar
export const CustomStyledCalendar = Template.bind({});
CustomStyledCalendar.args = {
  width: "320px",
  padding: "14px 18px",
  borderRadius: "12px",
  bgColor: "#f3f3f3",
  textColor: "#111",
  fontSize: "18px",
};
