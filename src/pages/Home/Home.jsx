import React from "react";
import { ScrollView } from "react-native";
import MobFlex from "../../components/elements/Flex";
import MobText from "../../components/elements/Text";
import { MobTaskDisplay } from "../../components/TaskDisplay/TaskDisplay";
import { MobClassDisplay } from "../../components/ClassDisplay/ClassDisplay";
import { aulasGetTodayByIdUsuario } from "../../services/aulas";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/auth";
import { MobClassDisplayEmpty } from "../../components/ClassDisplay/ClassDisplayEmpty";
import { tarefasGetWeekByIdUsuario } from "../../services/tarefas";
import { useAula } from "../../providers/aula";

export function Home({ navigation }) {
  const [aulas, setAulas] = useState();
  const [loadingAulas, setLoadingAulas] = useState(true);
  const [tarefas, setTarefas] = useState();
  const [loadingTarefas, setLoadingTarefas] = useState(true);

  const { setSelectedAula } = useAula();
  const { userInfos } = useAuth();
  console.log(userInfos);
  useEffect(() => {
    if (userInfos) {
      aulasGetTodayByIdUsuario({
        setValue: setAulas,
        setLoading: setLoadingAulas,
        id: userInfos?.id,
      });
      tarefasGetWeekByIdUsuario({
        setValue: setTarefas,
        setLoading: setLoadingTarefas,
        id: userInfos?.id,
      });
    }
  }, [userInfos]);

  const handleNavigate = (item) => {
    navigation.navigate("Aula");
    setSelectedAula(item);
  };

  return (
    <ScrollView>
      <MobFlex p={3} mt={4}>
        <MobText fontWeight="bold" fontSize={16} mb={2}>
          Aulas de hoje
        </MobText>

        <ScrollView horizontal={true}>
          {!loadingAulas && aulas.length ? (
            aulas?.map((aula, index) => (
              <>
                <MobClassDisplay
                  key={index}
                  onPress={() => handleNavigate(aula)}
                  title={aula.title}
                  description={aula.description}
                  tags={aula.tags || []}
                  background={aula.color}
                  icon={aula.icon}
                  mr={3}
                  mb={3}
                />
              </>
            ))
          ) : (
            <MobClassDisplayEmpty />
          )}
        </ScrollView>

        <MobText fontWeight="bold" fontSize={16} my={2}>
          Tarefas para a semana
        </MobText>

        {!loadingTarefas &&
          tarefas.map((tarefa, index) => (
            <MobTaskDisplay
              key={index}
              onPress={() => handleNavigate(tarefa)}
              title={tarefa.title}
              description={tarefa.description}
              icon={tarefa.icon}
              background={tarefa.color}
            />
          ))}
      </MobFlex>
    </ScrollView>
  );
}
