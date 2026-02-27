import styled from "styled-components";
import { LogoProps } from "./interface";

const LogoImage = styled.img<LogoProps>`
  width: ${({ width }) => width}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
`;

export default LogoImage;