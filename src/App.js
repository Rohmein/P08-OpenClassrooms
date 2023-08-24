import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logements from "../src/database/logements.json";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Slideshow from "./pages/Slideshow";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home Logements={Logements} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/slideshow/:id"
          element={<Slideshow Logements={Logements} />}
        />
        <Route path="/not-found" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
