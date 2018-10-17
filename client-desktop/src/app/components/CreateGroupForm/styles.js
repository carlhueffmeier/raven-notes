import styled from 'react-emotion';

const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.text};
`;

const InputContainer = styled('div')`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const Input = styled('input')`
  width: 80%;
  flex-direction: row;
  margin: 0px 15px;
  display: flex;
  flex-direction: row;
  background-color: transparent;
  color: ${props => props.theme.colors.text};
  border: none;
  border-bottom: 1.2px solid ${props => props.theme.colors.primary};
  font-size: 2rem;
  padding: 5px;
  :focus {
    outline: none;
  }
`;

const SubmitButton = styled('button')`
  border: none;
  text-transform: uppercase;
  padding: 20px;
  font-weight: 800;
  font-size: 0.8em;
  cursor: pointer;
  color: ${props => props.theme.colors.plight};
  border-radius: 100px;
  margin: 20px;
  background-color: ${props => props.theme.colors.primary};
  :focus {
    outline: none;
  }
  :disabled {
    background: ${props => props.theme.colors.pdark};
  }
`;

export { StyledForm, SubmitButton, Input, InputContainer };
