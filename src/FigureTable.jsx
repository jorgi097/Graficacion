import styled from 'styled-components';

const StyledFigureTable = styled.table`
    margin: 20px;
    width: fit-content;
    border: 1px solid #333;
    border-radius: 5px;
    background-color: #2c2c2c;
    color: #cacaca;
    text-align: center;
    border-collapse: collapse;
    height: fit-content;
    align-self: center;
`;

const StyledTableHeader = styled.th`
    background-color: #444;
    color: white;
    padding: 8px;
    border: 1px solid #333;
`;

const StyledTableCell = styled.td`
    padding: 8px;
    border: 1px solid #333;
`;

const StyledTableRow = styled.tr`


    &:nth-child(even) {
        background-color: #333;
    }
`;

const FigureTable = ({ figureData }) => {

    return (
        <StyledFigureTable>
            <thead>
                <tr>
                    <StyledTableHeader>X</StyledTableHeader>
                    <StyledTableHeader>Y</StyledTableHeader>
                </tr>
            </thead>
            <tbody>
                {figureData.points.map((point, index) => (
                    <StyledTableRow key={index}>
                        <StyledTableCell>{point[0]}</StyledTableCell>
                        <StyledTableCell>{point[1]}</StyledTableCell>
                    </StyledTableRow>
                ))}
            </tbody>
        </StyledFigureTable>
    );
};

export default FigureTable;