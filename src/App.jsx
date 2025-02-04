import "./styles/App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import SelectAge from "./pages/SelectAge/SelectAge";
import ParentOrChild from "./pages/ParentOrChild/ParentOrChild";
import routes from "./utils/routes";
import SelectTheme from "./pages/SelectTheme/SelectTheme";
import SelectTheme2 from "./pages/SelectTheme2/SelectTheme2";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import Model from "./pages/Model/Model";
import FormComplete from "./pages/FormComplete/FormComplete";
import Recommendations from "./pages/Recommendations/Recommendations";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path="/" element={<Navigate to={routes.home} replace />} />
        <Route path={routes.selectAge} element={<SelectAge />} />
        <Route path={routes.parentOrChild} element={<ParentOrChild />} />
        <Route path={routes.theme} element={<SelectTheme />} />
        <Route path={routes.theme2} element={<SelectTheme2 />} />
        <Route path={routes.comingSoon} element={<ComingSoon />} />
        <Route path={routes.model} element={<Model />} />
        <Route path={routes.complete} element={<FormComplete />} />
        <Route path={routes.recommendations} element={<Recommendations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
