import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useAuth } from '../../redux/auth';

import {
  Container,
  ContentDescription,
  ContentTitle,
  Wrapper,
  WrapperTitle,
  Form,
  Label,
  Input,
  Button,
} from './styled';

export default function Login() {
  const [message, setMessage] = useState();
  const [errorSingIn, setErrorSingIn] = useState(false);

  const { authentication, auth } = useAuth();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    authentication(data);
  };

  useEffect(() => {
    if (auth.data?.length) {
      setMessage('Logged with success!');
      setErrorSingIn(false);
    } else if (auth.data != null) {
      setMessage('Invalid credentials');
      setErrorSingIn(true);
    }
  }, [auth.data]);

  return (
    <Container>
      <ContentDescription>
        <ContentTitle>
          Redux basic
          <br />
          setup
        </ContentTitle>
      </ContentDescription>
      <Wrapper>
        <WrapperTitle>Sing in</WrapperTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input name="email" type="email" ref={register} />
          <Label>Password</Label>
          <Input name="password" type="password" ref={register} />
          <Label error={errorSingIn} end>{message}</Label>
          <Button type="submit">Sing in</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}
