import './App.css';
import Matrix from './Matrix';
import Menu from './Menu';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import FigureTable from './FigureTable';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
`;

function App() {
    const initialColor = localStorage.getItem('selectedColor') || '#9E3EC1';

    // Estados para almacenar los parametros de la figura
    const [options, setOptions] = useState({
        xLength: 15,
        yLength: 15,
        color: initialColor,
    });

    const [figureData, setFigureData] = useState({ points: [] }); // Estado para almacenar los puntos

    useEffect(() => {
        localStorage.setItem('selectedColor', options.color);
    }, [options.color]);

    return (
        <Container>
            <Menu
                setFigureData={setFigureData}
                options={options}
                setOptions={setOptions}
                style={{ height: '100%' }}
            />
            <FigureTable figureData={figureData} />
            <Matrix options={options} figureData={figureData} />
        </Container>
    );
}

export default App;
