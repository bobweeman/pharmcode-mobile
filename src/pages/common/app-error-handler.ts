import { ErrorHandler } from "@angular/core";


export class AppErrorHandler extends ErrorHandler{

    handleError(error){
        
        console.log(error);
    }
}