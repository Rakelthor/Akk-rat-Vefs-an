import { createBrowserRouter } from "react-router";
import App from "./App";
import TestTracking from "./components/TestTracking";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/test-tracking",
    Component: TestTracking,
  },
]);
