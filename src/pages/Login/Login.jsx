import React from "react";
import MobTextInput from "../../components/TextInput";
import MobFlex from "../../components/elements/Flex";
import MobButton from "../../components/Button";
import { useAuth } from "../../providers/auth";

export function Login({ handleRegister }) {
  const [user, onChangeUser] = React.useState("");
  const [senha, onChangeSenha] = React.useState(null);

  const { login } = useAuth();

  const handleLogin = () => {
    login(user, senha);
  };

  return (
    <MobFlex p={3} height="100%" mt={5}>
      <MobTextInput
        label="user"
        onChangeText={onChangeUser}
        placeholder="Digite seu e-mail"
        value={user}
        fullWidth
      />
      <MobTextInput
        label="Senha"
        onChangeText={onChangeSenha}
        placeholder="Digite sua senha"
        value={senha}
        secureTextEntry={true}
        fullWidth
      />
      <MobButton title="Login" color="blue" mt={4} onPress={handleLogin} />
      <MobButton
        title="Registrar"
        color="blue"
        mt={4}
        onPress={handleRegister}
      />
    </MobFlex>
  );
}
