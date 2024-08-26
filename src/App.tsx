import { Routes } from "react-router-dom";
import { renderRoutes } from "./routes/renderRoutes";
import { routes } from "./routes/routes";

const App = () => {
  return (
    <div className="wrapper">
      <Routes>{renderRoutes(routes)}</Routes>
    </div>
  );
};
export default App;
