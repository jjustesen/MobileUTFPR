import React from "react";
import { useTheme } from "styled-components/native";
import styled from "styled-components/native";
import MobFlex from "../elements/Flex";
import MobText from "../elements/Text";

const ChipStyled = styled(MobFlex)`
  padding: 2px 8px;
  height: 24px;
`;

export const MobChip = ({
  label,
  backgrundColor = "grey",
  fullWidth,
  ...props
}) => {
  const theme = useTheme();
  const opaciti20 = "33";
  return (
    <ChipStyled
      backgroundColor={theme.colors[backgrundColor][2] + opaciti20}
      borderRadius={100}
      {...props}
    >
      <MobText
        style={{ textTransform: "uppercase" }}
        color="white"
        fontSize={1}
      >
        {label}
      </MobText>
    </ChipStyled>
  );
};
