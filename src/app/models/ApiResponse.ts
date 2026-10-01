export class ApiResponse<T> {
    data: T;
    message: string;
    statusCode: number;
    timeStamp: Date;
    success: boolean;
  
    constructor() {
      this.data = {} as T;
      this.message = '';
      this.statusCode = 0;
      this.timeStamp = new Date();
      this.success = false;
    }
  }
  