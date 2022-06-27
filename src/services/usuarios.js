import firebase from "./firebaseConfig";

export const usuariosGetById = (setValue, id) => {
  return firebase
    .database()
    .ref("usuarios")
    .child(id)
    .on("value", (snapshot) => {
      setValue(snapshot.val());
      return snapshot.val();
    });
};

export const usuariosPostDisciplinaById = ({ payload, id }) => {
  return firebase
    .database()
    .ref("usuarios")
    .child(id)
    .child("disciplinas")
    .push({ ...payload });
};
