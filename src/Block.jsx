import styled from 'styled-components';

const Square = styled.div`
    width: 15px;
    height: 15px;
    background-color: ${props =>
        props.backgroundColor ? props.backgroundColor : 'blue'};
    margin: 1px;
    color: ${props => props.color};
    box-sizing: border-box;
    display: flex;          /* Add flexbox to center the number */
    justify-content: center; /* Horizontally center */
    align-items: center;     /* Vertically center */
    font-size: 10px;        /* Adjust font size as needed */
`;

const Block = ({ backgroundColor, number, color}) => {
    return (
        <Square backgroundColor={backgroundColor} color={color}>
            {number}
        </Square>
    );
};

export default Block;
