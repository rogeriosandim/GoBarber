import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { useAuth } from '../../hooks/auth';
import { useRoute, useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  UserAvatar,
} from './styles';

interface RouteParams {
  providerId: string;
}

const CreateAppointment: React.FC = () => {
  const { user } = useAuth();
  const route = useRoute();
  const navigation = useNavigation();
  const { providerId } = route.params as RouteParams;

  return (
    <>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color="#999591" />
        </BackButton>
        <HeaderTitle>Heirdressers</HeaderTitle>

        <UserAvatar source={{ uri: user.avatar_url }} />
      </Header>
      <Container></Container>
    </>
  );
};

export default CreateAppointment;
