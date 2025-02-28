import styled from 'styled-components';

const StyledRow = styled.div`
    height: fit-content;
    margin: 0.5px 0;
    display: flex;
`;

const Row = ({ children }) => {
    return <StyledRow>{children}</StyledRow>;
};

export default Row;
