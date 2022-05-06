import React from "react";
import { useTheme } from "styled-components/native";
import styled from "styled-components/native";
import MobFlex from "../elements/Flex";
import MobText from "../elements/Text";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const FileViewStyled = styled(MobFlex)`
  width: 64px;
  height: 64px;
  justify-content: center;
  align-items: center;
`;

export const MobFileView = ({
  backgrundColor = "grey",
  icon = "file-outline",
  ...props
}) => {
  const theme = useTheme();
  const opaciti20 = "33";
  return (
    <FileViewStyled
      backgroundColor={theme.colors[backgrundColor][2] + opaciti20}
      borderRadius={16}
      p={3}
      {...props}
    >
      <MaterialCommunityIcons
        name={icon}
        color={theme.colors.grey[1]}
        size={26}
      />
    </FileViewStyled>
  );
};
