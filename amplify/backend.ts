import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { testFunction } from './test-function/resource';


defineBackend({
  auth,
  data,
  testFunction,
});
