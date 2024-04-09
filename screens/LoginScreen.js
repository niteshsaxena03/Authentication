import { useState,useContext } from "react";
import { AuthContext } from "../store/auth-context";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/auth";
import { Alert } from "react-native";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authContext = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token=await login(email, password);
      authContext.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Login Failed",
        "Invalid ID or Password"
      );
      setIsAuthenticating(false);
    }
    
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
