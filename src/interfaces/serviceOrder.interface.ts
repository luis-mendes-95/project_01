export interface IItemOS {
    id?: number;
    code: number | null;
    description: string;
    qty: number | null;
    workDescription: string;
  }
  
  export interface IRegisterOrderService {
    id: number;
    date: string;
    client: string;
    items: Array<IItemOS>;
  }
  
  export interface iItemPrice {
    price: number;
  }
  
  export type FormValues = IRegisterOrderService;