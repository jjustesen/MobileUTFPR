import React from "react";
import { useTheme } from "styled-components/native";
import styled from "styled-components/native";
import MobFlex from "../elements/Flex";
import MobText from "../elements/Text";

const InfoProfileStyled = styled(MobFlex)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid ${(props) => props.theme.colors.grey[8]};
`;

export const MobInfoProfile = ({
  label,
  value,
  backgrundColor = "grey",
  fullWidth,
  ...props
}) => {
  const theme = useTheme();
  const opaciti20 = "33";
  return (
    <>
      <MobText color="grey.12" fontSize={2} fontWeight="bold" mr={1}>
        {label}:
      </MobText>
      <InfoProfileStyled
        backgroundColor={theme.colors[backgrundColor][3] + opaciti20}
        borderRadius={12}
        p={3}
        {...props}
      >
        <MobText color="grey.12" fontSize={2}>
          {value}
        </MobText>
      </InfoProfileStyled>
    </>
  );
};
