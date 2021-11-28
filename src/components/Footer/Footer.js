import { React } from "react";

function Footer() {
  return (
    <footer
      className="footer"
      style={{
        width: "100%",
        marginTop: "3em",
        padding: "4em",
        borderTop: "1px solid green",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>
          Thx to <a href="https://www.themoviedb.org/">TMDB</a> for sharing
          their movie database API.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
