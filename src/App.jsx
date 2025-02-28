import './App.css';
import Block from './Block';
import Row from './Row';
import styled from 'styled-components';

const Plane = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: ${props => props.width + 'px'};
    height: fit-content;
`;

function App() {
    const options = {
        xLength: 30,
        yLength: 30,
    };

    return (
        <div className='matrixContainer'>
            <div>
                {Array.from({ length: options.yLength + 1 }, (_, rowIndex) => (
                    <Block
                        key={rowIndex}
                        number={options.yLength - rowIndex}
                        backgroundColor={'blue'}
                        margin={rowIndex === 0 ? '.5px 0 0 0' : '1px 0'}
                    />
                ))}
            </div>
            <Plane width={(options.xLength + 1) * 16 + 1}>
                {Array.from({ length: options.yLength + 1 }, (_, rowIndex) => (
                    <Row key={rowIndex}>
                        {Array.from(
                            { length: options.xLength + 1 },
                            (_, colIndex) => (
                                <Block key={`${rowIndex}-${colIndex}`} />
                            )
                        )}
                    </Row>
                ))}
                <Row>
                    {Array.from(
                        { length: options.xLength + 1 },
                        (_, colIndex) => (
                            <Block
                                key={colIndex}
                                number={colIndex}
                                backgroundColor={'blue'}
                            />
                        )
                    )}
                </Row>
            </Plane>
        </div>
    );
}

export default App;
