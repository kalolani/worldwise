import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Price from "./pages/Price";
import PageNotFound from "./pages/PageNotFound";
import Homepage from "./pages/Homepage";
import AppLayout from "./pages/Applayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="price" element={<Price />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
