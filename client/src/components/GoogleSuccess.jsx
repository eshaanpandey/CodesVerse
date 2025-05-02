import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { SIGN_IN } from "../redux/reducers/auth/authTypes";
import { getLoggedInUser } from "../redux/reducers/user/userActions";

export default function GoogleSuccess() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = new URLSearchParams(useLocation().search);
  const token = params.get("token");

  useEffect(() => {
    if (token) {
      // store & set header
      localStorage.setItem("judgeUser", JSON.stringify({ token }));
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      // set auth state
      dispatch({ type: SIGN_IN, payload: { data: { token } } });

      // fetch the full profile into userReducer and go to profile
      dispatch(getLoggedInUser()).then(() => navigate("/profile"));
    }
  }, [dispatch, token, navigate]);

  return <p>Signing you in…</p>;
}
