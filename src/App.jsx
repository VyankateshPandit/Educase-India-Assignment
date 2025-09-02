import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import AccountPage from "./pages/AccountPage";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signInPage" element={<SignInPage />} />
        <Route path="/signUpPage" element={<SignUpPage />} />
        <Route path="/accountPage" element={<AccountPage />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
