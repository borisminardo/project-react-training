import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./pages/landing/Landing";
import UINavbar from "./components/atoms/navbar/UINavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingStepForm from "./pages/landing/LandingStepForm";
import Homepage from "./pages/landing/Homepage";
import LandingTable from "./pages/landing/LandingTable";
import LandingTableRxjs from "./pages/landing/LandingTableRxjs";
import ReactQuery from "./pages/landing/ReactQuery";

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
        <Route path="rxjs" element={<LandingTableRxjs />} />
        <Route path="react-query" element={<ReactQuery />} />
      </Routes>
    </Router>
  );
}

export default App;
