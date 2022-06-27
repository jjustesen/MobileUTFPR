import moment from "moment";
import firebase from "./firebaseConfig";

export const calendarioGet = ({ setValue, setLoading }) => {
  setLoading(true);
  return firebase
    .database()
    .ref("calendario")
    .on("value", (snapshot) => {
      let data = snapshot.val();
      setValue(data);
      setLoading(false);
      return snapshot.val();
    });
};

export const calendarioGetByIdUsuario = ({ setValue, setLoading, user }) => {
  setLoading(true);
  return firebase
    .database()
    .ref("calendario")
    .on("value", (snapshot) => {
      let data = Object.values(snapshot.val());
      setValue(
        data.filter(
          (item) =>
            item.idUsuario === user.id ||
            JSON.stringify(Object.values(user?.disciplinas || "")).includes(
              item.key
            )
        )
      );
      setLoading(false);
      return snapshot.val();
    });
};

export const calendarioGetTodayByIdUsuario = ({ setValue, setLoading, id }) => {
  setLoading(true);
  return firebase
    .database()
    .ref("calendario")
    .on("value", (snapshot) => {
      let data = Object.values(snapshot.val());
      setValue(
        data.filter(
          (item) =>
            item.idUsuario === id && moment().format("DD/MM/YYYY") === item.date
        )
      );
      setLoading(false);
      return snapshot.val();
    });
};
export const calendarioGetWeekByIdUsuario = ({
  setValue,
  setLoading,
  user,
  date,
}) => {
  setLoading(true);
  return firebase
    .database()
    .ref("calendario")
    .on("value", (snapshot) => {
      let data = Object.values(snapshot.val());
      console.log(date.subtract(1, "days"));
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
            moment(dateFormated).isAfter(moment(date).startOf("week")) &&
            moment(dateFormated).isSameOrBefore(moment(date).endOf("week"))
          );
        })
      );
      setLoading(false);
      return snapshot.val();
    });
};

export const calendarioPost = ({ payload }) => {
  firebase
    .database()
    .ref("calendario")
    .push({
      color: payload.type === "Aula" ? "blue" : "red",
      title: payload?.key,
      ...payload,
    });
};
