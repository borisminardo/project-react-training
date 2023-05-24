import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./pages/landing/Landing";
import UINavbar from "./components/atoms/navbar/UINavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingStepForm from "./pages/landing/LandingStepForm";
import Homepage from "./pages/landing/Homepage";
import LandingTable from "./pages/landing/LandingTable";

//pages

function App() {
  return (
    <Router>
      <UINavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="form" element={<Landing />} />
        <Route path="step-form" element={<LandingStepForm />} />
        <Route path="tabella" element={<LandingTable />} />
      </Routes>
    </Router>
  );
}

export default App;
