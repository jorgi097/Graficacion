import styled from 'styled-components';
import { useState } from 'react';
import lineadda from './algorithms/lineadda';
import lineabressenham from './algorithms/lineabressenham';
import circulodda from './algorithms/circulodda';
import circulobressenham from './algorithms/circulobressenham';
import ColorPicker from './ColorPicker';

// Estilos---------------------------------------------------------------
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

const OptionsContainer = styled.div`
    margin-top: 20px;
    padding: 15px;
    border: 1px solid #444;
    border-radius: 5px;
    background-color: #2c2c2c;
`;

const RadioContainer = styled.div`
    margin: 10px 0;
`;

const RadioInput = styled.input`
    margin: 0 10px 0 0;
`;

const RadioLabel = styled.label``;

const InputGroup = styled.div`
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const InputLabel = styled.label`
    min-width: 100px;
`;

const InputField = styled.input`
    margin-left: 10px;
    width: 100px;
    border-radius: 5px;
    height: 30px;
    background-color: #333;
    color: white;
    border: 1px solid #555;
    padding: 0 10px;
`;

const InputButton = styled.button`
    display: block;
    margin: 10px 0 0 0;
    padding: 10px;
    border: 1px solid #333;
    border-radius: 5px;
    background-color: #f0f0f0;
    color: #333;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: #cacaca;
    }
`;

const RadioButton = ({ id, name, label, checked, onChange }) => {
    return (
        <RadioContainer>
            <RadioInput
                type='radio'
                id={id}
                name={name}
                checked={checked === id}
                onChange={() => onChange(id)}
            />
            <RadioLabel htmlFor={id}>{label}</RadioLabel>
        </RadioContainer>
    );
};

// Componente para parametros de algoritmos
const InputGroupComponent = ({ id, label, value, onChange }) => {
    return (
        <InputGroup>
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <InputField
                type='number'
                id={id}
                value={value}
                onChange={e => onChange(id, e.target.value)}
            />
        </InputGroup>
    );
};

// Componente Menu-------------------------------------------------------

const Menu = ({ setPoints, options, setOptions }) => {
    //Recibe la función setPoints como prop

    const [selectedAlgorithm, setSelectedAlgorithm] = useState(null);

    const [algorithmParams, setAlgorithmParams] = useState({
        // Parámetros para líneas
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        // Parámetros para círculos
        xCenter: 0,
        yCenter: 0,
        radius: 0,
    });

    // Lista de algoritmos disponibles
    const algorithms = [
        { id: 'l-dda', name: 'algorithm', label: 'LINEA DDA' },
        { id: 'l-bsh', name: 'algorithm', label: 'LINEA BRESSENHAM' },
        { id: 'c-dda', name: 'algorithm', label: 'CIRCULO DDA' },
        { id: 'c-pm', name: 'algorithm', label: 'CIRCULO PUNTO MEDIO' },
        // { id: 'e-pm', name: 'algorithm', label: 'ELIPSE PUNTO MEDIO' },
        // { id: 'par', name: 'algorithm', label: 'PARABOLA' },
        // { id: 'pol', name: 'algorithm', label: 'POLIGONO REGULAR' },
    ];

    // Actualiza el algoritmo seleccionado
    const handleAlgorithmChange = id => {
        setSelectedAlgorithm(id);
    };

    // Actualiza los parámetros del algoritmo seleccionado
    const handleParamChange = (param, value) => {
        setAlgorithmParams({ ...algorithmParams, [param]: parseInt(value) });
    };

    const executeAlgorithm = () => {
        let points = [];
        switch (selectedAlgorithm) {
            case 'l-dda':
                points = lineadda(
                    algorithmParams.x1,
                    algorithmParams.y1,
                    algorithmParams.x2,
                    algorithmParams.y2
                );
                break;
            case 'l-bsh':
                points = lineabressenham(
                    algorithmParams.x1,
                    algorithmParams.y1,
                    algorithmParams.x2,
                    algorithmParams.y2
                );
                break;
            case 'c-dda':
                points = circulodda(
                    algorithmParams.radius,
                    algorithmParams.xCenter,
                    algorithmParams.yCenter,
                );
                break;
            case 'c-pm':
                points = circulobressenham(
                    algorithmParams.xCenter,
                    algorithmParams.yCenter,
                    algorithmParams.radius
                );
                break;
            default:
                console.log('Algoritmo no implementado');
                return;
        }
        setPoints(points); // Actualiza el estado en App.jsx con los puntos

        // Ajusta el tamaño de la matriz según los puntos generados
        const newMatrixSize =
            Math.max(
                ...points.flat()
            ) + 5;
        setOptions({
            ...options,
            xLength: newMatrixSize,
            yLength: newMatrixSize,
        });
    };

    // Renderiza opciones específicas según el algoritmo seleccionado
    const renderAlgorithmOptions = () => {
        if (!selectedAlgorithm) return null;

        if (selectedAlgorithm.startsWith('l-')) {
            // Opciones para algoritmos de líneas
            return (
                <OptionsContainer>
                    <h3>Configuración de línea</h3>
                    <InputGroupComponent
                        id='x1'
                        label='Punto inicial X:'
                        value={algorithmParams.x1}
                        onChange={handleParamChange}
                    />
                    <InputGroupComponent
                        id='y1'
                        label='Punto inicial Y:'
                        value={algorithmParams.y1}
                        onChange={handleParamChange}
                    />
                    <InputGroupComponent
                        id='x2'
                        label='Punto final X:'
                        value={algorithmParams.x2}
                        onChange={handleParamChange}
                    />
                    <InputGroupComponent
                        id='y2'
                        label='Punto final Y:'
                        value={algorithmParams.y2}
                        onChange={handleParamChange}
                    />
                    <ColorPicker options={options} setOptions={setOptions} />
                    <InputButton onClick={executeAlgorithm}>
                        Ejecutar Algoritmo
                    </InputButton>
                </OptionsContainer>
            );
        } else if (selectedAlgorithm.startsWith('c-')) {
            // Opciones para algoritmos de círculos
            return (
                <OptionsContainer>
                    <h3>Configuración de círculo</h3>
                    <InputGroupComponent
                        id='xCenter'
                        label='Centro X:'
                        value={algorithmParams.xCenter}
                        onChange={handleParamChange}
                    />
                    <InputGroupComponent
                        id='yCenter'
                        label='Centro Y:'
                        value={algorithmParams.yCenter}
                        onChange={handleParamChange}
                    />
                    <InputGroupComponent
                        id='radius'
                        label='Radio:'
                        value={algorithmParams.radius}
                        onChange={handleParamChange}
                    />
                    <ColorPicker options={options} setOptions={setOptions} />

                    <InputButton onClick={executeAlgorithm}>
                        Ejecutar Algoritmo
                    </InputButton>
                </OptionsContainer>
            );
        }
    };

    return (
        <MenuStyled>
            <h1>ALGORITMOS DE GRAFICACION</h1>

            <OptionsContainer>
                <div
                    style={{
                        margin: '5px 0',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                    {algorithms.map(algorithm => (
                        <RadioButton
                            key={algorithm.id}
                            id={algorithm.id}
                            name={algorithm.name}
                            label={algorithm.label}
                            checked={selectedAlgorithm}
                            onChange={handleAlgorithmChange}
                        />
                    ))}
                </div>
            </OptionsContainer>

            {renderAlgorithmOptions()}
        </MenuStyled>
    );
};

export default Menu;
