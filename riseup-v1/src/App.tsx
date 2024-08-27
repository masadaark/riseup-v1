import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/deposit-table" element={<div />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;