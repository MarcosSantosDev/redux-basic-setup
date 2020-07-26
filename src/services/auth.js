import { from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import api from './api';

export default {
  authentication: (data, callbackSuccess, callbackError) => {
    const promise = api.get(`users?email=${data.email}&password=${data.password}`);

    return from(promise)
      .pipe(
        map((response) => callbackSuccess(response.data)),
        catchError((error) => callbackError(error)),
      );
  },
};
