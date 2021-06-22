import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import useYupValidationResolver from '../../hooks/yupValidationResolver';

import { useAuth } from '../../redux/auth';

import Button from '../../components/Button';

import { schemeLogin } from '../../utils/validateSchemes';

import {
  Container,
  SideBar,
  SideBarTitle,
  WrapperForm,
  FormTitle,
  Form,
  WrapperField,
  Label,
  Input,
  AlertError,
  Code,
} from './styled';

export default function Login() {
  const { authentication, auth, logged } = useAuth();

  const {
    handleSubmit,
    errors,
    register,
  } = useForm({ resolver: useYupValidationResolver(schemeLogin) });

  const onSubmit = (data) => {
    authentication(data);
  };

  useEffect(() => {
    if (auth.data && auth.data.length) {
      logged(auth.data)
    }
  }, [auth.data, logged])

  return (
    <Container>
      <SideBar>
        <SideBarTitle>
          Redux basic
          <br />
          setup
        </SideBarTitle>
      </SideBar>

      <WrapperForm>
        <FormTitle>Sing in</FormTitle>
        <WrapperField>
          <AlertError showAlert={Boolean(auth.error)}>{auth.error}</AlertError>
        </WrapperField>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <WrapperField>
            <Label>Email</Label>
            <Input
              name="email"
              type="text"
              placeholder="name@example.com"
              error={Boolean(auth.error || errors?.email)}
              ref={register}
            />
            <AlertError textAlignEnd showAlert={Boolean(errors?.email)}>{errors?.email?.message}</AlertError>
          </WrapperField>
          <WrapperField>
            <Label>Password</Label>
            <Input
              name="password"
              type="password"
              placeholder="*********"
              error={Boolean(auth.error || errors?.password)}
              ref={register}
            />
            <AlertError textAlignEnd showAlert={Boolean(errors?.password)}>{errors?.password?.message}</AlertError>
          </WrapperField>
          <WrapperField>
            <Button type="submit">Sing in</Button>
          </WrapperField>
        </Form>
        <Code>
          <pre>
            {JSON.stringify(auth, null, 4)}
          </pre>
        </Code>
      </WrapperForm>
    </Container>
  );
}
