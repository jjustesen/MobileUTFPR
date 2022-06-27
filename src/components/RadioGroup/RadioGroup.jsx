import React from "react";
import { RadioButton, Text } from "react-native-paper";
import styled from "styled-components/native";
import MobFlex from "../elements/Flex";

const LabelStyled = styled.Text`
  color: ${(props) => props.theme.colors.grey[12]};
  text-transform: uppercase;
  font-size: 12px;

  padding-left: 4px;
  padding-bottom: 4px;
`;
export const MobRadioGroup = ({ label, value, items, onChangeValue }) => {
  return (
    <>
      <LabelStyled>{label}</LabelStyled>
      <RadioButton.Group
        onValueChange={(value) => onChangeValue(value)}
        value={value}
      >
        <MobFlex flexDirection="row" flexWrap="wrap">
          {items.map((item, index) => (
            <MobFlex
              flexDirection="row"
              alignItems="center"
              mb={2}
              mr={4}
              key={index}
            >
              <RadioButton value={item.value} />
              <Text>{item.name}</Text>
            </MobFlex>
          ))}
        </MobFlex>
      </RadioButton.Group>
    </>
  );
};

export default MobRadioGroup;
