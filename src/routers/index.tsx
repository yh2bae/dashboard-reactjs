import Home from "@/pages/home";
import { Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Home />} />
    </Routes>
  );
};

export default Routers;
