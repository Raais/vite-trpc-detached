import './index.css';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HomePage } from '@/pages/Home/Home.page';
import { trpc, trpcClient, reactQueryClient } from './api/client';

const TRPCProvider = trpc.Provider;

export default function App() {
  return (
    <TRPCProvider client={trpcClient} queryClient={reactQueryClient}>
    <QueryClientProvider client={reactQueryClient}>
      <div>
        <ReactQueryDevtools initialIsOpen={false} />
        <HomePage />
      </div>
    </QueryClientProvider>
    </TRPCProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
