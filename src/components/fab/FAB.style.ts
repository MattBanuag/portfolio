import styled from "styled-components";

export const FABContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 10%;
    right: 20%;
    padding: 20px;
    border: 1px solid #F2EDE9;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: #F2EDE9;
    transition: ease-in-out 0.2s;

    &:hover {
        border: 0.1px solid #41474C;
    }
`;