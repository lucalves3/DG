import { UsersTable } from '../usersTable/usersTable';
import { MainSTL } from './mainSTL';
import { useFetch } from '../../services/useFetch';

export function Main(): any {
  const { data } = useFetch(`users?page=0`);

  return (
    <MainSTL>
      <button>Adicionar</button>
      <div className="tagName">
      <h2>Excluir</h2>
        <h2>Nome</h2>
        <h2>Data de Aniversário</h2>
        <h2>Idade</h2>
      </div>

      {data &&
        data?.models?.data.map((e, index) => (
          <UsersTable
            id={e?.id}
            date={e?.birthDate}
            age={e?.age}
            name={e?.name}
            key={e?.id}
          />
        ))}
    </MainSTL>
  );
}
