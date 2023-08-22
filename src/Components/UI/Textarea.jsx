import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const StyledTextarea = styled.textarea`
  border-radius: 10px;
  background: #FFF;
  box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.10);
  height: 130px;
  padding: 10px;
  width: 100%;
  resize: none;

  &::placeholder {
    color: #A5A5A5;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Textarea = ({ labelComponent: Label, ...props }) => {
  return (
    <Root>
      {Label && <Label />}
      <StyledTextarea {...props} />
    </Root>
  );
}

export default Textarea;
