import { UsersTableSTL } from './usersTableSTL';
import { ITable } from '../../interfaces/interfaces';
import { FC } from 'react';

export const UsersTable: FC<ITable> = ({ id, name, date, age }) => {
  return (
    <UsersTableSTL>
      <input type="checkbox" className='checkbox'></input>
      <p>{name}</p>
      <p>{date}</p>
      <p>{age}</p>
    </UsersTableSTL>
  );
}
