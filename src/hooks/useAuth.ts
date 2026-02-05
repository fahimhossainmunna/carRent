import { useAppSelector } from "@/redux/hooks";

export const useAuth = () => {
  const { user, token } = useAppSelector((state) => state.auth);
  
  return {
    isLoggedIn: !!token,
    user,
    role: user?.role,
  };
};