import React, { useState, useEffect } from "react";
import "./staggeredMenu.css";

const StaggeredMenu = ({
  items = [],
  socialItems = [],
  position = "right",
  menuButtonColor = "#fff",
  accentColor = "#5227FF",
}) => {
  const [open, setOpen] = useState(false);

  

  return (
    <>
      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        style={{ color: menuButtonColor }}
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}

      <div className={`menu-panel ${open ? "open" : ""} ${position}`}>
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              style={{
                animationDelay: `${index * 0.1}s`,
                color: accentColor,
              }}
            >
              <a href={item.link} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="socials">
          {socialItems.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noreferrer"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default StaggeredMenu;