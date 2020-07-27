import styled, { keyframes } from 'styled-components';

const gradient = keyframes`
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(-360deg);
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  width: 100vw;
  height: 100vh;
  background-color: #3D9FE7;

  && {
    background: linear-gradient(to right, #EAF2F8, #3D9FE7);
    background-size: 200%;
    background-clip: text;
    animation: ${gradient} 20s ease infinite;
  }
`;

export const ContentDescription = styled.div`
  grid-column: 1 / 2;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentTitle = styled.h1`
  font-size: 60px;
  color: #3D9FE7cc;
  text-transform: uppercase;
`;

export const Wrapper = styled.div`
  grid-column: 2 / 3;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #FFF;
  width: 100%;
  height: 100%;
`;

export const WrapperTitle = styled.h1`
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

  text-align: ${({ end }) => end && 'end'};
`;

export const Input = styled.input`
  max-width: 400px;
  width: 100%;
  height: 40px;
  margin: 5px 0px;
  padding: 0 14px;
  border: 1px solid #3D9FE7cc;
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
