import {useMutation} from 'react-query';
import {AxiosError} from 'axios';

import ShowToast from '@components/showToast';
import {STORAGE_KEYS} from '@constants';
import {API_ENDPOINTS} from '@network/apiConstant';
import {addData} from '@network/apiMethods';
import {setItem} from '@storage';
import {useAppDispatch} from '@store';
import {setToken} from '@store/reducers/auth';

const handleError = (error: AxiosError, defaultMessage: string) => {
  const errorResponse = error?.response?.data as
    | Record<string, string[]>
    | undefined;
  const errorMessage = errorResponse
    ? Object.values(errorResponse).flat().join(', ')
    : defaultMessage;

  ShowToast('error', defaultMessage, errorMessage);
};

const handleSuccess = (
  token: string,
  dispatch: ReturnType<typeof useAppDispatch>,
) => {
  setItem(STORAGE_KEYS.AUTH_TOKEN, token);
  dispatch(setToken(token));
};

export const useLoginMutation = () => {
  const dispatch = useAppDispatch();

  return useMutation<LoginResponse, AxiosError, Credentials>(
    credentials => addData(API_ENDPOINTS.LOGIN, credentials),
    {
      onSuccess: data => {
        handleSuccess(data.key, dispatch);
      },
      onError: error => {
        handleError(error, 'Login Failed');
      },
    },
  );
};

export const useSignupMutation = () => {
  const dispatch = useAppDispatch();

  return useMutation<LoginResponse, AxiosError, SignupCredentials>(
    credentials => addData(API_ENDPOINTS.SIGNUP, credentials),
    {
      onSuccess: data => {
        handleSuccess(data.key, dispatch);
      },
      onError: error => {
        handleError(error, 'Signup Failed');
      },
    },
  );
};
