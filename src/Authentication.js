import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
import { ApiConstants, EnvConstants, PathConstants } from "./const";
import { useDispatch } from "react-redux";
import { authActions } from "./redux-store/store";
import { AppCommonLoading } from "./components/Common";

const Authentication = ({ roles = [] }) => {
  const dispatch = useDispatch();
  const accessToken = Cookies.get(ApiConstants.ACCESS_TOKEN);
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!accessToken) {
        setAuthorized(false);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:8080${ApiConstants.PROFILE}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const responseData = await response.json();

        if (response.status === ApiConstants.STT_OK) {
          const userInfo = responseData.data.data;
          dispatch(authActions.getUserProfileSuccess(userInfo));
          setAuthorized(roles.includes(userInfo.roleId));
        } else {
          setAuthorized(false);
        }
      } catch (error) {
        EnvConstants.IS_DEV && console.log(error);
        setAuthorized(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [accessToken, dispatch, roles]);

  if (loading) {
    return <AppCommonLoading />;
  }

  if (!accessToken || !authorized) {
    return <Navigate to={PathConstants.LOGIN} />;
  }

  return <Outlet />;
};

export default Authentication;
