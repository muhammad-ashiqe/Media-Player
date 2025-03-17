import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import WatchHistory from "./pages/WatchHistory";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Header />
      <ToastContainer position="top-center" reverseOrder={false} draggable autoClose={1000}/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/history" element={<WatchHistory />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
