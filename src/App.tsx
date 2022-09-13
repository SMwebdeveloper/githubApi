import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import FeaturesPage from "./pages/FeaturesPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FeaturesPage />} />
      </Routes>
    </div>
  );
}

export default App;
