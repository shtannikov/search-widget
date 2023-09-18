import { useRef, useState } from 'react';
import styled from 'styled-components';

const Topics = [
    'Погода сегодня',
    'Новости последнего часа',
    'Мне повезёт'
];

export function SearchWidget() {
    const [text, setText] = useState('');
    const [active, setActive] = useState(true);

    const containerRef = useRef();
    const inputRef = useRef();

    const handleBlur = (e) => {
        if (!containerRef.current.contains(e.relatedTarget))
            setActive(true);
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
            <div hidden={ !active || Topics.length < 1 }>
                <Divider/>
                <ResultList >
                    {
                        Topics.map((topic) => (
                            <ResultItem onClick={() => console.log('click')}>
                                <Row>
                                    <SearchIcon />
                                    <div style={{ paddingBottom: '4px' }}>
                                        {topic.toLowerCase()}
                                    </div>
                                </Row>
                            </ResultItem>))
                    }
                </ResultList>
            </div>
    </Container>);
}

const mobileScreen = '(max-width: 767px)';
const defaultBorder = '1px solid #dfe1e5';

const Container = styled.div`
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

    border: ${ defaultBorder };
    box-shadow: none;
    border-radius: 20px;

    &.active,
    &:hover {
        box-shadow: 0 1px 6px rgba(32,33,36,.28);
        border-color: rgba(223,225,229,0);
    }
`;

const Row = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    gap: 5px;
    margin: 0 10px;
`;

const iconSize = '18px';
const Icon = styled.div`
    height: ${ iconSize };
    width: ${ iconSize };
    fill: #9aa0a6;
`;

function SearchIcon() {
    return (<Icon>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
    </Icon>);
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

const Divider = styled(Row)`
    border-top: ${ defaultBorder };
    padding-bottom: 4px;
`;

const ResultList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const ResultItem = styled.li`
    cursor: default;
    padding: 5px 0;
    &:hover {
        border-radius: 15px;
        background: #f8f9fa;
    }
`;