import React from 'react';
import { useForm } from 'react-hook-form';

import { useAuth } from '../../redux/auth';

import {
  Container,
  ContentDescription,
  ContentTitle,
  ContentForm,
  ContentFormTitle,
  Form,
  Content,
  Label,
  Input,
  Button,
  AlertError,
  Code,
} from './styled';

export default function Login() {
  const { authentication, auth } = useAuth();

  const {
    register,
    handleSubmit,
    errors,
  } = useForm();

  const onSubmit = (data) => {
    authentication(data);
  };

  return (
    <Container>
      <ContentDescription>
        <ContentTitle>
          Redux basic
          <br />
          setup
        </ContentTitle>
      </ContentDescription>
      <ContentForm>
        <ContentFormTitle>Sing in</ContentFormTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Content>
            <Label>Email</Label>
            <Input
              name="email"
              type="email"
              placeholder="name@example.com"
              error={errors?.email}
              ref={register({ required: true })}
            />
            {errors?.email && <AlertError>{ errors?.email?.type === 'manual' ? errors.email.message : 'This field is required!'}</AlertError>}
          </Content>
          <Content>
            <Label>Password</Label>
            <Input
              name="password"
              type="password"
              placeholder="*********"
              error={errors?.password}
              ref={register({ required: true })}
            />
            {errors?.password && <AlertError>{ errors?.email?.type === 'manual' ? errors.email.message : 'This field is required!'}</AlertError>}
          </Content>
          <Button type="submit">Sing in</Button>
        </Form>
        <Code>
          <pre>
            {JSON.stringify(auth, null, 4)}
          </pre>
        </Code>
      </ContentForm>
    </Container>
  );
}
