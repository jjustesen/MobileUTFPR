import React from "react";
import MobTextInput from "../../components/TextInput";
import MobFlex from "../../components/elements/Flex";
import MobButton from "../../components/Button";

export function Login({ navigation }) {
  const [login, onChangeLogin] = React.useState("");
  const [senha, onChangeSenha] = React.useState(null);

  return (
    <MobFlex p={3}>
      <MobTextInput
        label="Login"
        onChangeText={onChangeLogin}
        placeholder="Seu número de matricula"
        value={login}
        fullWidth
      />
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
