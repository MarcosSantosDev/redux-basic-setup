import { ofType, combineEpics } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';

import { auth } from '../../services';

import {
  AUTHENTICATION,
  authenticationSuccessAction,
  authenticationErrorAction,
} from './constants';

const authentication = (action$) => action$.pipe(
  ofType(AUTHENTICATION),
  mergeMap((action) => auth.authentication(
    action.payload.data,
    authenticationSuccessAction,
    authenticationErrorAction,
  )),
);

export default combineEpics(
  authentication,
);
