import styled from "styled-components/native";
import { flexbox, border } from "styled-system";
import MobBox from "../Box";

export const MobFlex = styled(MobBox)`
  ${flexbox};
  ${border};
  display: flex;
`;
