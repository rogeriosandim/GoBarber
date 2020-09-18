import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber Logo" />
      <form>
        <h1>Logon Here</h1>
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Password"
        />
        <Button type="submit">Sign In</Button>
        <a href="forgot">Forgot your password?</a>
      </form>

      <a href="login">
        <FiLogIn />
        Create your account
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
