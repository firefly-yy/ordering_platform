import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <button>
        <Link to="menu">See MENU & Order</Link>
      </button>
      <button>
        <Link to="menu">See MENU & Takeaway</Link>
      </button>
    </div>
  );
}

export default Home;
