import { UsersTable } from '../usersTable/usersTable';
import { MainSTL } from './mainSTL';
import { useFetch } from '../../services/useFetch';
import { useState } from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import api from '../../services/api';
import { mutate } from 'swr';
import Swal from 'sweetalert2';

export function Main(): any {
  const { data } = useFetch(`users?page=0`);
  const [getFormik, setGetFormik] = useState(false);

  return (
    <MainSTL>
      <button onClick={() => setGetFormik(true)}>Adicionar</button>
      {getFormik ? (
        <section className="addUser">
          <button onClick={() => setGetFormik(false)}>X</button>
          <Formik
            // validationSchema={Schema}
            initialValues={{ name: '', birthDate: '' }}
            onSubmit={async (values) => {
              try {
                await api.post('/users', values);
                Swal.fire({
                  icon: 'success',
                  title: 'Usuário cadastrado com sucesso!',
                  text: 'Observe o mutate da rota',
                  timer: 4000,
                  closeButtonAriaLabel: 'Ok'
                }).then(() => mutate('users?page=0'));
              } catch (error) {
                Swal.fire({
                  icon: 'error',
                  title: `${error.response.data.message}`,
                  text: 'Tente criar um usuário com nome diferente, essa validação veio do backend!!!',
                  timer: 4000,
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
                    <span className="span-label-formik-contri">Nome</span>
                    <Field
                      className="input-formik-contri"
                      onBlur={handleChange('name')}
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
                    <span className="span-label-formik-contri">
                      Data de Nascimento
                    </span>
                    <Field
                      className="input-formik-contri"
                      name="birthDate"
                      onBlur={handleChange('birthDate')}
                      type="text"
                    />
                    <ErrorMessage
                      name="birthDate"
                      component="span"
                      className="errorMessages"
                    />
                  </label>
                </div>
                <button type="submit" className="modal-detail">
                  ADICIONAR
                </button>
              </Form>
            )}
          </Formik>
        </section>
      ) : (
        <></>
      )}
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
