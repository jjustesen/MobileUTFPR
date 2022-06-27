import React, { useCallback, useEffect } from "react";
import MobTextInput from "../../components/TextInput";
import MobFlex from "../../components/elements/Flex";
import MobButton from "../../components/Button";
import { Alert, ScrollView } from "react-native";
import { useAuth } from "../../providers/auth";
import { usuariosPostDisciplinaById } from "../../services/usuarios";
import { disciplinasGet } from "../../services/disciplinas";

export function SubjectAdd({ navigation }) {
  const { userInfos } = useAuth();
  const initialValues = {
    key: "",
    password: "",
  };

  const [form, setForm] = React.useState(initialValues);
  const [disciplinas, setDisciplinas] = React.useState([]);

  const handleChangeValue = useCallback(
    (value, name) => {
      setForm({ ...form, [name]: value });
    },
    [form]
  );

  const handleSubmit = useCallback(() => {
    const validateDisciplina =
      disciplinas.find((disciplina) => disciplina.key === form.key)
        ?.password === form.password;

    if (validateDisciplina) {
      usuariosPostDisciplinaById({ payload: form, id: userInfos.id });
      setForm(initialValues);
      navigation.navigate("Diario");
    } else {
      Alert.alert("Falha no cadastro", "Verifique as informações", [
        { text: "OK", onPress: () => console.error("Error") },
      ]);
    }
  }, [form]);

  useEffect(() => {
    disciplinasGet({ setValue: setDisciplinas });
  }, []);

  return (
    <ScrollView>
      <MobFlex p={3} height="100%" mt={1}>
        <MobTextInput
          label="Chave"
          onChangeText={(value) => handleChangeValue(value, "key")}
          placeholder="Insira aqui a chave"
          value={form.key}
          fullWidth
        />
        <MobTextInput
          label="Senha"
          onChangeText={(value) => handleChangeValue(value, "password")}
          placeholder="Insira aqui a hora"
          secureTextEntry={true}
          value={form.password}
          fullWidth
        />
        <MobButton
          title="Cadastrar"
          color="blue"
          mt={4}
          onPress={handleSubmit}
        />
      </MobFlex>
    </ScrollView>
  );
}
