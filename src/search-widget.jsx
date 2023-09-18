import { useRef, useState } from 'react';
import styled from 'styled-components';
import { Container } from './components/Container';
import { Row } from './components/Row';
import { SearchIcon } from './components/SearchIcon';
import { ResultBlock } from './components/ResultBlock';

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
        if (!containerRef.current.contains(e.relatedTarget))
            setActive(false);
    }

    const clearText = () => {
        setText('');
        inputRef.current.focus();
    }

    return (<Container ref={containerRef}
        className={active && 'active'}
        tabIndex='0'
        onKeyDown={() => setActive(true)}
        onClick={() =>  setActive(true)}
        onFocus={() => inputRef.current?.focus()}
        onBlur={handleBlur}>
            <Row>
                <SearchIcon />
                <Input ref={inputRef} value={text} autoFocus
                    onChange={e => setText(e.target.value)}
                />
                <Button $active={!!text} onClick={clearText}>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                </Button>
            </Row>
            { active && (<ResultBlock items={Topics} />) }
    </Container>);
}

const buttonSize = '20px';
const Button = styled.div`
    height: ${ buttonSize };
    width: ${ buttonSize };
    visibility: ${ (props) => props.$active ? 'visible' : 'hidden' };
    cursor: pointer;
    fill: #70757a;
`;

const Input = styled.input`
    flex: 1;
    height: 30px;
    padding-bottom: 4px;

    background-color: transparent;
    border: none;
    &:focus {
        outline: none;
    };
`;