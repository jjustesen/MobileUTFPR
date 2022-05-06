import styled from "styled-components/native";
import {
  space,
  color,
  fontFamily,
  fontWeight,
  textAlign,
  letterSpacing,
  lineHeight,
  layout,
  fontSize,
} from "styled-system";

export const MobText = styled.Text`
  ${fontSize};
  ${layout};
  ${space};
  ${color};
  ${fontFamily};
  ${fontWeight};
  ${textAlign};
  ${letterSpacing};
  ${lineHeight};
`;
