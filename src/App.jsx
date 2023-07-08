import { useState } from "react";
import "./App.css";
import HomePage from "../src/pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { PATHS } from "./config";
import ContactPage from "./pages/Contact";
import PaymentPage from "./pages/Payment";
import ReturnsPage from "./pages/Returns";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutPage from "./pages/About";
import ShippingPage from "./pages/Shipping";
import DashboardPage from "./pages/Dashboard";
import ProductPage from "./pages/product/product";
import ProductDetail from "./pages/product/productDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={PATHS.PRODUCT} element={<ProductPage />} />
          <Route path={PATHS.PRODUCT_DETAIL} element={<ProductDetail />} />
          <Route path={PATHS.CONTACT} element={<ContactPage />} />
          <Route path={PATHS.ABOUT} element={<AboutPage />} />
          <Route path={PATHS.PRIVACYPOLICY} element={<PrivacyPolicy />} />
          <Route path={PATHS.RETURNS} element={<ReturnsPage />} />
          <Route path={PATHS.PAYMENT} element={<PaymentPage />} />
          {/* <Route path={PATHS.PROFILE.INDEX} element={<ProfileLayout />}>
            <Route index element={<MyInfo />} />
            <Route path={PATHS.PROFILE.COURSES} element={<MyCourses />} />
            <Route path={PATHS.PROFILE.PAYMENT} element={<MyPayment />} />
          </Route> */}
          <Route path={PATHS.SHIPPING} element={<ShippingPage />} />
          <Route path="modal" element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
