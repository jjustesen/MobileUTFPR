import React, { useCallback } from "react";
import MobTextInput from "../../components/TextInput";
import MobFlex from "../../components/elements/Flex";
import MobButton from "../../components/Button";
import { useAuth } from "../../providers/auth";

export function Register({ handleCancel }) {
  const [form, setForm] = React.useState({
    name: "",
    ra: "",
    email: "",
    password: "",
  });

  const handleChangeValue = useCallback(
    (value, name) => {
      setForm({ ...form, [name]: value });
    },
    [form]
  );

  const { register } = useAuth();

  const handleRegiste = () => {
    register(form);
  };

  return (
    <MobFlex p={3} height="100%" mt={5}>
      <MobTextInput
        label="Name"
        onChangeText={(value) => handleChangeValue(value, "name")}
        placeholder="Digite seu nome"
        value={form.name}
        fullWidth
      />
      <MobTextInput
        label="RA"
        onChangeText={(value) => handleChangeValue(value, "ra")}
        placeholder="Digite seu numero de matricula"
        value={form.ra}
        fullWidth
      />
      <MobTextInput
        label="E-mail"
        onChangeText={(value) => handleChangeValue(value, "email")}
        placeholder="Digite seu e-mail"
        value={form.email}
        fullWidth
      />
      <MobTextInput
        label="Senha"
        onChangeText={(value) => handleChangeValue(value, "password")}
        placeholder="Digite sua senha"
        value={form.password}
        fullWidth
      />

      <MobButton
        title="Registrar"
        color="blue"
        mt={4}
        onPress={handleRegiste}
      />
      <MobButton title="Cancelar" color="blue" mt={4} onPress={handleCancel} />
    </MobFlex>
  );
}
