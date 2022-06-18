import React from "react";
import MobFlex from "../elements/Flex";
import styled, { useTheme } from "styled-components/native";
import MobText from "../elements/Text";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";
const BackgroundStyled = styled(MobFlex)`
  border-radius: 12px;
  width: ${(props) => (props.fullWidth ? "100%" : "280px")};
  padding: 16px;
  background: ${(props) => props.theme.colors.grey[6]};
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MobClassDisplayEmpty = ({ onPress, ...props }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity onPress={onPress} s>
      <BackgroundStyled mt={3} {...props}>
        <MaterialCommunityIcons
          name={"calendar"}
          color={theme.colors.grey[11]}
          size={26}
        />
        <MobText fontSize={16} fontWeight="bold">
          Nenhuma aula para hoje
        </MobText>
      </BackgroundStyled>
    </TouchableOpacity>
  );
};
