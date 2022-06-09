import { UsersTableSTL } from './usersTableSTL';
import { ITable } from '../../interfaces/interfaces';
import { FC, useContext, useState } from 'react';
import { Context } from '../../context/context';
import api from '../../services/api';
import { mutate } from 'swr';
import Swal from 'sweetalert2';

export const UsersTable: FC<ITable> = ({ id, name, date, age }) => {
  const [check, setCheck] = useState([]);
  const urlToMutate = `users?page=0`;

  // const handleCheck = (id: any, check: any): void => {
  //   const array = [];
  //   if (check.includes(id) === false) {
  //     array.push(id)
  //     setCheck(array)
  //   }
  //   if (check.includes(id) === true) {
  //     setCheck(check.filter((e) => e !== id));
  //   }
  // };
  const handleDelete = async (id: any) => {
    try {
      await api.delete('users/' + id);
      Swal.fire({
        icon: 'success',
        title: 'Usuário excluído com sucesso!!!',
        text: 'Observe o mutate da página ao excluir um usuário!',
        closeButtonAriaLabel: 'ok',
      }).then(() => mutate(urlToMutate));
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Ops! Aconteceu algo de errado com sua requisição!',
        timer: 3000,
      }).then(() => mutate(urlToMutate));
    }
  };

  return (
    <UsersTableSTL>
      <button className="buttonDelete" onClick={() => handleDelete(id)} />
      <p>{name}</p>
      <p>{date}</p>
      <p>{age}</p>
    </UsersTableSTL>
  );
};
