import Buy from "./pages/Buy";
import Buyfollowers from "./pages/Buyfollowers";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Forgot from "./pages/Forgot";
import Change from "./pages/Change";
import Profile from "./pages/Profile";
import Myorders from "./pages/Myorders";
import Orderdetails from "./pages/Orderdetails";
import Buyfollowers2 from "./pages/Buyfollowers2";
import AuthRouteGuard from "./components/ProtectedRoutes/AuthRouteGuard";
import Error from "./pages/Error";
import Success from "./pages/Success";
import ChangeProfilePassword from "./pages/ChangeProfilePassword";
import Test from "./pages/Test";
import Condition from "./pages/Condition";
import Policies from "./pages/Policies";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/buy"
          element={
            <AuthRouteGuard>
              <Buy />
            </AuthRouteGuard>
          }
        />
        <Route path="/Buyfollowers" element={<Buyfollowers />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/signup"
          element={
            <>
              <Signup />
            </>
          }
        />
        <Route
          path="/forgot"
          element={
            <>
              <Forgot />
            </>
          }
        />
        <Route path="/changepassword/:activation_token" element={<Change />} />
        <Route path="/changepasswordprofile" element={<ChangeProfilePassword />} />

        <Route
          path="/profile"
          element={
            <AuthRouteGuard>
              <Profile />
            </AuthRouteGuard>
          }
        />
        <Route
          path="/myorder"
          element={
            <AuthRouteGuard>
              <Myorders />
            </AuthRouteGuard>
          }
        />
        <Route
          path="/orderdetails/:id"
          element={
            <AuthRouteGuard>
              <Orderdetails />
            </AuthRouteGuard>
          }
        />
        <Route path="/Buyfollowers2" element={<Buyfollowers2 />} />
        <Route path="/conditions" element={<Condition />} />

        <Route path="/policies" element={<Policies />} />


        <Route path="/error" element={<Error/>} />
        <Route path="/test" element={<Test/>} />


        <Route path="/success" element={<Success />} />

      </Routes>
    </div>
  );
}
