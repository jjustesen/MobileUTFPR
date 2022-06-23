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

export const aulasGetByIdUsuario = ({ setValue, setLoading, id }) => {
  setLoading(true);
  return firebase
    .database()
    .ref("calendario")
    .on("value", (snapshot) => {
      let data = Object.values(snapshot.val());
      setValue(
        data.filter((item) => item.idUsuario === id && item.type === "Aula")
      );
      setLoading(false);
      return snapshot.val();
    });
};

export const aulasGetTodayByIdUsuario = ({ setValue, setLoading, id }) => {
  setLoading(true);
  return firebase
    .database()
    .ref("calendario")
    .on("value", (snapshot) => {
      let data = Object.values(snapshot.val());
      console.log(data, id, moment().format("DD/MM/YYYY"));
      setValue(
        data.filter(
          (item) =>
            item.idUsuario === id &&
            moment().format("DD/MM/YYYY") === item.date &&
            item.type === "Aula"
        )
      );
      setLoading(false);
      return snapshot.val();
    });
};
