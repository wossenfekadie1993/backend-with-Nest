import { ExceptionFilter, ArgumentsHost, ConflictException } from '@nestjs/common';
export declare class ConflictExceptionFilter implements ExceptionFilter {
    catch(exception: ConflictException, host: ArgumentsHost): void;
}
