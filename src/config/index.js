const PRODUCT_PATH = "/product";
const PROFILE_PATH = "/profile";

export const PATHS = {
  HOME: "/",
  PRODUCT: PRODUCT_PATH,
  PRODUCT_DETAIL: PRODUCT_PATH + "/:slug",
  PROFILE: {
    INDEX: PROFILE_PATH,
    COURSES: PROFILE_PATH + "/my-courses",
    PAYMENT: PROFILE_PATH + "/my-payment",
  },
  BLOG: "/blog",
  CONTACT: "/contact",
  ABOUT: "/about",
  PRIVACYPOLICY: "/PrivacyPolicy",
  RETURNS: "/returns",
  PAYMENT: "/payment",
  CART: "/cart",
  DASHBOARD: "/dashboard",
  FAQ: "/faq",
  SHIPPING: "/shipping",
};
