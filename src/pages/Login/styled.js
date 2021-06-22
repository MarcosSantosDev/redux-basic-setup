import styled, { keyframes, css } from 'styled-components';

const gradient = keyframes`
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(-360deg);
  }
`;

const animation = css`
  background-color: #3D9FE7;
  
  && {
    background: linear-gradient(to right, #EAF2F8, #3D9FE7);
    background-size: 200%;
    background-clip: text;
    animation: ${gradient} 20s ease-in-out infinite;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  width: 100vw;
  height: 100vh;
`;

export const SideBar = styled.div`
  grid-column: 1 / 2;

  display: flex;
  justify-content: center;
  align-items: center;
  ${animation}

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const SideBarTitle = styled.h1`
  color: #3D9FE7cc;
  font-size: 60px;
  text-transform: uppercase;
`;

export const WrapperForm = styled.div`
  grid-column: 2 / 3;
  background-color: #FFF;
  max-width: 100%;
  width: 400px;
  height: auto;
  margin: 0 auto;
  align-self: center;

  @media only screen and (max-width: 1024px) {
    grid-column: 1 / 3;
  }
`;

export const FormTitle = styled.h1`
  color: #3D9FE7cc;
  text-transform: uppercase;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  max-width: 400px;
  width: 100%;
  height: 20px;
  margin-top: 6px;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  margin: 5px 0px;
  padding: 0 14px;
  border: ${(props) => `1px solid ${props.error ? '#FF5843' : '#3D9FE7cc'}`};
  border-radius: 20px;
  outline: none;
`;

export const WrapperField = styled.div`
  position: relative;
  max-height: 84px;
  width: 100%;
  padding: 0 10px;
`;

export const AlertError = styled.p`
  opacity: ${({ showAlert }) => showAlert ? '1' : '0'};
  width: 100%;
  min-height: 16px;
  font-size: 14px;
  margin: 0px;
  text-align: ${({ textAlignEnd }) => textAlignEnd ? 'end' : 'start'};
  color: #FF5843;
  transition: opacity 600ms;
`;

export const Code = styled.div`
  padding: 10px;
  width: 100%;
  max-height: 100%;
  overflow: auto;
`;
