import styled from "styled-components";
import { SectionProps } from "../../interfaces/componentInterfaces";

export const PageContainer = styled.main`
    height: 100vh;
    margin: 5% 20%;
`;

export const Section = styled.section<SectionProps>`
    display: flex;
    flex-direction: ${({ isTwoColumns }) => !isTwoColumns && "column"};
    gap: ${({ gap }) => gap };
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Article = styled.article`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
export const Figure = styled.figure`

`;
