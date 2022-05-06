import React from "react";
import MobTextInput from "../../components/TextInput";
import MobFlex from "../../components/elements/Flex";
import MobButton from "../../components/Button";
import { useTheme } from "styled-components/native";
import MobInfo from "../../components/Info";
import MobText from "../../components/elements/Text";
import MobAvatar from "../../components/Avatar";
import { MobChip } from "../../components/Chip/Chip";
import MobFileView from "../../components/FileView";
export function DisplayInfos({
  title = "Programação Para Dispositivos Móveis",
  description = "Entrega 1 - protótipos das telas e tema definido",
  icon = "notebook-outline",
  handleLogin,
  navigation,
}) {
  const [login, onChangeLogin] = React.useState("");
  const [senha, onChangeSenha] = React.useState(null);

  return (
    <MobFlex p={3} height="100%" backgroundColor="red.10">
      <MobFlex display="flex" flexDirection="row">
        <MobAvatar icon={icon} mt={2} />
        <MobFlex flex={1} ml={3}>
          <MobText fontSize={2} fontWeight="bold" color="grey.1">
            {title}
          </MobText>
          <MobText fontSize={1} color="grey.1" mt={1} opacity="0.7">
            {description}
          </MobText>
        </MobFlex>
      </MobFlex>
      <MobFlex display="flex" flexDirection="row" alignItems="center">
        {["assincrona", "meet"].map((tag) => (
          <MobChip label={tag} mr={2} mt={2} />
        ))}
      </MobFlex>

      <MobText color="white" fontSize={3} fontWeight="bold" mt={3} mb={3}>
        Infos
      </MobText>
      <MobInfo label="Tipo de aula" value="Assincrona" mb={3} fullWidth />
      <MobInfo label="Horario da aula" value="19:00 / 22:00" mb={3} fullWidth />
      <MobInfo
        label="Link para meet"
        value=" http://meet.com/d87sa6ad87"
        mb={3}
        fullWidth
      />

      <MobText color="white" fontSize={3} fontWeight="bold" mt={3} mb={3}>
        Arquivos para aula
      </MobText>
      <MobFileView />
    </MobFlex>
  );
}
