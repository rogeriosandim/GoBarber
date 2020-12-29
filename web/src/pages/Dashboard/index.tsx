import React from 'react';

import { FiClock, FiPower } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Welcome,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Booked Appointments</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 29</span>
            <span>Thursday</span>
          </p>

          <NextAppointment>
            <strong>Next Appointments</strong>
            <div>
              <img src={user.avatar_url} alt={user.name} />

              <strong>{user.name}</strong>
              <span>
                <FiClock />
                8:00
              </span>
            </div>
          </NextAppointment>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
