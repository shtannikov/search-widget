import styled from 'styled-components';

const mobileScreen = '(max-width: 767px)';
export const BORDER = '1px solid #dfe1e5';

export const Container = styled.div`
    display: flex;
    flex-flow: column;

    width: 50%;
    @media ${mobileScreen} {
        width: 75%;
    }
    padding-top: 5px;
    padding-bottom: 5px;

    font-family: arial, sans-serif;
    font-size: 14px;
    color: #202124;

    border: ${ BORDER };
    box-shadow: none;
    border-radius: 20px;

    &.active,
    &:hover {
        box-shadow: 0 1px 6px rgba(32,33,36,.28);
        border-color: rgba(223,225,229,0);
    }
`;