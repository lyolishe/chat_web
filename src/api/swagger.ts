/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface LoginViewModel {
  login?: string | null;
  password?: string | null;
}

export interface User {
  id?: string | null;

  /** @format date-time */
  creationDate?: string;
  login?: string | null;
  password?: string | null;
  displayName?: string | null;
  phone?: string | null;
}
