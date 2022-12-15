import React from "react";
import calendar from "../images/calendar.png"

const ButtonGroup = () => {
  return (
    <div>
      <div className="flex items-center space-x-1">
        <a
          href="/"
          title="1 Day"
          className="px-3 py-1 rounded border-2 border-blue-600 bg-blue-200 font-bold"
        >
          1D
        </a>
        <a
          href="/"
          title="1 Week"
          className="px-3 py-1 rounded border bg-blue-50 hover:bg-blue-100 font-bold"
        >
          1W
        </a>
        <a
          href="/"
          title="1 Month"
          className="px-3 py-1 rounded border bg-blue-50 hover:bg-blue-100 font-bold"
        >
          1M
        </a>
        <a
          href="/"
          title="6 Month"
          className="px-3 py-1 rounded border bg-blue-50 hover:bg-blue-100 font-bold"
        >
          6M
        </a>
        <a
          href="/"
          title="1 Year"
          className="px-3 py-1 rounded border bg-blue-50 hover:bg-blue-100 font-bold"
        >
          1Y
        </a>
        <a
          href="/"
          title="Calender"
          className="px-3 py-1 rounded border bg-blue-50 hover:bg-blue-100"
        >
          <img src={calendar} alt="Logo" className="w-6" />
        </a>
      </div>
    </div>
  );
};

export default ButtonGroup;
