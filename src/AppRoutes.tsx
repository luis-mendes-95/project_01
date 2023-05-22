import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PeoplePage from "./pages/PeoplePage";
import { PeopleProvider } from "./contexts/people";
import { AccountProvider } from "./contexts/accounts";
import { ModalProvider } from "./contexts/modal";
import { ProductsProvider } from "./contexts/products";
import ProductsPage from "./pages/ProductPage";
import { SalesProvider } from "./contexts/sales";
import SalesPage from "./pages/SalesPage";
import { RegConfigProvider } from "./contexts/regConfig";
import ServiceOrderPage from "./pages/ServiceOrdersPage";
import { ServiceOrderProvider } from "./contexts/serviceOrders";
import LoginPage from "./pages/LoginPage";
import ReceivablesPage from "./pages/ReceivablePage";
import { ReceivablesProvider } from "./contexts/receivables";

const AppRoutes = () => {
  return (
    <Router>
      <AccountProvider>
        <RegConfigProvider>
          <ServiceOrderProvider>
            <SalesProvider>
              <PeopleProvider>
                <ProductsProvider>
                  <ReceivablesProvider>
                    <ModalProvider>
                      <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/peoplepage" element={<PeoplePage />} />
                        <Route
                          path="/productspage"
                          element={<ProductsPage />}
                        />
                        <Route path="/salespage" element={<SalesPage />} />
                        <Route
                          path="/receivables"
                          element={<ReceivablesPage />}
                        />
                        <Route
                          path="/serviceorderspage"
                          element={<ServiceOrderPage />}
                        />
                        <Route path="/login" element={<LoginPage />} />
                      </Routes>
                    </ModalProvider>
                  </ReceivablesProvider>
                </ProductsProvider>
              </PeopleProvider>
            </SalesProvider>
          </ServiceOrderProvider>
        </RegConfigProvider>
      </AccountProvider>
    </Router>
  );
};

export default AppRoutes;
