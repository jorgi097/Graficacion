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

const StyledMatrix = styled.div`
    display: flex;
    flex-direction: row;
    height: fit-content;
    width: fit-content;
    margin: auto;
    padding: 20px;
`;

function Matrix({ options, points }) { //Recibe los puntos y el largo de la matriz
    return (
        <StyledMatrix>
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
            <Plane width={(options.xLength + 1) * 21}>
                {Array.from({ length: options.yLength + 1 }, (_, rowIndex) => (
                    <Row key={rowIndex}>
                        {Array.from(
                            { length: options.xLength + 1 },
                            (_, colIndex) => {
                                const isPoint = points.some(point => point[0] === colIndex && point[1] === (options.yLength - rowIndex));
                                return (
                                    <Block
                                        key={`${rowIndex}-${colIndex}`}
                                        backgroundColor={isPoint ? options.color : null} // Pinta el bloque si es un punto
                                    />
                                );
                            }
                        )}
                    </Row>
                ))}
                <Row> {/* Crea la fila de numeros de abajo */}
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
        </StyledMatrix>
    );
}

export default Matrix;