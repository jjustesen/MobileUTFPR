import React from "react";
import MobTextInput from "../../components/TextInput";
import MobFlex from "../../components/elements/Flex";
import MobButton from "../../components/Button";
import { useAuth } from "../../providers/auth";

export function Login() {
  const [user, onChangeUser] = React.useState("");
  const [senha, onChangeSenha] = React.useState(null);

  const { login, register } = useAuth();

  const handleLogin = () => {
    register(user, senha);
  };

  return (
    <MobFlex p={3} height="100%" mt={5}>
      <MobTextInput
        label="user"
        onChangeText={onChangeUser}
        placeholder="Seu número de matricula"
        value={user}
        fullWidth
      />
      <MobTextInput
        label="Senha"
        onChangeText={onChangeSenha}
        placeholder="Digite sua senha"
        value={senha}
        fullWidth
      />
      <MobButton title="Login" color="blue" mt={4} onPress={handleLogin} />
    </MobFlex>
  );
}
