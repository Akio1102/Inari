import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./Context/AuthContext";
import { CategoryProvider } from "./Context/CategorysContext";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import CategoryFormPage from "./Pages/CategoryFormPage";
import CategorysPage from "./Pages/CategorysPages";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./Components/NavBar";

function App() {
  return (
    <AuthProvider>
      <CategoryProvider>
        <BrowserRouter>
          <main className="container mx-auto px-10">
            <Navbar />
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/profile" element={<h1>Profile Page</h1>} />
                <Route path="/categorys" element={<CategorysPage />} />
                <Route path="/add-category" element={<CategoryFormPage />} />
                <Route path="/category/:id" element={<CategoryFormPage />} />
                <Route
                  path="/transactions"
                  element={<h1>Transactions Page</h1>}
                />
                <Route
                  path="/add-transaction"
                  element={<h1>Add Transaction Page</h1>}
                />
                <Route
                  path="/transaction/:id"
                  element={<h1>transaction Page</h1>}
                />
                <Route path="/budgets" element={<h1>Budgets Page</h1>} />
                <Route path="/add-budget" element={<h1>Add Budget Page</h1>} />
                <Route path="/budget/:id" element={<h1>Budget Page</h1>} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </CategoryProvider>
    </AuthProvider>
  );
}

export default App;
