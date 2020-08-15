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
    animation: ${gradient} 20s ease infinite;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  width: 100vw;
  height: 100vh;
`;

export const ContentDescription = styled.div`
  grid-column: 1 / 2;
  
  display: flex;
  justify-content: center;
  align-items: center;
  ${animation}
`;

export const ContentTitle = styled.h1`
  font-size: 60px;
  color: #3D9FE7cc;
  text-transform: uppercase;
`;

export const ContentForm = styled.div`
  grid-column: 2 / 3;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #FFF;
  width: 100%;
  height: 100%;
`;

export const ContentFormTitle = styled.h1`
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
  max-width: 400px;
  width: 100%;
  height: 40px;
  margin: 5px 0px;
  padding: 0 14px;
  border: ${(props) => `1px solid ${props.error ? '#FF5843' : '#3D9FE7cc'}`};
  border-radius: 20px;
  outline: none;
`;

export const Button = styled.button`
  cursor: pointer;
  max-width: 400px;
  width: 100%;
  height: 40px;
  margin: 6px 0px;
  padding: 0px;
  border: 1px solid #3D9FE7cc;
  background-color: #3D9FE7cc;
  color: #FFF;
  border-radius: 20px;
  outline: none;
`;

export const Content = styled.div`
  max-width: 400px;
  width: 100%;
  height: 84px;
`;

export const AlertError = styled.p`
  width: 100%;
  font-size: 14px;
  margin: 0px;
  text-align: end;
  color: #FF5843;
`;

export const Code = styled.div`
  padding: 10px;
  width: 100%;
  max-height: 100%;
  overflow: auto;
`;
