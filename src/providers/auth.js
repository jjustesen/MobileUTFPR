import { createContext, useContext, useState } from "react";
import firebase from "../services/firebaseConfig";
import { Alert } from "react-native";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [userInfos, setUserInfos] = useState();

  const login = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (values) => {
        setIsLogged(true);
        setUserInfos({ id: values.user.uid });
        return;
      })
      .catch((error) => {
        Alert.alert("Falha no login", "Verifique seus dados", [
          { text: "OK", onPress: () => console.error(error) },
        ]);
      });
  };

  const loggout = async () => {
    await firebase.auth().signOut();
    setIsLogged(false);
  };

  const register = (payload) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then((value) => {
        firebase
          .database()
          .ref("usuarios")
          .child(value.user.uid)
          .set({
            ...payload,
            id: value.user.id,
          });
        setIsLogged(true);
        Alert.alert(
          "Usuario cadastrado",
          "Usuaria cadastrado com sucsso, seja bem vindo!",
          [{ text: "OK", onPress: () => console.error("") }]
        );
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
        userInfos,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  const { isLogged, setIsLogged, login, loggout, userInfos, register } =
    context;

  return { isLogged, setIsLogged, login, loggout, userInfos, register };
};

export default AuthProvider;
