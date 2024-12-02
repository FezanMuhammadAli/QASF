import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoutesConfig from "./RoutesConfig";

function App() {
  return (
    <Router>
      <Routes>
        {RoutesConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
