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
import { ProductsProvider } from "./contexts/products";
import ProductsPage from "./pages/ProductPage";
import { SalesProvider } from "./contexts/sales";
import SalesPage from "./pages/SalesPage";

const AppRoutes = () => {
  return (
    <Router>
      <SalesProvider>
        <PeopleProvider>
          <ProductsProvider>
            <ModalProvider>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/peoplepage" element={<PeoplePage />} />
                <Route path="/productspage" element={<ProductsPage />} />
                <Route path="/salespage" element={<SalesPage />} />
              </Routes>
            </ModalProvider>
          </ProductsProvider>
        </PeopleProvider>
      </SalesProvider>
    </Router>
  );
};

export default AppRoutes;
