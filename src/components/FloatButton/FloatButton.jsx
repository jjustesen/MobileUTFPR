import React from "react";
import { useTheme } from "styled-components/native";
import styled from "styled-components/native";
import MobFlex from "../elements/Flex";
import MobText from "../elements/Text";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";

const FloatButtonStyled = styled(TouchableOpacity)`
  width: 64px;
  height: 64px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 64px;
  right: 16px;
  z-index: 999;
  border-radius: 16px;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.yellow[8]};
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);
`;

export const MobFloatButton = ({
  backgrundColor = "grey",
  icon = "plus",
  onPress,
  ...props
}) => {
  const theme = useTheme();
  return (
    <FloatButtonStyled theme={theme} onPress={onPress} {...props}>
      <MaterialCommunityIcons name={icon} color="white" size={26} />
    </FloatButtonStyled>
  );
};
