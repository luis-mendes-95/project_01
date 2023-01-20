import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PeoplePage from "./pages/PeoplePage";
import { PeopleProvider } from "./contexts/people";

const AppRoutes = () => {
  return (
    <Router>
      <PeopleProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/peoplepage" element={<PeoplePage />} />
        </Routes>
      </PeopleProvider>
    </Router>
  );
};

export default AppRoutes;
