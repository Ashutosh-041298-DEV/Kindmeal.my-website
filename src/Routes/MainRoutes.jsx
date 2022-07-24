import React from "react";
import { Route, Routes } from "react-router-dom";
import AddDirectory from "../components/AddDirectory";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Help from "../Pages/Help";
import Home from "../Pages/Home";
import Join from "../Pages/Join";
import JoinShop from "../Pages/JoinShop";
import JoinSuccess from "../Pages/JoinSuccess";
import KindMoment from "../Pages/KindMoment";
import KindMoments from "../Pages/KindMoments";
import Logout from "../Pages/LogOut";
import MealDeals from "../Pages/MealDeals";
import Recipes from "../Pages/Recipes";
const MainRoutes = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<MealDeals />} />
        <Route path="/join" element={<Join />} />
        <Route path="/joinshop" element={<JoinShop />} />
        <Route path="/joinsuccess" element={<JoinSuccess />} />
        <Route path="/help" element={<Help />} />
        <Route path="/directory/addshop" element={<AddDirectory />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/kindmoments" element={<KindMoments />} />
        <Route path="/kindmoments/:id" element={<KindMoment />} />
      ?
      </Routes>
      <Footer />
    </div>
  );
};

export default MainRoutes;
