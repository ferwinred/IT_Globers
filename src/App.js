import React from "react";
import { Route, Routes } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Home from "./components/Home";
import Form from "./components/Form";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavMenu />}>
          <Route path="/" element={<Home />} />
          <Route path="/formulario/:name" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
