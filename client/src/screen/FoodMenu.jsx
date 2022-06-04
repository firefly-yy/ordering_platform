import React from "react";
import FoodCard from "../components/FoodCard";
import { createUseStyles } from "react-jss";
import { FiShoppingCart } from "react-icons/fi";

const useStyles = createUseStyles({
  container: {
    width: "100%",
    backgroundColor: "#fcfcfb",
  },
  header: {
    width: "100%",
    position: "fixed",
    height: "70px",
    top: 0,
  },
  cart: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
  },
  body: {
    marginTop: "60px",
  },
});

function FoodMenu() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.header}>
        <div className={classes.cart}>
          <FiShoppingCart size={40} />
          <span className="header__optionLineTwo header__basketCount">33</span>
        </div>
      </div>
      <div className={classes.body}>
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
    </div>
  );
}

export default FoodMenu;
