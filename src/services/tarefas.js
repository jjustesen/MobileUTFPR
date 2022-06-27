import moment from "moment";
import firebase from "./firebaseConfig";

export const tarefasGet = ({ setValue, setLoading }) => {
  setLoading(true);
  return firebase
    .database()
    .ref("calendario")
    .on("value", (snapshot) => {
      let data = snapshot.val();
      setValue(data.filter((item) => item.type === "Tarefa"));
      setLoading(false);
      return snapshot.val();
    });
};

export const tarefasGetByIdUsuario = ({ setValue, setLoading, user }) => {
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
            item.type === "Tarefa"
        )
      );
      setLoading(false);
      return snapshot.val();
    });
};

export const tarefasGetTodayByIdUsuario = ({ setValue, setLoading, user }) => {
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
            item.type === "Tarefa"
        )
      );
      setLoading(false);
      return snapshot.val();
    });
};
export const tarefasGetWeekByIdUsuario = ({ setValue, setLoading, user }) => {
  setLoading(true);
  return firebase
    .database()
    .ref("calendario")
    .on("value", (snapshot) => {
      let data = Object.values(snapshot.val());
      setValue(
        data.filter((item) => {
          const dateFormated = moment(item.date, "DD-MM-YYYY")
            .subtract(1, "h")
            .format("YYYY-MM-DD");
          return (
            (item.idUsuario === user.id ||
              JSON.stringify(Object.values(user?.disciplinas || "")).includes(
                item.key
              )) &&
            moment(dateFormated).isAfter(
              moment().subtract(1, "d").startOf("week")
            ) &&
            moment(dateFormated).isSameOrBefore(
              moment().subtract(1, "d").endOf("week")
            ) &&
            item.type === "Tarefa"
          );
        })
      );
      setLoading(false);
      return snapshot.val();
    });
};
