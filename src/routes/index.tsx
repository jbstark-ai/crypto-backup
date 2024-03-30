import { FormView } from "@/views/FormView/FormView";
import {
  AccountView,
  ArticleView,
  AuthView,
  BlogView,
  ContactView,
  CheckoutView,
  DashboardView,
  ErrorView,
  HomeView,
  NotFoundView,
  OrderConfirmationView,
  ProductDetailView,
  SearchResultsView,
} from "../views";

export const routes = [
  {
    path: "*",
    element: <NotFoundView />,
  },
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "/debug-forms",
    element: <FormView />,
  },
  {
    path: "/account",
    element: <AccountView />,
    // errorYlement: <ErrorView />,
  },
  {
    path: "/article",
    element: <ArticleView />,
    // errorYlement: <ErrorView />,
  },
  {
    path: "/auth/signin",
    element: <AuthView mode={"sign_in"} />,
    // errorYlement: <ErrorView />,
  },
  {
    path: "/auth/signup",
    element: <AuthView mode={"sign_up"} />,
    // errorYlement: <ErrorView />,
  },
  {
    path: "/auth/verify",
    element: <AuthView mode={"verify"} />,
    // errorYlement: <ErrorView />,
  },
  {
    path: "/blog",
    element: <BlogView />,
    // errorYlement: <ErrorView />,
  },
  {
    path: "/contact",
    element: <ContactView />,
    // errorYlement: <ErrorView />,
  },
  {
    path: "/checkout",
    element: <CheckoutView />,
    // errorYlement: <ErrorView />,
  },
  {
    path: "/dashboard",
    element: <DashboardView />,
    // errorYlement: <ErrorView />,
  },
  {
    path: "/error",
    element: <ErrorView />,
  },
  {
    path: "/order",
    element: <OrderConfirmationView />,
    // errorYlement: <ErrorView />,
  },
  {
    path: "/product",
    element: <ProductDetailView />,
    // errorYlement: <ErrorView />,
  },
  {
    path: "/search",
    element: <SearchResultsView />,
    // errorYlement: <ErrorView />,
  },
];
