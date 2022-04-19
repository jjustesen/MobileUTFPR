import React from "react";
import styled from "styled-components/native";
import MobFlex from "../elements/Flex";

const TextInputStyled = styled.TextInput`
  color: ${(props) => props.theme.colors.grey[10]};
  font-size: 14px;
  width: 100%;
  margin-bottom: 12px;
  padding: 16px;

  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.grey[10]};
`;

const LabelStyled = styled.Text`
  color: ${(props) => props.theme.colors.grey[12]};
  text-transform: uppercase;
  font-size: 12px;

  padding-left: 4px;
  padding-bottom: 4px;
`;

export const MobTextInput = ({ label, fullWidth, ...props }) => {
  return (
    <MobFlex {...props} style={{ width: fullWidth ? "100%" : null }}>
      <LabelStyled>{label}</LabelStyled>
      <TextInputStyled {...props} />
    </MobFlex>
  );
};
