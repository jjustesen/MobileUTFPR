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

export const tarefasGetByIdUsuario = ({ setValue, setLoading, id }) => {
  setLoading(true);
  return firebase
    .database()
    .ref("calendario")
    .on("value", (snapshot) => {
      let data = Object.values(snapshot.val());
      setValue(
        data.filter((item) => item.idUsuario === id && item.type === "Tarefa")
      );
      setLoading(false);
      return snapshot.val();
    });
};

export const tarefasGetTodayByIdUsuario = ({ setValue, setLoading, id }) => {
  setLoading(true);
  return firebase
    .database()
    .ref("calendario")
    .on("value", (snapshot) => {
      let data = Object.values(snapshot.val());
      setValue(
        data.filter(
          (item) =>
            item.idUsuario === id &&
            moment().format("DD/MM/YYYY") === item.date &&
            item.type === "Tarefa"
        )
      );
      setLoading(false);
      return snapshot.val();
    });
};
export const tarefasGetWeekByIdUsuario = ({ setValue, setLoading, id }) => {
  setLoading(true);
  return firebase
    .database()
    .ref("calendario")
    .on("value", (snapshot) => {
      let data = Object.values(snapshot.val());
      setValue(
        data.filter((item) => {
          const dateFormated = moment(item.date, "DD-MM-YYYY").format(
            "YYYY-MM-DD"
          );
          return (
            item.idUsuario === id &&
            moment(dateFormated).isSameOrAfter(moment().startOf("week")) &&
            moment(dateFormated).isSameOrBefore(moment().endOf("week")) &&
            item.type === "Tarefa"
          );
        })
      );
      setLoading(false);
      return snapshot.val();
    });
};
