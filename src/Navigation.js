import React, { useEffect, useState } from "react";
import "./Navigation.css";
function Navigation() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 75) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className={`Navigation ${show && "Navigation_bar"}`}>
      <img
        className="Netflix_LOGO"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        alt="Netflix"
      />

      <img
        className="profile_avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
        alt="Profile"
      />
    </div>
  );
}

export default Navigation;
