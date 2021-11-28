import { React } from "react";

function Header() {
  return (
    <header
      className="Header"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottom: '1px solid green',
        padding: '3em'
      }}
    >
      <h1>Välkommen till Browse My Videos!</h1>
    </header>
  );
}

export default Header;
