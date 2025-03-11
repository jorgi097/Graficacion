import styled from 'styled-components';

const TableContainer = styled.div`
    margin: 20px;
    height: 100%;
    max-height: calc(100vh - 13vh);
    min-width: 150px;
    max-width: 200px;
    align-self: flex-start;
    border: 1px solid #333;
    border-radius: 5px;
    background-color: #2c2c2c;
    overflow-y: auto;
`;

const StyledFigureTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    color: #cacaca;
    text-align: center;
    table-layout: fixed; /* Importante para mantener anchos de columna consistentes */
    font-size: 14px;
`;

const StyledTableHeader = styled.th`
    background-color: #444;
    color: white;
    padding: 5px;
    border: 1px solid #333;
    position: sticky;
    top: 0; /* Mantiene el encabezado fijo durante el scroll */
    z-index: 10;
    width: 50%; /* Asegura que ambas columnas tienen el mismo ancho */
`;

const StyledTableCell = styled.td`
    padding: 5px;
    border: 1px solid #333;
    width: 50%; /* Asegura que ambas columnas tienen el mismo ancho */
`;

const StyledTableRow = styled.tr`
    &:nth-child(even) {
        background-color: #333;
    }
`;

const FigureTable = ({ figureData }) => {
    if (!figureData.points.length) return;
    return (
        <TableContainer>
            <StyledFigureTable>
                <thead>
                    <tr>
                        {figureData.table ? <StyledTableHeader>P</StyledTableHeader> : null}
                        <StyledTableHeader>X</StyledTableHeader>
                        <StyledTableHeader>Y</StyledTableHeader>
                    </tr>
                </thead>
                <tbody>
                    {figureData.points.map((point, index) => (
                        <StyledTableRow key={index}>
                            {figureData.table ? <StyledTableCell>{figureData.table[index]}</StyledTableCell> : null}
                            <StyledTableCell>{point[0]}</StyledTableCell>
                            <StyledTableCell>{point[1]}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </tbody>
            </StyledFigureTable>
        </TableContainer>
    );
};

export default FigureTable;
