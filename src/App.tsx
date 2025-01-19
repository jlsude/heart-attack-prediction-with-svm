import { BrowserRouter, Routes, Route } from "react-router";
import Landing from "./routes/Landing";
import Prediction from "./routes/Prediction";
import Information from "./routes/Information";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : undefined}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="information" element={<Information />} />
          <Route path="prediction" element={<Prediction />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
