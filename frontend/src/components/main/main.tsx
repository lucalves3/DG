import React from 'react';
import { UsersTable } from '../usersTable/usersTable';
import { MainSTL } from './mainSTL';

export function Main(): any {
  return (
    <MainSTL>
      <UsersTable id={1} date='03/11/1994' age={27} name='Lucas' key={1} />
    </MainSTL>
  );
}
