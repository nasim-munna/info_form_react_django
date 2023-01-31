import React from "react";
import FormExample from "./FormExample";
import Success from "./components/success";
import { HashRouter, Route, Routes } from "react-router-dom";

const App=()=>{

  return(
    <div>
      <HashRouter>
              <Routes>
              <Route path="/" element={<FormExample />} exact></Route>
              <Route path="/success" element={<Success />}></Route>
              </Routes>
      </HashRouter>
    </div>
  )
}

export default App;