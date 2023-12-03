import styled from "styled-components";
import { TextProps } from "../../interfaces/componentInterfaces";

export const Text = styled.p<TextProps>`
    font-size: ${({ size }) => size === null ? "1.1rem" : size };
    font-weight: ${({ bold }) => bold ? "600" : "400" };
    color: ${({ color }) => color !== null && color };
`;