import React from "react";
import { useTheme } from "styled-components/native";
import styled from "styled-components/native";
import MobFlex from "../elements/Flex";

const ButtonStyled = styled.Button`
  font-size: 14px;
  width: 100%;
  margin-bottom: 12px;
  padding: 32px;

  border-radius: 8px;
`;

export const MobButton = ({ label, color = "blue", fullWidth, ...props }) => {
  const theme = useTheme();
  return (
    <MobFlex {...props}>
      <ButtonStyled color={theme.colors[color][11]} {...props} />
    </MobFlex>
  );
};
