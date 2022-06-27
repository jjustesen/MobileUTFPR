import React, { useEffect, useMemo, useState } from "react";
import MobFlex from "../../components/elements/Flex";
import MobText from "../../components/elements/Text";
import { MobTaskDisplay } from "../../components/TaskDisplay/TaskDisplay";
import { Button, ScrollView, StyleSheet } from "react-native";
import { MobClassDisplay } from "../../components/ClassDisplay/ClassDisplay";
import { useAula } from "../../providers/aula";
import { useAuth } from "../../providers/auth";
import { calendarioGetWeekByIdUsuario } from "../../services/calendario";
import { FAB, Portal, Provider } from "react-native-paper";
import moment from "moment";
export function Diario({ navigation }) {
  const [calendario, setCalendario] = useState();
  const [loadingCalendario, setLoadingCalendario] = useState(true);
  const [date, setDate] = useState(moment());
  const [state, setState] = React.useState({ open: false });

  const { setSelectedAula } = useAula();
  const { userInfos, isTeacher } = useAuth();

  const onStateChange = ({ open }) => setState({ open });

  console.log(date);

  const { open } = state;

  useEffect(() => {
    if (userInfos) {
      calendarioGetWeekByIdUsuario({
        setValue: setCalendario,
        setLoading: setLoadingCalendario,
        date: date,
        user: userInfos,
      });
    }
  }, [userInfos, date]);

  const handleNavigate = (item) => {
    navigation.navigate("Aula");
    setSelectedAula(item);
  };

  const actions = useMemo(() => {
    if (isTeacher) {
      return [
        {
          icon: "book-plus",
          label: "Incluir Diario na Disciplina",
          onPress: () => navigation.navigate("Incluir diario na disciplina"),
        },
        {
          icon: "school-outline",
          label: "Cadastrar Disciplinas",
          onPress: () => navigation.navigate("Cadastrar Disciplina"),
        },
      ];
    } else {
      return [
        {
          icon: "book-plus",
          label: "Adicionar Diario",
          onPress: () => navigation.navigate("Cadastrar Diario"),
        },
        {
          icon: "book-plus-multiple",
          label: "Incluir Disciplina",
          onPress: () => navigation.navigate("Incluir Disciplina"),
        },
      ];
    }
  }, [isTeacher]);

  return (
    <Provider>
      <MobFlex p={3} pb={100} mt={4} minHeight="100%">
        <MobFlex flexDirection="row" justifyContent="space-between" pb={2}>
          <Button
            title="<"
            styles={styles.button}
            onPress={() => setDate(moment(date).subtract(7, "d"))}
          />
          <MobText fontSize={4} fontWeight="bold">
            {date.startOf("W").format("DD/MM")}
            {" até "}
            {date.endOf("W").format("DD/MM")}
          </MobText>
          <Button
            title=">"
            styles={styles.button}
            onPress={() => setDate(moment(date).add(7, "d"))}
          />
        </MobFlex>

        <ScrollView>
          {!loadingCalendario &&
            calendario?.map((tarefa, index) => (
              <>
                {tarefa.type === "Tarefa" && (
                  <MobTaskDisplay
                    onPress={() => handleNavigate(tarefa)}
                    key={index}
                    title={tarefa.title}
                    description={tarefa.description}
                    icon={tarefa.icon}
                    background={tarefa.color}
                  />
                )}
                {tarefa.type === "Aula" && (
                  <MobClassDisplay
                    onPress={() => handleNavigate(tarefa)}
                    key={index}
                    title={tarefa.title}
                    description={tarefa.description}
                    tags={tarefa.tags || []}
                    background={tarefa.color}
                    icon={tarefa.icon}
                    {...tarefa}
                    fullWidth
                  />
                )}
              </>
            ))}
        </ScrollView>
        <Portal>
          <FAB.Group
            open={open}
            icon={open ? "calendar-today" : "plus"}
            variant="secondary"
            actions={actions}
            onStateChange={onStateChange}
            fabStyle={styles.fab}
          />
        </Portal>
      </MobFlex>
    </Provider>
  );
}

const styles = StyleSheet.create({
  fab: {
    marginBottom: 32,
  },
  button: {
    borderRadius: 16,
    backgroundColor: "#fff",
    color: "black",
  },
});
