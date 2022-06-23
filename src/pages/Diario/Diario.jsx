import React, { useEffect, useState } from "react";
import MobFlex from "../../components/elements/Flex";
import MobText from "../../components/elements/Text";
import { MobTaskDisplay } from "../../components/TaskDisplay/TaskDisplay";
import { ScrollView } from "react-native";
import { MobClassDisplay } from "../../components/ClassDisplay/ClassDisplay";
import MobFloatButton from "../../components/FloatButton";
import { useAula } from "../../providers/aula";
import { useAuth } from "../../providers/auth";
import { calendarioGetWeekByIdUsuario } from "../../services/calendario";

export function Diario({ navigation }) {
  const [calendario, setCalendario] = useState();
  const [loadingCalendario, setLoadingCalendario] = useState(true);

  const { setSelectedAula } = useAula();
  const { userInfos } = useAuth();

  useEffect(() => {
    if (userInfos) {
      calendarioGetWeekByIdUsuario({
        setValue: setCalendario,
        setLoading: setLoadingCalendario,
        id: userInfos?.id,
      });
    }
  }, [userInfos]);

  const handleNavigate = (item) => {
    navigation.navigate("Aula");
    setSelectedAula(item);
  };

  return (
    <MobFlex p={3} pb={50} mt={4}>
      <MobFloatButton onPress={() => navigation.navigate("Cadastrar Diario")} />
      <MobFlex flexDirection="row" justifyContent="space-between" pb={2}>
        <MobText fontSize={3} fontWeight="bold">
          Filtrar por
        </MobText>

        <MobText fontSize={4} fontWeight="bold">
          01/03/2022
        </MobText>
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
                  fullWidth
                />
              )}
            </>
          ))}
      </ScrollView>
    </MobFlex>
  );
}
