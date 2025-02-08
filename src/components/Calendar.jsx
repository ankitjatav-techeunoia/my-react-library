// src/components/Calendar.jsx
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

// ✅ Styled Components
const CalendarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.padding || "12px 16px"};
  border: 1px solid #ccc;
  border-radius: ${(props) => props.borderRadius || "8px"};
  background-color: ${(props) => props.bgColor || "#fff"};
  color: ${(props) => props.textColor || "#333"};
  font-size: ${(props) => props.fontSize || "16px"};
  cursor: pointer;
  position: relative;
  width: ${(props) => props.width || "280px"};
  transition: all 0.3s ease-in-out;
  
  &:hover {
    border-color: #007bff;
  }
`;

const CalendarDropdown = styled.div`
  position: absolute;
  top: 14%;
  left: 0;
  width: 300px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
  padding: 12px;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  padding-bottom: 8px;
  border-bottom: 1px solid #ddd;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  padding-top: 10px;
  text-align: center;
`;

const Day = styled.div`
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  background: ${(props) => (props.selected ? "#007bff" : "transparent")};
  color: ${(props) => (props.selected ? "white" : "#333")};

  &:hover {
    background: #007bff;
    color: white;
  }
`;

const Calendar = ({ value, onChange, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(value || "");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const calendarRef = useRef(null);

  const toggleCalendar = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectDate = (date) => {
    const formattedDate = `${currentMonth.getFullYear()}-${(currentMonth.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.toString().padStart(2, "0")}`;
    setSelectedDate(formattedDate);
    onChange(formattedDate);
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // ✅ Generate Dates for Current Month
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  const daysArray = Array.from({ length: firstDay }, () => null).concat([...Array(daysInMonth).keys()].map((i) => i + 1));

  return (
    <div ref={calendarRef}>
      <CalendarWrapper onClick={toggleCalendar} {...props}>
        {selectedDate || "Select Date"}
      </CalendarWrapper>

      {isOpen && (
        <CalendarDropdown>
          <CalendarHeader>
            <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}>
              {"◀"}
            </button>
            {currentMonth.toLocaleString("default", { month: "long" })} {currentMonth.getFullYear()}
            <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}>
              {"▶"}
            </button>
          </CalendarHeader>

          <CalendarGrid>
            {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
              <Day key={day} style={{ fontWeight: "bold", cursor: "default" }}>
                {day}
              </Day>
            ))}
            {daysArray.map((day, index) =>
              day ? (
                <Day key={index} selected={selectedDate.endsWith(`-${day.toString().padStart(2, "0")}`)} onClick={() => handleSelectDate(day)}>
                  {day}
                </Day>
              ) : (
                <div key={index} />
              )
            )}
          </CalendarGrid>
        </CalendarDropdown>
      )}
    </div>
  );
};

export default Calendar;
