import { EFetchStatus } from "./enum";

export interface IThunkPayload {
  param?: string;
  body?: any;
  headers?: Record<string, string>
} 

export interface IInitialState {
  status: EFetchStatus;
  message: Record<string, string> | string;
  [key: string]: unknown;
}