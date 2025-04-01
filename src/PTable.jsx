import styled from 'styled-components';

const TableContainer = styled.div`
    margin: 0 3px 10px 0;
    height: fit-content;
    min-width: 50px;
    max-width: 120px;
    align-self: flex-start;
    border: 1px solid #333;
    border-radius: 5px;
    background-color: #2c2c2c;
    overflow-y: auto;
`;

const StyledPTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    color: #cacaca;
    text-align: center;
    font-size: 14px;
`;

const StyledTableHeader = styled.th`
    background-color: #444;
    color: white;
    padding: 5px;
    border: 1px solid #333;
    position: sticky;
    top: 0;
    z-index: 10;
`;

const StyledTableCell = styled.td`
    padding: 5px;
    border: 1px solid #333;
`;

const StyledTableRow = styled.tr`
    &:nth-child(even) {
        background-color: #333;
    }
`;

const PTable = ({ data }) => {
    if (!data || data.length === 0) return null;

    return (
        <TableContainer>
            <StyledPTable>
                <thead>
                    <tr>
                        <StyledTableHeader>P</StyledTableHeader>
                    </tr>
                </thead>
                <tbody>
                    {data.map((p, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell>{p}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </tbody>
            </StyledPTable>
        </TableContainer>
    );
};

export default PTable;