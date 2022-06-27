import React from "react";
import MobFlex from "../elements/Flex";
import styled from "styled-components/native";
import MobText from "../elements/Text";
import { TouchableOpacity } from "react-native";
const BackgroundStyled = styled(MobFlex)`
  border-radius: 12px;
  width: ${(props) => (props.fullWidth ? "100%" : "280px")};
  padding: 16px;
  background: ${(props) => props.theme.colors.grey[6]};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MobTaskDisplayEmpty = ({ onPress, ...props }) => {
  return (
    <TouchableOpacity onPress={onPress} s>
      <BackgroundStyled mt={3} {...props}>
        <MobText fontSize={16} fontWeight="bold" textAlign="center">
          Nenhuma tarefa para esta semana
        </MobText>
      </BackgroundStyled>
    </TouchableOpacity>
  );
};
