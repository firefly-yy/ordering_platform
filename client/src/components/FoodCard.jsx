import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    backgroundColor: "white",
    overflow: "hidden",
    padding: "10px",
  },

  title: {
    fontSize: "1rem",
    // lineHeight: "1.5px",
    fontWeight: "bolder",
  },
  detail: {},
  price: {},
});

function FoodCard() {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div className={classes.title}>food</div>
      <div className={classes.detail}>detail</div>
      <div className={classes.price}>€25</div>
    </div>
  );
}

export default FoodCard;
