import React, { useEffect, useState } from "react";

type DataTimePorps = {
  dateLayout?: string;
  timeLayout?: string;
};

const DateTime: React.FC<DataTimePorps> = ({ dateLayout, timeLayout }) => {
  const [currentDate, setCurrentDate] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    // Update the date and time every second
    const intervalId = setInterval(() => {
      const now = new Date();

      // Format the date as 'Month Day, Year'
      const formattedDate = now.toLocaleDateString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });

      // Format the time as 'Hours:Minutes AM/PM'
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      setCurrentDate(formattedDate);
      setCurrentTime(formattedTime);
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className={`${dateLayout}`}>{currentDate}</div>
      <div className={`${timeLayout}`}>{currentTime}</div>
    </div>
  );
};

export default DateTime;
