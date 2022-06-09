import React from 'react';
import { UsersTable } from '../usersTable/usersTable';
import { MainSTL } from './mainSTL';
import api from '../../services/api';
import { useFetch } from '../../services/useFetch';

export function Main(): any {
  const { data } = useFetch(`users?page=0`);
  return (
    <MainSTL>
      { data && data?.models?.data.map((element) => (
        <UsersTable id={element?.id} date={element?.birthDate} age={element?.age} name={element?.name} key={element?.id} />
      )) }
    </MainSTL>
  );
}
