import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Email,
  Facebook,
  GreenBar,
  Logo,
  Nav,
  Signup,
  Social,
} from "./Styled";
import { NavLink, Link } from "react-router-dom";
import LoginPopup from "../PopUp/LoginPopUp";
import SignupPopup from "../PopUp/SignUpPopUp";
import { AuthContext } from "../Context/AuthContext";


const GreenLinks=({children})=>{
  return (
    <div style={{ heigth: '100%',
      padding: '0px 22px',
      display: 'block'}}>
        {children}
    </div>
  )
}



const Navbar = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [photo, setPhoto] = useState("");
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const getdata = () => {
    let data = JSON.parse(localStorage.getItem("RegisteredData")) || [];
    
    if (data.length > 0) {
      setIsAuth(true);
      setName(data[0].firstName);
      setLastname(data[0].lastName);
      setPhoto(data[0].photo);
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  const handleLogOut = () => {
    navigate("/logout")
    setIsAuth(false);
  };

  return (
    <>
      <Nav>
        <Link to="/">
          <Logo
            src="https://www.kindmeal.my/images/logo-kindmeal.png"
            alt="LogoImg"
          />
        </Link>

        <div style={{ display: "flex" }}>
          <a href="https://www.kindmeal.my/widget.htm">
            {" "}
            <Social
              src="https://www.kindmeal.my/images/follow_blog_grey.png"
              title="Saves Lives With Your Blog - KindMeal.my Widgets"
            />
          </a>
          <a href="https://www.facebook.com/KindMeal.my">
            {" "}
            <Social
              src="https://www.kindmeal.my/images/follow_facebook_grey.png"
              title="Follow KindMeal.my on Facebook"
            />
          </a>
          <a href="https://twitter.com/KindMeal">
            <Social
              src="https://www.kindmeal.my/images/follow_twitter_grey.png"
              title="Follow KindMeal.my on Twitter"
            />
          </a>
        </div>
        {isAuth ? (  <div>
          <div style={{ display: "flex",justifyContent:"space-between",alignItems:"center",marginTop:"-10px" }}>
             <p style={{  marginRight: "25px",color:"black" }}>
              {name} {lastname}
            </p> 
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="user" style={{borderRadius:"50%", height:"50px"}}  onClick={()=>navigate("/userprofile")}/>
           <p style={{cursor:"pointer",marginLeft:"25px",color:"black"}} onClick={handleLogOut}>Log Out</p>
         </div>
        
          
              
           
          
       </div> ) : (
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <p style={{ fontSize: "12px" }}>
              <LoginPopup />
            </p>
            <div className="facebook_email">
              <Facebook className="show" style={{ backgroundColor: "#35619f" }}>
                Facebook
              </Facebook>
              <p className="hide">Login with Facebook Account</p>
            </div>
            <div className="facebook_email">
              <Email className="showEmail" style={{ background: "#666666" }}>
                Email
              </Email>
              <p className="hideEmail">Login with KindMeal Account</p>
            </div>
            <Signup>
              <SignupPopup />
            </Signup>
          </div>
        )}
      </Nav>
      <GreenBar>
        <GreenLinks>
          <NavLink
            className="NavLink"
            to="/"
            style={{ textDecoration: "none" }}
          >
            Home
          </NavLink>
        </GreenLinks>
        <GreenLinks>
          <NavLink
            className="NavLink"
            to="/deals"
            style={{ textDecoration: "none" }}
          >
            Meal Deals
          </NavLink>
        </GreenLinks>
        <GreenLinks>
          <NavLink
            className="NavLink"
            to="/kindmoments"
            style={{ textDecoration: "none" }}
          >
            KindMoments
          </NavLink>
        </GreenLinks>
      
        <GreenLinks>
          <NavLink
            className="NavLink"
            to="/recipes"
            style={{ textDecoration: "none" }}
          >
            Recipes
          </NavLink>
        </GreenLinks>
       
        <GreenLinks>
          <NavLink
            className="NavLink"
            to="/help"
            style={{ textDecoration: "none" }}
          >
            Help
          </NavLink>
        </GreenLinks>
      </GreenBar>
    </>
  );
};

export default Navbar;
