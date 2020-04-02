export interface IToasterService {
  success(title: string, message: string): void;
  information(title: string, message: string): void;
  warning(title: string, message: string): void;
  error(title: string, message: string): void;
}
