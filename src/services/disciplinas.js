import firebase from "./firebaseConfig";

export const disciplinasGet = ({ setValue }) => {
  return firebase
    .database()
    .ref("disciplinas")
    .on("value", (snapshot) => {
      let data = Object.values(snapshot.val());
      setValue(data);
      return snapshot.val();
    });
};

export const disciplinasGetByIdUsuario = ({ setValue, id }) => {
  return firebase
    .database()
    .ref("disciplinas")
    .on("value", (snapshot) => {
      let data = Object.values(snapshot.val());
      setValue(data.filter((item) => item.idUsuario === id));
      return snapshot.val();
    });
};

export const disciplinasPost = ({ payload }) => {
  firebase
    .database()
    .ref("disciplinas")
    .push({ ...payload });
};
