import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";
import ProtectorLayout from "./layouts/ProtectorLayout";

// pages
import HomePage from "./pages/HomePage";
import Signin from "./layouts/AuthLayout/Signin";
import Register from "./layouts/AuthLayout/Register";
import ErrorPage from "./pages/ErrorPage";
import { getUserPreference } from "./formActions";

// dynamically loaded pages
const CreatePlanPage = lazy(() => import("./pages/CreatePlanPage"));
const PlanDetailsPage = lazy(() => import("./pages/PlanDetailsPage"));
const MyPlansPage = lazy(() => import("./pages/MyPlansPage"));

function App() {
  const tripPlannerRoutes = createRoutesFromElements(
    <>
      <Route path="/" element={<AppLayout />} errorElement={<ErrorPage />}>
        {/* public route */}
        <Route index element={<HomePage />} />

        {/* protected route */}
        <Route
          path="my-plans"
          element={
            <ProtectorLayout>
              <Suspense>
                <MyPlansPage />
              </Suspense>
            </ProtectorLayout>
          }
        />
        <Route
          path="create-plan"
          action={getUserPreference}
          element={
            <ProtectorLayout>
              <Suspense>
                <CreatePlanPage />
              </Suspense>
            </ProtectorLayout>
          }
        />
        <Route
          path="create-plan/:planid"
          element={
            <ProtectorLayout>
              <Suspense>
                <PlanDetailsPage />
              </Suspense>
            </ProtectorLayout>
          }
        />
      </Route>

      {/* auth routes */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Signin />} />
        <Route path="register" element={<Register />} />
      </Route>
    </>
  );
  return (
    <>
      <RouterProvider router={createBrowserRouter(tripPlannerRoutes)} />
    </>
  );
}

export default App;
