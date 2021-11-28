import { React } from "react";

function Footer() {
  return (
    <footer
      className="footer"
      style={{  width: "100%", marginTop: '3em', padding: '4em', borderTop: '1px solid green' }}
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
