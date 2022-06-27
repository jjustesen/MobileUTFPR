import React, { useCallback, useEffect, useMemo } from "react";
import MobTextInput from "../../components/TextInput";
import MobFlex from "../../components/elements/Flex";
import MobButton from "../../components/Button";
import { ScrollView } from "react-native";
import { useAuth } from "../../providers/auth";
import { calendarioPost } from "../../services/calendario";
import MobRadioGroup from "../../components/RadioGroup";
import { dateFormat } from "../../utils/dateFormat";
import { timeFormat } from "../../utils/timeFormat";
import { disciplinasGetByIdUsuario } from "../../services/disciplinas";

const type = [
  { name: "Aula", value: "Aula" },
  { name: "Tarefa", value: "Tarefa" },
];

const classType = [
  { name: "Presencial", value: "Presencial" },
  { name: "Online", value: "Online" },
];

const colors = [
  { name: "Azul", value: "blue" },
  { name: "Verde", value: "green" },
  { name: "Vermelho", value: "red" },
  { name: "Amarelo", value: "yellow" },
];

export function SubjectAddTask({ navigation }) {
  const { userInfos } = useAuth();

  const initialValues = {
    date: "",
    startTime: "",
    endTime: "",
    key: "",
    type: "",
    classType: "",
    meetLink: "",
    description: "",
    color: "blue",
    idUsuario: userInfos.id,
  };
  const [form, setForm] = React.useState(initialValues);
  const [disciplinas, setDisciplinas] = React.useState([]);
  useEffect(() => {
    disciplinasGetByIdUsuario({ setValue: setDisciplinas, id: userInfos.id });
  }, []);

  const disciplinasFormated = useMemo(() => {
    return disciplinas?.map((disciplina) => {
      return {
        name: disciplina.name,
        value: disciplina.key,
      };
    });
  }, [disciplinas]);

  const handleChangeValue = useCallback(
    (value, name) => {
      setForm({ ...form, [name]: value });
    },
    [form]
  );

  console.log(disciplinasFormated);

  const handleSubmit = useCallback(() => {
    calendarioPost({ payload: form });
    setForm(initialValues);
    navigation.navigate("Diario");
  }, [form]);

  return (
    <ScrollView>
      <MobFlex p={3} height="100%" mt={1}>
        <MobTextInput
          label="Data"
          onChangeText={(value) => handleChangeValue(dateFormat(value), "date")}
          placeholder="Insira aqui a data"
          value={form.date}
          fullWidth
        />
        <MobTextInput
          label="Hora de inicio"
          onChangeText={(value) =>
            handleChangeValue(timeFormat(value), "startTime")
          }
          placeholder="Insira aqui a hora"
          value={form.startTime}
          fullWidth
        />
        <MobTextInput
          label="Hora de termino"
          onChangeText={(value) =>
            handleChangeValue(timeFormat(value), "endTime")
          }
          placeholder="Insira aqui a hora"
          value={form.endTime}
          fullWidth
        />
        {disciplinas.length ? (
          <MobRadioGroup
            label="Disciplinas"
            onChangeValue={(value) => handleChangeValue(value, "key")}
            value={form.key}
            items={disciplinasFormated}
            fullWidth
          />
        ) : (
          <MobTextInput
            label="Disciplina"
            onChangeText={(value) => handleChangeValue(value, "title")}
            placeholder="Insira aqui a disciplina"
            value={form.title}
            fullWidth
          />
        )}
        <MobTextInput
          label="Descrição"
          onChangeText={(value) => handleChangeValue(value, "description")}
          placeholder="Insira aqui a disciplina"
          value={form.description}
          fullWidth
        />
        <MobRadioGroup
          label="Tipo"
          onChangeValue={(value) => handleChangeValue(value, "type")}
          value={form.type}
          items={type}
          fullWidth
        />
        {form.type === "Aula" && (
          <MobRadioGroup
            label="Tipo de aula"
            onChangeValue={(value) => handleChangeValue(value, "classType")}
            value={form.classType}
            items={classType}
            fullWidth
          />
        )}
        {form.type === "Aula" && form.classType === "Online" && (
          <MobTextInput
            label="Link meet"
            onChangeText={(value) => handleChangeValue(value, "meetLink")}
            placeholder="Insira aqui o link"
            value={form.meetLink}
            fullWidth
          />
        )}
        <MobRadioGroup
          label="Cor de fundo"
          onChangeValue={(value) => handleChangeValue(value, "color")}
          value={form.color}
          items={colors}
          fullWidth
        />
        <MobButton
          title="Cadastrar"
          key="Cadastrar"
          color="blue"
          mt={4}
          onPress={handleSubmit}
        />
      </MobFlex>
    </ScrollView>
  );
}
