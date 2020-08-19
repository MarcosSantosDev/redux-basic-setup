import React from 'react';
import { useForm } from 'react-hook-form';
import useYupValidationResolver from '../../hooks/yupValidationResolver';

import { useAuth } from '../../redux/auth';

import { schemeLogin } from '../../utils/validateSchemes';

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
    handleSubmit,
    errors,
    register,
  } = useForm({ resolver: useYupValidationResolver(schemeLogin) });

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
              type="text"
              placeholder="name@example.com"
              error={errors?.email}
              ref={register}
            />
            {
              errors?.email
              && <AlertError>{errors?.email && errors.email.message}</AlertError>
            }
          </Content>
          <Content>
            <Label>Password</Label>
            <Input
              name="password"
              type="password"
              placeholder="*********"
              error={errors?.password}
              ref={register}
            />
            {
              errors?.password
              && <AlertError>{errors?.password && errors.password.message}</AlertError>
            }
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
