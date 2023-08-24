import styled from 'styled-components';
import Focus from '@src/Components/Focus';

const StyledQuestion = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 10px;
  background: #FFFF;
  min-height: 60px;
  max-width: 553px;
`;

const StyledInput = styled.input`
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }
  text-align: center;
  display: flex;
  width: 80px;
  height: 80px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid #000;
  background: #FFF;
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const StyledFocus = styled(Focus)`
  padding: 10px;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
  width: auto;
`;

const QuestionWithInput = ({ question, value, onChange, field }) => {
  return (
    <StyledFocus>
      <StyledQuestion>{question}</StyledQuestion>
      <StyledInput
        type="number"
        value={value}
        onChange={e => onChange(field, e)}
      />
    </StyledFocus>
  );
};

export default QuestionWithInput;
