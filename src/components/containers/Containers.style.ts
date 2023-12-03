import styled from "styled-components";
import { PageContainerProps, SectionProps } from "../../interfaces/componentInterfaces";

export const PageContainer = styled.main`
    height: 100vh;
    margin: 5% 20%;
`;

export const Section = styled.section<SectionProps>`
    display: flex;
    flex-direction: ${({ isTwoColumns }) => !isTwoColumns && "column"};
    gap: 20px;
`;

export const Div = styled.div`

`;

export const Article = styled.article`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;