import React, { useState } from 'react';
import styled from 'styled-components'
import { useEffect } from 'react';

const StyledColorPicker = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0 0 0;
    input{
        width: 30px;
        height: 30px;
        border-radius: 5px;
        background-color: #e0e0e0
    }
    `;


function ColorPicker({options, setOptions}) {
    const handleColorChange = event => {
        setOptions({...options, color: event.target.value});
    };

    useEffect(() => {
        console.log(options.color);
    }, [options.color]);

    return (
        <StyledColorPicker>
            <label>Color de Gráfico: </label>
            <input type='color' value={options.color} onChange={handleColorChange} />
        </StyledColorPicker>
    );
}

export default ColorPicker;
