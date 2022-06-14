import React from "react";
import { ScrollView } from "react-native";
import MobFlex from "../../components/elements/Flex";
import MobText from "../../components/elements/Text";
import { MobTaskDisplay } from "../../components/TaskDisplay/TaskDisplay";
import { MobClassDisplay } from "../../components/ClassDisplay/ClassDisplay";
import {
  aulasGetByIdUsuario,
  aulasGetTodayByIdUsuario,
} from "../../services/aulas";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/auth";

export function Home() {
  const [aulas, setAulas] = useState();
  const [loadingAulas, setLoadingAulas] = useState(true);

  const { userInfos } = useAuth();

  console.log(userInfos);

  useEffect(() => {
    if (userInfos) {
      aulasGetTodayByIdUsuario({
        setValue: setAulas,
        setLoading: setLoadingAulas,
        id: userInfos?.id,
      });
    }
  }, [userInfos]);

  console.log(aulas);

  const aulasDeHoje = [
    {
      title: "Programação Para Dispositivos Móveis",
      description: "Entrega 1 - protótipos das telas e tema definido",
      tags: ["assincrona", "meet"],
      background: "blue",
    },
    {
      title: "Programação Para Dispositivos Móveis",
      description: "Entrega 1 - protótipos das telas e tema definido",
      tags: ["assincrona", "meet"],
      background: "green",
    },
  ];
  const tarefasParaSemana = [
    {
      title: "Programação Para Dispositivos Móveis",
      description: "Projeto pratico 1",
      tags: ["assincrona", "meet"],
      background: "blue",
    },
    {
      title: "Programação Para Dispositivos Móveis",
      description: "Projeto pratico 1",
      tags: ["assincrona", "meet"],
      background: "green",
    },
    {
      title: "Programação Para Dispositivos Móveis",
      description: "Projeto pratico 1",
      tags: ["assincrona", "meet"],
      background: "red",
    },
  ];

  return (
    <ScrollView>
      <MobFlex p={3} mt={4}>
        <MobText fontWeight="bold" fontSize={16} mb={2}>
          Aulas de hoje
        </MobText>

        <ScrollView horizontal={true}>
          {!loadingAulas ? (
            aulas?.map((aula, index) => (
              <MobClassDisplay
                key={index}
                title={aula.title}
                description={aula.description}
                tags={aula.tags}
                background={aula.background}
                icon={aula.icon}
                mr={3}
                mb={3}
              />
            ))
          ) : (
            <MobText fontWeight="bold" fontSize={16} my={2}>
              Nenhuma tarefa
            </MobText>
          )}
        </ScrollView>

        <MobText fontWeight="bold" fontSize={16} my={2}>
          Tarefas para a semana
        </MobText>

        {tarefasParaSemana.map((tarefa, index) => (
          <MobTaskDisplay
            key={index}
            title={tarefa.title}
            description={tarefa.description}
            icon={tarefa.icon}
            background={tarefa.background}
          />
        ))}
      </MobFlex>
    </ScrollView>
  );
}
