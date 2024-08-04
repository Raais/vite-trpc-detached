import { match } from 'ts-pattern';

import { trpc } from '../../api/client';

export function HomePage() {
  const userQuery = trpc.users.getHello.useQuery();

  return (
    <div>
      {match(userQuery)
        .with({ status: 'error' }, () => <p>Error</p>)
        .with({ status: 'loading' }, () => <p>Loading</p>)
        .with({ status: 'success' }, (r) => <p>{r.data}</p>)
        .otherwise(() => <p>Nothing</p>)
      }
    </div>
  );
}
