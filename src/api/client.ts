import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import { QueryCache, QueryClient, QueryClientConfig } from '@tanstack/react-query';
import superjson from 'superjson';
import Cookies from 'js-cookie';

import type { AppRouter } from './import';

const TRPC_URL = import.meta.env.VITE_TRPC_URL;

export const trpc = createTRPCReact<AppRouter>();

const getToken = () => {
  //const token = localStorage.getItem('access_token') || '';
  //const token = Cookies.get('__session') || '';
  const token = '';
  return `Bearer ${token}`;
};

export const trpcClient = trpc.createClient({
    links: [
      httpBatchLink({
        url: TRPC_URL,
        fetch(url, options) {
            return fetch(url, {
              ...options,
              //credentials: 'include',
            });
        },
        async headers() {
          return {
            authorization: await getToken(),
          };
        },
      }),
    ],
    transformer: superjson,
});

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: 0,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      console.error('Error happened: ', error);
    },
  }),
};

export const reactQueryClient = new QueryClient(queryClientConfig);
