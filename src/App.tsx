import { Routes } from "react-router-dom";
import { renderRoutes } from "./routes/renderRoutes";
import { routes } from "./routes/routes";
import AOS from "aos"
import 'aos/dist/aos.css'; 

const App = () => {
  AOS.init()
  return <Routes>{renderRoutes(routes)}</Routes>;
};
export default App;
