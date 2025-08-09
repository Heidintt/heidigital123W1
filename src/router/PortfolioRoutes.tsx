
import { Routes, Route } from "react-router-dom";
import FMCGDAOStrategy from "@/pages/portfolio/FMCGDAOStrategy";
import MicrolinoStrategy from "@/pages/portfolio/MicrolinoStrategy";
import IChooseTheSun from "@/pages/portfolio/IChooseTheSun";
import NhaCaCafe from "@/pages/portfolio/NhaCaCafe";
import KotoClub from "@/pages/portfolio/KotoClub";
import LuaHongBuffet from "@/pages/portfolio/LuaHongBuffet";
import WanderlustTravel from "@/pages/portfolio/WanderlustTravel";
import IRISHealthcare from "@/pages/portfolio/IRISHealthcare";

export const PortfolioRoutes = () => {
  return (
    <Routes>
      <Route path="fmcg-dao-strategy" element={<FMCGDAOStrategy />} />
      <Route path="microlino-strategy" element={<MicrolinoStrategy />} />
      <Route path="i-choose-the-sun" element={<IChooseTheSun />} />
      <Route path="nha-ca-cafe" element={<NhaCaCafe />} />
      <Route path="koto-club" element={<KotoClub />} />
      <Route path="lua-hong-buffet" element={<LuaHongBuffet />} />
      <Route path="wanderlust-travel" element={<WanderlustTravel />} />
      <Route path="iris-healthcare" element={<IRISHealthcare />} />
    </Routes>
  );
};
