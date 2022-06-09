import { UsersTableSTL } from './usersTableSTL';
import { ITable } from '../../interfaces/interfaces';
import { FC } from 'react';
import api from '../../services/api';
import { mutate } from 'swr';
import Swal from 'sweetalert2';

export const UsersTable: FC<ITable> = ({ id, name, date, age }) => {
  // url fixa para mutação da primeira pagina
  const urlToMutate = `users?page=0`;

  // função para deletar o item selecionado
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
