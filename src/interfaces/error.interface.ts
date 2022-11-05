import { ValidationError } from 'joi';

interface IError {
  status: number;
  message: ValidationError;
}

export default IError;
