import { useEffect, useState } from 'react';
import styled from 'styled-components';

const PlaceholderValue = {
    default: 'Translation',
    inProcess: 'Translating...'
};

export function TranslationWidget({ translate, fromLanguage, toLanguage }) {
    const [ placeholder, setPlaceholder ] = useState(PlaceholderValue.default);
    const [ original, setOriginal ] = useState();
    const [ translation, setTranslation ] = useState();

    const onInput = (e) => {
        setOriginal(e.target.value);
        setPlaceholder(PlaceholderValue.inProcess);
    }

    useEffect(() => {
        const timer = setTimeout(async () => {
            let newTranslation = '';
            if (original){
                newTranslation = await translate(original, { from: fromLanguage, to: toLanguage });
            }
            setTranslation(newTranslation);
            setPlaceholder(PlaceholderValue.default);
        }, 300);
        return () => clearTimeout(timer);
    }, [original]);

    return (<Container>
        <Header>
            <span>{fromLanguage}</span>
            <HeaderDivider>→</HeaderDivider>
            <span>{toLanguage}</span>
        </Header>
        <Body>
            <TextArea spellCheck autoFocus onChange={onInput} />
            <TextArea disabled placeholder={placeholder} value={translation} />
        </Body>
    </Container>);
}

const mobileScreen = '(max-width: 767px)';

const Container = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    margin: 10px;
`;

const Header = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly; 
    font-size: 14px; 
    color: rgb(100, 100, 100);
    margin-bottom: 8px;
`;

const HeaderDivider = styled.span`
    visibility: hidden;
    @media ${mobileScreen} {
        visibility: visible;
    }
`;

const Body = styled.div`
    display: flex;
    flex-flow: row nowrap;
    @media ${mobileScreen} {
        flex-flow: column;
    }
    gap: 8px;
`;

const TextArea = styled.textarea`
    border: 1px solid rgba(0,0,0,.12);
    border-radius: 8px;
    color: rgb(0, 0, 0);
    display: flex;
    flex: 1;
    font-size: 20px;
    min-height: 164px;
    resize: none;
    padding: 10px;
    &:focus {
        outline: none;
    }
`;