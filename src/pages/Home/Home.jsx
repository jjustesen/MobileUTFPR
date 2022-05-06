import React from "react";
import { ScrollView } from "react-native";
import MobFlex from "../../components/elements/Flex";
import MobText from "../../components/elements/Text";
import { MobTaskDisplay } from "../../components/TaskDisplay/TaskDisplay";
import { MobClassDisplay } from "../../components/ClassDisplay/ClassDisplay";

export function Home({ navigation }) {
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
          {aulasDeHoje.map((aula, index) => (
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
          ))}
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
