import React from "react";
import MobFlex from "../elements/Flex";
import styled, { useTheme } from "styled-components/native";
import MobText from "../elements/Text";
import MobAvatar from "../Avatar";
import { MobChip } from "../Chip/Chip";
import { TouchableOpacity } from "react-native";
const BackgroundStyled = styled(MobFlex)`
  border-radius: 12px;

  padding: 16px;
  background: ${(props) => props.theme.colors[props.background][10]};
`;

export const MobTaskDisplay = ({
  title,
  description,
  background = "red",
  icon = "notebook-outline",
  onPress,
  ...props
}) => {
  const theme = useTheme();
  return (
    <TouchableOpacity onPress={onPress}>
      <BackgroundStyled mt={3} background={background} {...props}>
        <MobFlex display="flex" flexDirection="row" alignItems="center">
          <MobAvatar icon={icon} />
          <MobFlex flex={1} ml={3}>
            <MobText fontWeight="bold" color={theme.colors.grey[1]}>
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
        </MobFlex>
      </BackgroundStyled>
    </TouchableOpacity>
  );
};
