import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<h1>Login Page</h1>} />
        <Route path="/register" element={<h1>Register Page</h1>} />
        <Route path="/profile" element={<h1>Profile Page</h1>} />
        <Route path="/categorys" element={<h1>Categorys Page</h1>} />
        <Route path="/add-category" element={<h1>Add Category Page</h1>} />
        <Route path="/category/:id" element={<h1>category Page</h1>} />
        <Route path="/transactions" element={<h1>Transactions Page</h1>} />
        <Route
          path="/add-transaction"
          element={<h1>Add Transaction Page</h1>}
        />
        <Route path="/transaction/:id" element={<h1>transaction Page</h1>} />
        <Route path="/budgets" element={<h1>Budgets Page</h1>} />
        <Route path="/add-budget" element={<h1>Add Budget Page</h1>} />
        <Route path="/budget/:id" element={<h1>Budget Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
