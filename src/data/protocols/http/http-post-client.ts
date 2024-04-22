export type THttpPostParams = {
  url: string;
  body?: Record<string, unknown>;
};

export interface IHttpPostClient {
  post(params: THttpPostParams): Promise<void>;
}
