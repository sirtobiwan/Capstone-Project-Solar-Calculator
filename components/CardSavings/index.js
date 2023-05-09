import styled from "styled-components";
import Modal from "../Modal";
import ElectricityCosts from "../ElectricityCosts";


const StyledCard = styled.article`
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 2rem auto;
  max-width: 800px;
  overflow: hidden;
  position: relative;
  padding: 1rem
`;

const StyledContent = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-basis: 50%;
  padding: 1.5rem;
  align-items: center; 
  justify-content: center; 
  text-align: center;
`;

const StyledLabel = styled.label`
  color: #666666;
  font-size: 1rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const StyledData = styled.p`
  font-size: 2rem;
  font-weight: bold;
  padding-top: 0.5rem;
  position: relative;
`;


  //hover on/off for mobile/desktop




export default function CardRadiation() {


  
  return (
    <StyledCard>
      <StyledContent>
        <StyledLabel htmlFor="electricityCosts">Enter your ElectricityCosts:</StyledLabel>
        <StyledData><ElectricityCosts/></StyledData>
      </StyledContent>
      <StyledContent>
        <StyledLabel htmlFor="test">Annual Radiation per Solar Panel</StyledLabel>
        <StyledData>test</StyledData>
      </StyledContent>
      <StyledContent>
        <StyledLabel htmlFor="savings">Savings</StyledLabel>
        <StyledData>Test</StyledData>
      </StyledContent>
    </StyledCard>
  );
}
