import { StatusType } from "../enums/status-type.enum";

export interface ResponseModel<T = unknown> {
  isSuccess: boolean,
  status: StatusType,
  message: string,
  data?: T;
}