import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber Logo" />
      <form>
        <h1>Logon Here</h1>
        <input placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
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
