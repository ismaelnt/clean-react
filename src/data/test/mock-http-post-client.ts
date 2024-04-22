import {
  IHttpPostClient,
  THttpPostParams,
} from '@/data/protocols/http/http-post-client';

export class HttpPostClientSpy implements IHttpPostClient {
  url?: string;

  body?: Record<string, unknown>;

  async post(params: THttpPostParams): Promise<void> {
    this.url = params.url;
    this.body = params.body;
    return Promise.resolve();
  }
}
