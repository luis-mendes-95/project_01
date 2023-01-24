import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PeoplePage from "./pages/PeoplePage";
import { PeopleProvider } from "./contexts/people";
import { ModalProvider } from "./contexts/modal";

const AppRoutes = () => {
  return (
    <Router>
      <PeopleProvider>
        <ModalProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/peoplepage" element={<PeoplePage />} />
          </Routes>
        </ModalProvider>
      </PeopleProvider>
    </Router>
  );
};

export default AppRoutes;
