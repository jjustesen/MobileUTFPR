import React from "react";
import MobFlex from "../elements/Flex";
import styled, { useTheme } from "styled-components/native";
import MobText from "../elements/Text";
const BackgroundStyled = styled(MobFlex)`
  border-radius: 12px;

  padding: 16px;
  background: ${(props) => props.theme.colors.blue[6]};
`;

export const MobInfosDisplay = ({ title }) => {
  const theme = useTheme();
  return (
    <BackgroundStyled mt={3} height="120px" background="red">
      <MobText color={theme.colors.grey[1]}>{title}</MobText>
      <MobText color={theme.colors.grey[1]} mt={1} opacity="0.7">
        Entrega 1 - protótipos das telas e tema definido
      </MobText>
    </BackgroundStyled>
  );
};
