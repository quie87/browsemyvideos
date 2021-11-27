import { React } from "react";

function Footer() {
  return (
    <footer
      className="footer"
      style={{ position: "fixed", left: 0, bottom: 0, width: "100%" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Här skulle det kunna finnas lite info om siten</p>
      </div>
    </footer>
  );
}

export default Footer;
