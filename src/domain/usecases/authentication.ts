import { TAccountModel } from '../models/account-model';

type TAuthenticationParams = {
  email: string;
  password: string;
};

export interface IAuthentication {
  auth: (params: TAuthenticationParams) => Promise<TAccountModel>;
}
