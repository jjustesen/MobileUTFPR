import React from "react";
import { useTheme } from "styled-components/native";
import styled from "styled-components/native";
import MobFlex from "../elements/Flex";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const AvatarStyled = styled(MobFlex)`
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MobAvatar = ({
  backgrundColor = "grey",
  icon = "calendar",
  ...props
}) => {
  const theme = useTheme();
  return (
    <AvatarStyled
      backgroundColor={theme.colors[backgrundColor][3]}
      borderRadius={100}
      {...props}
    >
      <MaterialCommunityIcons
        name={icon}
        color={theme.colors.grey[11]}
        size={26}
      />
    </AvatarStyled>
  );
};
