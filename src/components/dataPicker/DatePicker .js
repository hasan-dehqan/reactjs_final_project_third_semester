import React, { useState } from 'react';
import { DtPicker } from 'react-calendar-datetime-picker'; 
import 'react-calendar-datetime-picker/dist/style.css'; 

const DatePicker = () => {
  const [date, setDate] = useState(null);

  return (
    <DtPicker
      onChange={setDate}
      local="fa" 
      showWeekend 
      showTimeInput={false} 
      autoClose={true} 
      placeholder='تاریخ را انتخاب کنید'
      inputClass='custom-input'
      daysClass='custom-days'
      headerClass='custom-header'
      type='single' 
    />
  );
};

export default DatePicker;
