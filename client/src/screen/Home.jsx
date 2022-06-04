import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import homePage from "../assets/home-page.jpg";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    backgroundImage: `url(${homePage})`,
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    flexDirection: "column",
  },
  button_order: {
    backgroundColor: "#EF8B17",
    padding: 20,
    margin: "2px",
    cursor: "pointer",
    fontFamily: "Arial",
    borderRadius: "6px",
    textAlign: "center",
    verticalAlign: "middle",
    backgroundClip: "padding-box",
    fontWeight: "bolder",
    fontSize: 20,
    color: "#fff",
    display: "inline-block",
  },
  button_takeaway: {
    backgroundColor: "#334f66",
    padding: 20,
    margin: "2px",
    cursor: "pointer",
    fontFamily: "Arial",
    borderRadius: "6px",
    textAlign: "center",
    verticalAlign: "middle",
    backgroundClip: "padding-box",
    fontWeight: "bolder",
    fontSize: 20,
    color: "#fff",
    display: "inline-block",
  },
});
function Home() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <button className={classes.button_order}>
        <Link to="menu" style={{ textDecoration: "none", color: "#fff" }}>
          See MENU & Order
        </Link>
      </button>
      <button className={classes.button_takeaway}>
        <Link to="menu" style={{ textDecoration: "none", color: "#fff" }}>
          See MENU & Takeaway
        </Link>
      </button>
    </div>
  );
}

export default Home;
