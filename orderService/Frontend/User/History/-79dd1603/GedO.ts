export class Purchase {
    constructor(
      public order: {
        id: number;
        name: string;
        quantity: number;
        price: number;
      },
      public payment: {
        paymentId: number;
        paymentStatus: string;
        transcationId: number;
        orderId:number;
        amount:number;
      }
    ) {}
  }
  