import {
  IHttpPostClient,
  THttpPostParams,
} from '@/data/protocols/http/http-post-client';

export class HttpPostClientSpy implements IHttpPostClient {
  url?: string;

  async post(params: THttpPostParams): Promise<void> {
    this.url = params.url;
    return Promise.resolve();
  }
}
