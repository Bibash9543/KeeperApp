import React from "react";

function Footer() {
  const currentTime = new Date().getFullYear();

  return (
    <footer>
      <p>@copyright {currentTime}</p>;
    </footer>
  );
}
export default Footer;
