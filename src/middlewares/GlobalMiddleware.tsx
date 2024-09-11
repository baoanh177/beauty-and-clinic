import { AppDispatch } from "@/services/store";
import { setProfile } from "@/services/store/auth/auth.slice";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

const fetchProfile = async () => {
  const accessJSON = localStorage.getItem("accessToken")
  if(!accessJSON) {
    return
  }
  const access = JSON.parse(accessJSON)
  const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/profile`, {
    headers: {
      Authorization: `Bearer ${access}`
    }
  });

  return await response.json()
};

const GlobalMiddleware = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { data, isError, isLoading } = useQuery("profile", fetchProfile);

  if(isLoading) return <>Loading...</>
  if(data) dispatch(setProfile(data.data))
  return (
    <>
      <Outlet context={{ isLogin: !isError && data?.status === 200 }}/>
    </>
  );
};

export default GlobalMiddleware;
