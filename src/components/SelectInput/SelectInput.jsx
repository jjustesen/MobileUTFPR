import React from "react";
import styled, { useTheme } from "styled-components/native";
import MobFlex from "../elements/Flex";
import SelectDropdown from "react-native-select-dropdown";

const SelectInputStyled = styled(SelectDropdown)`
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

export const MobSelectInput = ({ label, fullWidth, onChange, ...props }) => {
  const theme = useTheme();
  return (
    <MobFlex {...props} style={{ width: fullWidth ? "100%" : null }}>
      <LabelStyled>{label}</LabelStyled>
      <SelectInputStyled
        {...props}
        onSelect={(selectedItem) => {
          onChange(selectedItem.value);
        }}
        buttonTextAfterSelection={(selectedItem) => {
          return selectedItem.label;
        }}
        rowTextForSelection={(item) => {
          return item.label;
        }}
        buttonStyle={{
          width: "100%",
          backgroundColor: "none",
          borderRadius: 8,
          border: `1px solid ${theme.colors.grey[10]}`,
          padding: 16,
          // justifyContent: "start",
        }}
      />
    </MobFlex>
  );
};
