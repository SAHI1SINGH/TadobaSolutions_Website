export class Quote {
    quoteId: number;
    customerName: string;
    customerEmail: string;
    customerMobileNumber: string;
    queryDescription: string;
  
    constructor() {
      this.quoteId = 0; 
      this.customerName = '';
      this.customerEmail = '';
      this.customerMobileNumber = '';
      this.queryDescription = '';
    }
  }
  