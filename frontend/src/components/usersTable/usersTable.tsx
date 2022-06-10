import { UsersTableSTL } from './usersTableSTL';
import { ITable } from '../../interfaces/interfaces';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { FC, useState } from 'react';
import api from '../../services/api';
import { mutate } from 'swr';
import Swal from 'sweetalert2';
import { useFetch } from '../../services/useFetch';

export const UsersTable: FC<ITable> = ({ id, name, date, age }) => {
  const [getFormik, setGetFormik] = useState(false);
  const { data } = useFetch('/users/'+ id)
  console.log(data?.model?.data)

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
      {getFormik ? (
        <section className="addUser">
          <button className='buttonClose' onClick={() => setGetFormik(false)}>X</button>
          <h2>CADASTRAR USUARIO</h2>
          <Formik
            initialValues={{ name: data?.model?.data?.name, birthDate: data?.model?.data?.birthDate }}
            onSubmit={async (values) => {
              try {
                await api.put('/users/'+ id, values);
                Swal.fire({
                  icon: 'success',
                  title: 'Usuário atualizado com sucesso!!!',
                  text: 'Observe o mutate da rota',
                  timer: 5000,
                  closeButtonAriaLabel: 'Ok'
                }).then(() => mutate('users?page=0')).then(() => mutate('/users/'+ id)).then(() => setGetFormik(false));
              } catch (error) {
                Swal.fire({
                  icon: 'error',
                  title: `${error.response.data.message}`,
                  text: 'Tente um nome diferente, essa validação veio do backend!!!',
                  timer: 8000,
                  closeButtonAriaLabel: 'Ok'
                })
              }
              ;
            }}
            enableReinitialize
          >
            {({
              values,
              handleChange,
              handleSubmit,
              setFieldValue,
              handleBlur,
            }) => (
              <Form>
                <div className="modal">
                  <label className="cards">
                    <span className="spanFormik">Nome</span>
                    <Field
                      className="inputFormik"
                      name="name"
                      type="text"
                    />
                    <ErrorMessage
                      name="name"
                      component="span"
                      className="errorMessages"
                    />
                  </label>
                </div>
                <div className="modal">
                  <label className="cards">
                    <span className="spanFormik">
                      Data de Nascimento
                    </span>
                    <Field
                      className="inputFormik"
                      name="birthDate"
                      type="date"
                    />
                    <ErrorMessage
                      name="birthDate"
                      component="span"
                      className="errorMessages"
                    />
                  </label>
                </div>
                <button type="submit" className="buttonSubmit">
                  ADICIONAR
                </button>
              </Form>
            )}
          </Formik>
        </section>
      ) : (
        <></>
      )}
      <div className={ id%2 === 0 ? 'divTrue' : 'divFalse' }>
        <button className="buttonDelete" onClick={() => handleDelete(id)} />
        <p onClick={() => setGetFormik(true)} className='col-3 attModal'>{name}</p>
        <p className='col-4'>{date}</p>
        <p className='col-5'>{age}</p>
      </div>
    </UsersTableSTL>
  );
};
