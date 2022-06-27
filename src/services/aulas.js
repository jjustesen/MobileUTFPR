import moment from "moment";
import firebase from "./firebaseConfig";

export const aulasGet = ({ setValue, setLoading }) => {
  setLoading(true);
  return firebase
    .database()
    .ref("calendario")
    .on("value", (snapshot) => {
      let data = snapshot.val();
      setValue(data.filter((item) => item.type === "Aula"));
      setLoading(false);
      return snapshot.val();
    });
};

export const aulasGetByIdUsuario = ({ setValue, setLoading, user }) => {
  setLoading(true);
  return firebase
    .database()
    .ref("calendario")
    .on("value", (snapshot) => {
      let data = Object.values(snapshot.val());
      setValue(
        data.filter(
          (item) =>
            (item.idUsuario === user.id ||
              JSON.stringify(Object.values(user?.disciplinas || "")).includes(
                item.key
              )) &&
            item.type === "Aula"
        )
      );
      setLoading(false);
      return snapshot.val();
    });
};

export const aulasGetTodayByIdUsuario = ({ setValue, setLoading, user }) => {
  setLoading(true);
  return firebase
    .database()
    .ref("calendario")
    .on("value", (snapshot) => {
      let data = Object.values(snapshot.val());
      setValue(
        data.filter(
          (item) =>
            (item.idUsuario === user.id ||
              JSON.stringify(Object.values(user?.disciplinas || "")).includes(
                item.key
              )) &&
            moment().format("DD/MM/YYYY") === item.date &&
            item.type === "Aula"
        )
      );
      setLoading(false);
      return snapshot.val();
    });
};
