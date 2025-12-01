import React, {useContext} from "react";
import classes from "./Header.module.css";
import { DataContext } from "../DataProvider/DataProvider";
import { Link } from "react-router-dom";
import LowerHeader from "./LowerHeader";
import { BiCart } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";


const Header = () => {
  const [state, dispatch] = useContext(DataContext);
console.log(state.basket.length)
  return (
    <>
      <section className={classes.fixed}>
        <div className={classes.header_container}>

          {/* logo section */}
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>

            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* search section */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={25} />
          </div>

          {/* order section */}
          <div className={classes.order_container}>
            
            <div className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </div>

            <Link to="/SignIn">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </Link>

            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>

            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{state.basket.length}</span>
            </Link>

          </div>
        </div>
      </section>

      <LowerHeader />
    </>
  );
};

export default Header;
