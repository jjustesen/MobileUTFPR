import styled from "styled-components/native";
import {
  space,
  color,
  fontFamily,
  fontWeight,
  textAlign,
  letterSpacing,
  lineHeight,
  fontSize,
} from "styled-system";

export const MobText = styled.Text`
  ${fontSize};
  ${space};
  ${color};
  ${fontFamily};
  ${fontWeight};
  ${textAlign};
  ${letterSpacing};
  ${lineHeight};
`;
