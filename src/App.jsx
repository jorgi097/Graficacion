import './App.css';
import Block from './Block';
import styled from 'styled-components';

const Plane = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: ${16 * 25 + 1}px;
    height: ${16 * 25 + 1}px;
    justify-content: center;
`;

function App() {
    const options = {
        backgroundColor: 'red',
        color: 'black',
        xLength: 25,
        yLength: 25,
    };

    return (
        <Plane>
            {Array.from({ length: options.xLength }, (row, rowIndex) =>
                Array.from({ length: options.yLength }, (col, colIndex) => (
                    <Block
                        key={`${rowIndex}-${colIndex}`}
                        color={options.color}
                        backgroundColor={options.backgroundColor}
                        number={rowIndex * options.yLength + colIndex}
                    />
                ))
            )}
        </Plane>
    );
}

export default App;
