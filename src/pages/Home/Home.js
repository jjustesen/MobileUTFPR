import React from "react";
import MobFlex from "../../components/elements/Flex";
import MobText from "../../components/elements/Text";
import MobInfosDisplay from "../../components/InfosDisplay";

export function Home({ navigation }) {
  const [login, onChangeLogin] = React.useState("");
  const [senha, onChangeSenha] = React.useState(null);

  return (
    <MobFlex p={3}>
      <MobText fontWeight="bold" fontSize={2}>
        Aulas de hoje
      </MobText>
      <MobInfosDisplay
        title="Programação Para Dispositivos Móveis"
        tags={["assincrona", "meet"]}
        color="blue"
      />
    </MobFlex>
  );
}
