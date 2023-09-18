import { useRef, useState } from 'react';
import styled from 'styled-components';

const Topics = [
    'Погода сегодня',
    'Новости последнего часа',
    'Мне повезёт'
];

export function SearchWidget() {
    const [text, setText] = useState('');
    const [active, setActive] = useState(false);

    const containerRef = useRef();
    const inputRef = useRef();

    const handleBlur = (e) => {
        console.log(e.relatedTarget);
        if (!containerRef.current.contains(e.relatedTarget)) {
            setActive(false);
        }
    }

    const clearText = () => {
        setText('');
        inputRef.current.focus();
    }

    return (<Container role='form' ref={containerRef}
        className={active && 'active'}
        tabIndex='0'
        onKeyDown={() => setActive(true)}
        onClick={() =>  setActive(true)}
        onFocus={() => inputRef.current?.focus()}
        onBlur={handleBlur}>
            <SearchBlock>
                <Icon>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
                </Icon>
                <Input ref={inputRef} value={text} autoFocus
                    onChange={e => setText(e.target.value)}
                />
                <Button role='button' $active={!!text} onClick={clearText}>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                </Button>
            </SearchBlock>
            <div hidden={!active}>
                <Divider/>
                <ul>
                    {
                        Topics.map((topic) => (<li>{topic}</li>))
                    }
                </ul>
            </div>
    </Container>);
}

const mobileScreen = '(max-width: 767px)';
const defaultBorder = '1px solid #dfe1e5';

const Container = styled.div`
    display: flex;
    flex-flow: column;

    width: 500px;
    @media ${mobileScreen} {
        width: 80%;
    }

    padding: 0 1.25%;

    border: ${ defaultBorder };
    box-shadow: none;
    border-radius: 24px;

    &.active,
    &:hover {
        box-shadow: 0 1px 6px rgba(32,33,36,.28);
        border-color: rgba(223,225,229,0);
    }
`;

const SearchBlock = styled.div`
    display: flex;
    flex: 1;
    flex-flow: row nowrap;
    align-items: center;
    gap: 5px;
`;

const iconSize = '18px';

const Icon = styled.div`
    height: ${ iconSize };
    width: ${ iconSize };
    fill: #9aa0a6;
`;

const buttonSize = '20px';
const Button = styled.div`
    height: ${ buttonSize };
    width: ${ buttonSize };
    visibility: ${ (props) => props.$active ? 'visible' : 'hidden' };
    cursor: pointer;
    fill: #70757a;
`;

const Input = styled.input`
    font-family: arial,sans-serif;
    font-size: 14px;

    width: 100%;
    height: 38px;
    resize: none;
    padding-bottom: 4px;

    background-color: transparent;
    border: none;
    &:focus {
        outline: none;
    };
`;

const Divider = styled.div`
    border-top: ${ defaultBorder };
    margin: 0;
`;