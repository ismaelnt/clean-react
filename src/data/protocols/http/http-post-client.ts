export type THttpPostParams = {
  url: string;
};

export interface IHttpPostClient {
  post(params: THttpPostParams): Promise<void>;
}
