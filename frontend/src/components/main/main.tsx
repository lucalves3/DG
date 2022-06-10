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

  const calculateAge = (date: string): number => {
    const birthDate = new Date(date)
    let difference = Date.now() - birthDate.getTime()
    let age = new Date(difference); 
    return Math.abs(age.getUTCFullYear() - 1970);
  }

  return (
    <MainSTL>
      { !getFormik ? 
      <button className='buttonCallFormik' onClick={() => setGetFormik(true)}>Adicionar</button>
      : <></>
    }
      {getFormik ? (
        <section className="addUser">
          <button className='buttonClose' onClick={() => setGetFormik(false)}>X</button>
          <h2>ADICIONAR USUARIO</h2>
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
                  timer: 5000,
                  closeButtonAriaLabel: 'Ok'
                }).then(() => mutate('users?page=0')).then(() => setGetFormik(false));
              } catch (error) {
                Swal.fire({
                  icon: 'error',
                  title: `${error.response.data.message}`,
                  text: 'Tente criar um usuário com nome diferente, essa validação veio do backend!!!',
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
                    <span className="spanFormik">
                      Data de Nascimento
                    </span>
                    <Field
                      className="inputFormik"
                      name="birthDate"
                      onBlur={handleChange('birthDate')}
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
      <div className="tagName">
        <h3 className="col-3">Nome</h3>
        <h3 className="col-4">Data de Aniversário</h3>
        <h3 className="col-5">Idade Atual</h3>
      </div>
      {data &&
        data?.models?.data.map((e, index) => (
          <UsersTable
            id={e?.id}
            date={e?.birthDate}
            age={calculateAge(e?.birthDate)}
            name={e?.name}
            key={e?.id}
          />
        ))}
    </MainSTL>
  );
}
