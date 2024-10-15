import styled, { css } from "styled-components";

export default styled.input`
    width: 100%;
    background: white;
    border: 2px solid white;
    border-radius: 4px;
    height: 52px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 16px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray[900]};
    transition: all 0.2s ease-in;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary.dark};

    }

    ${({ theme, error }) => error && css`
        color: ${theme.colors.danger.main};
        border-color: ${theme.colors.danger.main} !important;

    `}
`;


