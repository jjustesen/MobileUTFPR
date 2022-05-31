import { createContext, useContext, useState } from "react";
import firebase from "../services/firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  const login = (user, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(user, password)
      .then(async (value) => {
        setIsLogged(true);
        console.log(value);
        await AsyncStorage.setItem("uid", value.user.uid);
        return;
      })
      .catch((error) => error);
  };

  const loggout = async () => {
    await firebase;
    setIsLogged(false);
  };

  const register = (user, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(user, password)
      .then((value) => {
        firebase.database().ref("usuarios").child(value.user.uid).set({
          email: user,
          password,
        });
        setIsLogged(true);
        console.log(value);
        return;
      })
      .catch((error) => console.error(error));
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        login,
        loggout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  const { isLogged, setIsLogged, login, loggout, register } = context;

  return { isLogged, setIsLogged, login, loggout, register };
};

export default AuthProvider;
