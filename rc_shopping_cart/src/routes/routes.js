import UserHomePage from "../pages/user/UserHomePage";
import UserOrdersPage from "../pages/user/UserOrdersPage";
import AdminHomePage from "../pages/admin/AdminHomePage";
import AdminOrdersPage from "../pages/admin/AdminOrdersPage";
import AdminDiscountsPage from "../pages/admin/AdminDiscountsPage";
import ProductPage from "../pages/shared/ProductPage";
import UserCartPage from "../pages/user/UserCartPage";
import UserCheckoutPage from "../pages/user/UserCheckoutPage";
import OrderPage from "../pages/shared/OrderPage";

const sharedRoutes = [
  {
    path: "/products/:productId",
    component: ProductPage,
  },
  {
    path: "orders/:orderId",
    component: OrderPage,
  },
];

export const userRoutes = [
  ...sharedRoutes,
  {
    path: "/catalog",
    component: UserHomePage,
  },
  {
    path: "/orders",
    component: UserOrdersPage,
  },
  {
    path: "/cart",
    component: UserCartPage,
  },
  {
    path: "/checkout",
    component: UserCheckoutPage,
  },
];

export const adminRoutes = [
  ...sharedRoutes,
  {
    path: "/admin",
    component: AdminHomePage,
  },
  {
    path: "/admin/orders",
    component: AdminOrdersPage,
  },
  {
    path: "/admin/discounts",
    component: AdminDiscountsPage,
  },
];
