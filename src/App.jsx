import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/product";
import Price from "./pages/price";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
<<<<<<< HEAD
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Price />} />
=======
          <Route path="products" element={<Product />} />
          <Route path="price" element={<Price />} />
>>>>>>> 9f06dd664ecf98f331bd204d012cdd546981e11e
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
