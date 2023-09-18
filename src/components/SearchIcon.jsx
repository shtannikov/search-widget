import styled from 'styled-components';

const iconSize = '18px';
const Icon = styled.div`
    height: ${ iconSize };
    width: ${ iconSize };
    fill: #9aa0a6;
`;

export function SearchIcon() {
    return (<Icon>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
    </Icon>);
}
