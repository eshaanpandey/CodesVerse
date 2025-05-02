import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginScreen from "./screens/LoginScreen.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";
import HomeLayout from "./layouts/HomeLayout.jsx";
import SubmitProblemScreen from "./screens/SubmitProblemsScreen.jsx";
import GoogleSuccess from "./components/GoogleSuccess.jsx";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLoggedInUser } from "./redux/reducers/user/userActions.js";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLoggedInUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signup" element={<LoginScreen />} />
      <Route path="/google-success" element={<GoogleSuccess />} />
      {
        <Route
          path="/:type"
          element={
            <HomeLayout>
              <HomeScreen />
            </HomeLayout>
          }
        />
      }
      <Route path="/problems/:_id" element={<SubmitProblemScreen />} />
    </Routes>
  );
}

export default App;
