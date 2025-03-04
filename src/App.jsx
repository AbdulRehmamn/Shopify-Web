import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Howitwork from "./Pages/Howitwork";
import Client from "./Pages/Clientreview";
import Ourwork from "./Pages/Ourwork";
import Ourpricing from "./Pages/Ourpricing";
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Howitwork />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Client />} />
          <Route path="/our-work" element={<Ourwork />} />
          <Route path="/pricing" element={<Ourpricing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
