import moment from "moment";
import firebase from "./firebaseConfig";

export const aulasGetByIdUsuario = ({ setValue, setLoading, id }) => {
  setLoading(true);
  return firebase
    .database()
    .ref("aulas")
    .on("value", (snapshot) => {
      let data = snapshot.val();
      setValue(data.filter((item) => item.idUsuario === id));
      setLoading(false);
      return snapshot.val();
    });
};

export const aulasGetTodayByIdUsuario = ({ setValue, setLoading, id }) => {
  setLoading(true);
  return firebase
    .database()
    .ref("aulas")
    .on("value", (snapshot) => {
      let data = snapshot.val();
      console.log(moment().format("DD/MM/YYYY"));
      setValue(
        data.filter(
          (item) =>
            item.idUsuario === id &&
            moment().format("DD/MM/YYYY") === item.data &&
            item.type === "aula"
        )
      );
      setLoading(false);
      return snapshot.val();
    });
};

export const aulasPost = ({ payload }) => {
  firebase
    .database()
    .ref("usuarios")
    .child(payload?.uid)
    .set({
      ...payload,
    });
  setLoading(false);
};
