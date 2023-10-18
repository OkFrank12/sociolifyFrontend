import { Outlet } from "react-router-dom";
import Header from "../statics/Header";

const LayOut = () => {
  return (
    <div className="">
      <Header />
      <br />
      <br />
      <br />
      <Outlet />
    </div>
  );
};

export default LayOut;
