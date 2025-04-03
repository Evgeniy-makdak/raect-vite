import { useEffect, useState } from "react";
import logo from "/images/logo.jpg";

export default function Header() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("ru-RU", { hour12: false })
  );

  useEffect(() => {
    const timeNow = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString("ru-RU", { hour12: false }));
      clearInterval(timeNow);
    }, 1000);
  }, [currentTime]);

  return (
    <header>
      <div className="header-container">
        <img src={logo} alt="logo" className="logo" />
        <span className="time">Текущее время: {currentTime}</span>
      </div>
    </header>
  );
}
