import { IHttpPostClient } from '@/data/protocols/http/http-post-client';
import { TAuthenticationParams } from '@/domain/usecases/authentication';

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: IHttpPostClient,
  ) {}

  async auth(params: TAuthenticationParams): Promise<void> {
    await this.httpPostClient.post({
      url: this.url,
      body: params,
    });
  }
}
