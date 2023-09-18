import { SearchWidget } from "./search-widget";
import translate from "translate";
import styled from 'styled-components';

translate.engine = 'yandex';
translate.key = 'trnsl.1.1.20230915T061310Z.63215d51d2ea0df6.503729cff78b765092a210ff2d4f5425c6613152';

export function App() {
    return (
        <Container>
            <SearchWidget />
        </Container>
    );
}

const Container = styled.div`
    position: fixed;
    width: 100%;
    top: 25%;
    display: flex;
    justify-content: center;
`;