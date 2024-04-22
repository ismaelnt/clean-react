import { describe, expect, test } from 'vitest';

import { HttpPostClientSpy } from '@/data/test/mock-http-post-client';

import { RemoteAuthentication } from './remote-authentication';

type TSut = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSut = (url = 'http://url'): TSut => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);

  return {
    sut,
    httpPostClientSpy,
  };
};

describe('RemoteAuthentication', () => {
  test('should call HttpPostClient with correct URL', () => {
    const url = 'http://other-url';
    const { sut, httpPostClientSpy } = makeSut(url);
    sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
