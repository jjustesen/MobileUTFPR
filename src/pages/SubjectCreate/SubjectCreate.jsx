import React, { useCallback } from "react";
import MobTextInput from "../../components/TextInput";
import MobFlex from "../../components/elements/Flex";
import MobButton from "../../components/Button";
import { ScrollView } from "react-native";
import { useAuth } from "../../providers/auth";
import { disciplinasPost } from "../../services/disciplinas";

export function SubjectCreate({ navigation }) {
  const { userInfos } = useAuth();
  const initialValues = {
    name: "",
    key: "",
    password: "",
    idUsuario: userInfos.id,
  };

  const [form, setForm] = React.useState(initialValues);

  const handleChangeValue = useCallback(
    (value, name) => {
      setForm({ ...form, [name]: value });
    },
    [form]
  );

  const handleSubmit = useCallback(() => {
    disciplinasPost({ payload: form });
    setForm(initialValues);
    navigation.navigate("Diario");
  }, [form]);

  return (
    <ScrollView>
      <MobFlex p={3} height="100%" mt={1}>
        <MobTextInput
          label="Nome"
          onChangeText={(value) => handleChangeValue(value, "name")}
          placeholder="Insira aqui o nome"
          value={form.name}
          fullWidth
        />
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
