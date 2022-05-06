import React from "react";
import { useTheme } from "styled-components/native";
import styled from "styled-components/native";
import MobFlex from "../elements/Flex";
import MobText from "../elements/Text";

const InfoStyled = styled(MobFlex)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);
`;

export const MobInfo = ({
  label,
  value,
  backgrundColor = "grey",
  fullWidth,
  ...props
}) => {
  const theme = useTheme();
  const opaciti20 = "33";
  return (
    <InfoStyled
      backgroundColor={theme.colors[backgrundColor][2] + opaciti20}
      borderRadius={12}
      p={3}
      {...props}
    >
      <MobText color="white" fontSize={2} fontWeight="bold" mr={1}>
        {label}:
      </MobText>
      <MobText color="white" fontSize={2}>
        {value}
      </MobText>
    </InfoStyled>
  );
};
