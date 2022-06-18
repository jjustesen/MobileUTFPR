import React, { useCallback } from "react";
import MobTextInput from "../../components/TextInput";
import MobFlex from "../../components/elements/Flex";
import MobButton from "../../components/Button";
import { ScrollView } from "react-native";

export function TaskCreate({ handleLogin }) {
  const [form, setForm] = React.useState({
    date: "",
    time: "",
    class: "",
    type: "",
    classType: "",
    meetLink: "",
  });

  const handleChangeValue = useCallback(
    (value, name) => {
      setForm({ ...form, [name]: value });
    },
    [form]
  );

  return (
    <ScrollView>
      <MobFlex p={3} height="100%" mt={1}>
        <MobTextInput
          label="Data"
          onChangeText={(value) => handleChangeValue(value, "date")}
          placeholder="Insira aqui a data"
          value={form.date}
          fullWidth
        />
        <MobTextInput
          label="Hora"
          onChangeText={(value) => handleChangeValue(value, "time")}
          placeholder="Insira aqui a hora"
          value={form.time}
          fullWidth
        />
        <MobTextInput
          label="Disciplina"
          onChangeText={(value) => handleChangeValue(value, "class")}
          placeholder="Insira aqui a disciplina"
          value={form.class}
          fullWidth
        />
        <MobTextInput
          label="Tipo"
          onChangeText={(value) => handleChangeValue(value, "type")}
          placeholder="Insira aqui o tipo"
          value={form.type}
          fullWidth
        />
        <MobTextInput
          label="Tipo de aula"
          onChangeText={(value) => handleChangeValue(value, "classType")}
          placeholder="Insira aqui o tipo de aula"
          value={form.classType}
          fullWidth
        />
        <MobTextInput
          label="Link meet"
          onChangeText={(value) => handleChangeValue(value, "meetLink")}
          placeholder="Insira aqui o link"
          value={form.meetLink}
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
