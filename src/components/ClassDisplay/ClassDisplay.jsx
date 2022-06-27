import React from "react";
import MobFlex from "../elements/Flex";
import styled, { useTheme } from "styled-components/native";
import MobText from "../elements/Text";
import MobAvatar from "../Avatar";
import { MobChip } from "../Chip/Chip";
import { TouchableOpacity } from "react-native";
const BackgroundStyled = styled(MobFlex)`
  border-radius: 12px;
  width: ${(props) => (props.fullWidth ? "100%" : "280px")};
  padding: 16px;
  background: ${(props) => props.theme.colors[props.background][6]};
`;

export const MobClassDisplay = ({
  title,
  description,
  background = "blue",
  icon = "school-outline",
  onPress,
  ...props
}) => {
  const theme = useTheme();
  return (
    <TouchableOpacity onPress={onPress}>
      <BackgroundStyled mt={3} background={background} {...props}>
        <MobFlex display="flex" flexDirection="row" alignItems="center">
          <MobAvatar icon={icon} />

          {!!props.classType && <MobChip label={props.classType} ml={2} />}

          {!!props.meetLink && <MobChip label="Meet" ml={2} />}
        </MobFlex>
        <MobFlex mt={3}>
          <MobText fontWeight="bold" width={"90%"} color={theme.colors.grey[1]}>
            {title}
          </MobText>
          <MobText
            fontSize={1}
            color={theme.colors.grey[1]}
            mt={1}
            opacity="0.7"
          >
            {description}
          </MobText>
        </MobFlex>
      </BackgroundStyled>
    </TouchableOpacity>
  );
};
