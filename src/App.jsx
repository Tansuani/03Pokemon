import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";

import Favorites from "./views/Favorites";
import Home from "./views/Home";

const App = () => {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/favoritos"
          element={<Favorites />}
        />
      </Routes>
    </div>
  );
};
export default App;
