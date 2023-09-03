import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import UploadPage from "./pages/UploadPage";
import "./App.scss";
import "./components/Global.scss";

function App() {
  return (
    <section className="Application">
      <Header />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/UploadPage"} element={<UploadPage />} />
        <Route path={"/:videoId"} element={<Home />} />
      </Routes>
    </section>
  );
}

export default App;
