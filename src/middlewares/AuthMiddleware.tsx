import { Navigate, Outlet, useOutletContext } from "react-router-dom"

const AuthMiddleware = () => {
  const { isLogin } = useOutletContext<{ isLogin: boolean }>()
  
  return <>
    {isLogin ? <Outlet /> : <Navigate to="/login"/>}
  </>
}

export default AuthMiddleware