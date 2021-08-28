import React, { useState } from "react";
import DatePicker from "react-datepicker";

export function CalendarNew() {
    const [date, setDate] = useState( new Date() ) ;
  
    return (
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        showDisabledMonthNavigation
        isClearable
        dateFormat="MM/dd/yyyy"
        openToDate={date}
        withPortal
      />
    );
};

export function CalendarUpdate(props) {

  const [startDate, setStartDate] = useState( new Date(props.endDate) ) ;

  return (
    <DatePicker
      selected={startDate}
      selectsStart
      onChange={(date) => setStartDate(date)}
      showDisabledMonthNavigation
      isClearable
      dateFormat="MM/dd/yyyy"
      openToDate={startDate}
      withPortal
    />
  );
};

