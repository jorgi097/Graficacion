import styled from 'styled-components';

const Square = styled.div`
    min-width: 20px;
    min-height: 20px;
    background-color: ${props =>
        props.backgroundColor ? props.backgroundColor : 'white'};
    outline: 1px solid black;
    color: white;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    margin: ${props => (props.margin ? props.margin : '0 .5px')};

`;

const Block = ({ backgroundColor, number, color, margin }) => {
    return (
        <Square backgroundColor={backgroundColor} color={color} margin={margin}>
            {number}
        </Square>
    );
};

export default Block;
