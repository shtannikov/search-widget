import styled from 'styled-components';
import { Row } from './Row';
import { SearchIcon } from './SearchIcon';
import { BORDER } from './Container';

export function ResultBlock({ items }) {
    if (items.length < 1)
        return null;

    return (<>
        <Divider/>
        <List >
            {
                items.map((topic) => (
                    <Item onClick={() => console.log('click')}>
                        <Row>
                            <SearchIcon />
                            <div style={{ paddingBottom: '4px' }}>
                                {topic.toLowerCase()}
                            </div>
                        </Row>
                    </Item>))
            }
        </List>
    </>);
};

const Divider = styled(Row)`
    border-top: ${ BORDER };
    padding-bottom: 4px;
`;

const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const Item = styled.li`
    cursor: default;
    padding: 5px 0;
    &:hover {
        border-radius: 15px;
        background: #f8f9fa;
    }
`;