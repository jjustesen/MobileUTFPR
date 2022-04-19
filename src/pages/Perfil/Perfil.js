import React from "react";
import MobTextInput from "../../components/TextInput";
import MobFlex from "../../components/elements/Flex";
import MobButton from "../../components/Button";

export function Perfil({ navigation }) {
  const [login, onChangeLogin] = React.useState("");
  const [senha, onChangeSenha] = React.useState(null);

  return (
    <MobFlex p={3}>
      <MobTextInput
        label="Senha"
        onChangeText={onChangeSenha}
        placeholder="Digite sua senha"
        value={senha}
        fullWidth
      />
      <MobButton
        title="Login"
        color="blue"
        mt={4}
        onPress={() => navigation.navigate("Home")}
      />
    </MobFlex>
  );
}
