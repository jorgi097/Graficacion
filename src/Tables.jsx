import styled from "styled-components";

const StyledTablesContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
    flex-basis: 380px;
    flex-grow: 1;
`;

const Tables = ({children}) => {
 return (
     <StyledTablesContainer>
         {children}
     </StyledTablesContainer>
 );
}

export default Tables;