import React from "react";
import MobTextInput from "../../components/TextInput";
import MobFlex from "../../components/elements/Flex";
import MobButton from "../../components/Button";
import MobText from "../../components/elements/Text";
import { MobTaskDisplay } from "../../components/TaskDisplay/TaskDisplay";
import { ScrollView } from "react-native";
import { MobClassDisplay } from "../../components/ClassDisplay/ClassDisplay";
import MobFloatButton from "../../components/FloatButton";

export function Diario({ navigation }) {
  const dayDiary = [
    {
      type: "class",
      title: "Programação Para Dispositivos Móveis",
      description: "Entrega 1 - protótipos das telas e tema definido",
      tags: ["assincrona", "meet"],
    },
    {
      type: "task",
      title: "Programação Para Dispositivos Móveis",
      description: "Projeto pratico 1",
      tags: ["assincrona", "meet"],
    },
    {
      type: "task",
      title: "Programação Para Dispositivos Móveis",
      description: "Projeto pratico 1",
      tags: ["assincrona", "meet"],
    },
    {
      type: "class",
      title: "Programação Para Dispositivos Móveis",
      description: "Entrega 1 - protótipos das telas e tema definido",
      tags: ["assincrona", "meet"],
    },
    {
      type: "task",
      title: "Programação Para Dispositivos Móveis",
      description: "Projeto pratico 1",
      tags: ["assincrona", "meet"],
    },
  ];

  return (
    <MobFlex p={3} mt={4}>
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
        {dayDiary.map((tarefa, index) => (
          <>
            {tarefa.type === "task" && (
              <MobTaskDisplay
                onPress={() => navigation.navigate("Aula")}
                key={index}
                title={tarefa.title}
                description={tarefa.description}
                icon={tarefa.icon}
                background={tarefa.background}
              />
            )}
            {tarefa.type === "class" && (
              <MobClassDisplay
                key={index}
                title={tarefa.title}
                description={tarefa.description}
                tags={tarefa.tags}
                background={tarefa.background}
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
