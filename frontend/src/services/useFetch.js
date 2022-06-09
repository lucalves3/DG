import useSWR from 'swr';
import api from './api';
import Swal from 'sweetalert2';
import produce from 'immer';

export function useFetch(url, refresh) {

  const { data, error, mutate } = useSWR(
    url,
    async (url) => {
      const response = await api.get(url);
      return response.data;
    },
    {
      refreshInterval: refresh,
      onError: (err, key) => {
        if (!err.response) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Estamos em manutenção, tente novamente mais tarde ou entre em contato conosco!',
            confirmButtonText: 'Fechar',
          });
        } else {
        }
      },
      onErrorRetry: (error) => {
        if (error.status === 404) return;
      },
      errorRetryInterval: 30000,
    },
    { suspense: true },
  );

  return { data, error, mutate, produce };
}
