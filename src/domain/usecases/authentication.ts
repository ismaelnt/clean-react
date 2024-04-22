import { TAccountModel } from '../models/account-model';

export type TAuthenticationParams = {
  email: string;
  password: string;
};

export interface IAuthentication {
  auth: (params: TAuthenticationParams) => Promise<TAccountModel>;
}
