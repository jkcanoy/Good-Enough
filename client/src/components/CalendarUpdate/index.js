import React, { useState } from "react";
import DatePicker from "react-datepicker";

export default function CalendarUpdate(props) {

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

