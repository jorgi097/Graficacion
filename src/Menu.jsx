import styled from 'styled-components';

const MenuStyled = styled.div`
    display: block;
    min-width: 350px;
    max-width: 350px;
    height: 100%;
    min-height: 100vh;
    background-color: #242324;
    color: ghostwhite;
    padding: 30px;
`;

// Estilos para el contenedor div
const RadioContainer = styled.div`
    margin: 10px 0;
`;

// Estilos para el input de tipo radio
const RadioInput = styled.input`
    margin: 0 10px 0 0;
`;

// Estilos para el label
const RadioLabel = styled.label``;

// Componente principal que combina los estilos
const RadioButton = ({ id, name, label }) => {
    return (
        <RadioContainer>
            <RadioInput type='radio' id={id} name={name} />
            <RadioLabel htmlFor={id}>{label}</RadioLabel>
        </RadioContainer>
    );
};

const algorithms = [
    { id: 'l-dda', name: 'algorithm', label: 'LINEA DDA' },
    { id: 'l-bsh', name: 'algorithm', label: 'LINEA BRESSENHAM' },
    { id: 'c-dda', name: 'algorithm', label: 'CIRCULO DDA' },
    { id: 'c-pm', name: 'algorithm', label: 'CIRCULO PUNTO MEDIO' },
    // { id: 'e-pm', name: 'algorithm', label: 'ELIPSE PUNTO MEDIO' },
    // { id: 'par', name: 'algorithm', label: 'PARABOLA' },
    // { id: 'pol', name: 'algorithm', label: 'POLIGONO REGULAR' },
];

const Menu = ({ options, setOptions }) => {
    const handleXLengthChange = e => {
        setOptions({ ...options, xLength: parseInt(e.target.value) });
    };

    const handleYLengthChange = e => {
        setOptions({ ...options, yLength: parseInt(e.target.value) });
    };

    return (
        <MenuStyled>
            <h1>ALGORITMOS DE GRAFICACION</h1>
            {/* <div style={{ margin: '30px 0' }}>
                <label htmlFor='xLength'>X Length:</label>
                <input
                    style={{
                        margin: '0 0 0 15px',
                        width: '100px',
                        borderRadius: '5px',
                        height: '30px',
                    }}
                    type='number'
                    id='xLength'
                    name='xLength'
                    min='1'
                    max='100'
                    value={options.xLength}
                    onChange={handleXLengthChange}
                />
            </div>
            <div className='div'>
                <label htmlFor='yLength'>Y Length:</label>
                <input
                    style={{
                        margin: '0 0 0 15px',
                        width: '100px',
                        borderRadius: '5px',
                        height: '30px',
                    }}
                    type='number'
                    id='yLength'
                    name='yLength'
                    min='1'
                    max='100'
                    value={options.yLength}
                    onChange={handleYLengthChange}
                />
            </div> */}

            <div
                style={{
                    margin: '30px 0',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                {algorithms.map(algorithm => (
                    <RadioButton
                        id={algorithm.id}
                        name={algorithm.name}
                        label={algorithm.label}
                    />
                ))}
            </div>
        </MenuStyled>
    );
};

export default Menu;
