

import { config } from '@keystone-6/core';

import { lists } from './keystone/schema';


import { withAuth, session } from './keystone/auth';

export default withAuth(
  config({
    db: {
      provider: 'sqlite',
      url: 'file:./keystone/keystone.db',
    },
    lists,
    session,
    server: {
      cors: {
        origin: true,
      },
      port: 7000,
    },
  })
);
