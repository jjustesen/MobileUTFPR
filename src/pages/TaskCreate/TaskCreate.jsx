import React from "react";
import MobTextInput from "../../components/TextInput";
import MobFlex from "../../components/elements/Flex";
import MobButton from "../../components/Button";
import { ScrollView } from "react-native";

export function TaskCreate({ handleLogin, navigation }) {
  const [login, onChangeLogin] = React.useState("");
  const [senha, onChangeSenha] = React.useState(null);

  return (
    <ScrollView>
      <MobFlex p={3} height="100%" mt={1}>
        <MobTextInput
          label="Data"
          onChangeText={onChangeLogin}
          placeholder="Insira aqui a data"
          value={login}
          fullWidth
        />
        <MobTextInput
          label="Hora"
          onChangeText={onChangeSenha}
          placeholder="Insira aqui a hora"
          value={senha}
          fullWidth
        />
        <MobTextInput
          label="Disciplina"
          onChangeText={onChangeSenha}
          placeholder="Insira aqui a disciplina"
          value={senha}
          fullWidth
        />
        <MobTextInput
          label="Tipo"
          onChangeText={onChangeSenha}
          placeholder="Insira aqui o tipo"
          value={senha}
          fullWidth
        />
        <MobTextInput
          label="Tipo de aula"
          onChangeText={onChangeSenha}
          placeholder="Insira aqui o tipo de aula"
          value={senha}
          fullWidth
        />
        <MobTextInput
          label="Link meet"
          onChangeText={onChangeSenha}
          placeholder="Insira aqui o link"
          value={senha}
          fullWidth
        />
        <MobButton
          title="Cadastrar"
          color="blue"
          mt={4}
          onPress={handleLogin}
        />
      </MobFlex>
    </ScrollView>
  );
}
