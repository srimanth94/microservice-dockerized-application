export class Purchase {
    constructor(
      public order: {
        id: number;
        name: string;
        quantity: number;
        price: number;
      },
      public payment: {}
    ) {}
  }
  
  export class Order{
    constructor(
        public payment:{
            paymentId:number;
            transactionStatus:string;
            transactionId:number;
            orderId:number;
            amount:number;
        }
    ){}
  }