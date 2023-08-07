/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />
import '@emotion/react';
import type NodeCache from 'node-cache';

declare module '@emotion/react' {
  //arquivos do tema extends Arquivos do tema
  export interface Theme {}
}

declare global {
    interface  CredentialRequestOptions {
        otp: OTPOptions
    }
    interface OTPOptions{
        transport: string[]
    }
    var tenantCache: NodeCache;
    var i18nCache: NodeCache;
    var clientConfigCache: NodeCache;
    var infraConfigCache: NodeCache;
}
