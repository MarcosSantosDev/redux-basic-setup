import { from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import api from './api';

export default {
  authentication: (data, callbackSuccess, callbackError) => {
    const promise = api.get(`users?email=${data.email}&password=${data.password}`);

    return from(promise)
      .pipe(
        map(({status, data}) => {
          if (status === 200) { 
            if(data.length === 0) {
              return callbackError('Invalid credentials');
            }
            return callbackSuccess(data);
          }
        }),
        catchError((error) => {
          return callbackError(error)
        }),
      );
  },
};
