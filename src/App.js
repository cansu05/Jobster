import { BrowserRouter, Route, Routes } from "react-router";
import { Dashboard, Error, Landing, Register } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
