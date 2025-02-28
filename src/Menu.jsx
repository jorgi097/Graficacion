import styled from 'styled-components';
import { useState, useCallback } from 'react';

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
            <div style={{ margin: '30px 0' }}>
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
            </div>
            <div
                style={{
                    margin: '30px 0',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                <div style={{ margin: '10px 0' }}>
                    <input
                        style={{ margin: '0 10px 0 0' }}
                        type='radio'
                        id='l-dda'
                        name='algorithm'
                    />
                    <label htmlFor='l-dda'>LINEA DDA</label>
                </div>
                <div style={{ margin: '10px 0' }}>
                    <input
                        style={{ margin: '0 10px 0 0' }}
                        type='radio'
                        id='l-bsh'
                        name='algorithm'
                    />
                    <label htmlFor='bsh'>LINEA BRESSENHAM</label>
                </div>
                <div style={{ margin: '10px 0' }}>
                    <input
                        style={{ margin: '0 10px 0 0' }}
                        type='radio'
                        id='c-dda'
                        name='algorithm'
                    />
                    <label htmlFor='c-dda'>CIRCULO DDA</label>
                </div>
                <div style={{ margin: '10px 0' }}>
                    <input
                        style={{ margin: '0 10px 0 0' }}
                        type='radio'
                        id='c-pm'
                        name='algorithm'
                    />
                    <label htmlFor='c-pm'>CIRCULO PUNTO MEDIO</label>
                </div>
                <div style={{ margin: '10px 0' }}>
                    <input
                        style={{ margin: '0 10px 0 0' }}
                        type='radio'
                        id='e-pm'
                        name='algorithm'
                    />
                    <label htmlFor='e-pm'>ELIPSE PUNTO MEDIO</label>
                </div>
                <div style={{ margin: '10px 0' }}>
                    <input
                        style={{ margin: '0 10px 0 0' }}
                        type='radio'
                        id='par'
                        name='algorithm'
                    />
                    <label htmlFor='par'>PARABOLA</label>
                </div>
                <div style={{ margin: '10px 0' }}>
                    <input
                        style={{ margin: '0 10px 0 0' }}
                        type='radio'
                        id='pol'
                        name='algorithm'
                    />
                    <label htmlFor='pol'>POLIGONO REGULAR</label>
                </div>
            </div>
        </MenuStyled>
    );
};

export default Menu;
