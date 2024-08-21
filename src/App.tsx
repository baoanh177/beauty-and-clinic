import { Routes } from "react-router-dom";
import { renderRoutes } from "./routes/renderRoutes";
import { routes } from "./routes/routes";

const App = () => {
  return <Routes>{renderRoutes(routes)}</Routes>;
};
export default App;
