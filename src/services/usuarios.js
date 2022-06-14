import firebase from "./firebaseConfig";

export const usuariosGetById = (setValue, id) => {
  console.log(id);
  return firebase
    .database()
    .ref("usuarios")
    .child(id)
    .on("value", (snapshot) => {
      setValue(snapshot.val());
      return snapshot.val();
    });
};
