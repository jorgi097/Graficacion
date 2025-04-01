import './App.css';
import Matrix from './Matrix';
import Menu from './Menu';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import FigureTable from './FigureTable';
import Tables from './Tables';
import PTable from './PTable';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0 auto;
    width: 100%;
    height: 100vh;
`;

function App() {
    const initialColor = localStorage.getItem('selectedColor') || '#9E3EC1';

    const [options, setOptions] = useState({
        xLength: 15,
        yLength: 15,
        color: initialColor,
    });

    const [figureData, setFigureData] = useState({ points: [] });

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
            {figureData.octants && figureData.octants.length > 0 ? (
                <Tables>
                    {figureData.octants.map((oct, ind) => (
                        <FigureTable key={ind} data={oct} />
                    ))}
                    {figureData.table && figureData.table.length > 0 ? (
                
                <PTable data={figureData.table} />
            
        ) : null}
                </Tables>
            ) : null}
            
            {figureData.points && figureData.points.length > 0 && !figureData.octants ? (<Tables>
                <FigureTable data={figureData.points} />
                {figureData.table && figureData.table.length > 0 ? (
                    <PTable data={figureData.table} />
                ) : null}
            </Tables>) : null}
            

            <Matrix options={options} figureData={figureData} />
        </Container>
    );
}

export default App;
