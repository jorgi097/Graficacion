import './App.css';
import Matrix from './Matrix';
import Menu from './Menu';
import styled from 'styled-components';
import { useState } from 'react';

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
    const [options, setOptions] = useState({
        xLength: 15,
        yLength: 15,
    });

    return (
        <Container>
            <Menu options={options} setOptions={setOptions} />
            <Matrix options={options} />
        </Container>
    );
}

export default App;
