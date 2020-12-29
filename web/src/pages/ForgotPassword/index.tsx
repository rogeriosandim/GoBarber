import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail is required')
            .email('Invalid Email'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }
        addToast({
          type: 'error',
          title: 'Error to recover password',
          description:
            'Error on recover password, check your credentials and try again',
        });
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber Logo" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Recover Password</h1>
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Button type="submit">Recover</Button>
          </Form>

          <Link to="/">
            <FiLogIn />
            Back to Login
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default ForgotPassword;
