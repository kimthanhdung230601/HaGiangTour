import { Route, Routes } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home";

const Wrapper = () => {
  return (
    <>
      <Routes>
      <Route  element={<Layout/>}>
        <Route index path="/"  element={<Home/>}/>
      </Route>
      </Routes>
    </>
  );
};

export default Wrapper;
