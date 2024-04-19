import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ReviewDetails from "./pages/ReviewDetails.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/review/:id" element={<ReviewDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
