export interface IItemOS {
    id?: number;
    code: number | null;
    description: string;
    qty: number | null;
    workDescription: string;
  }
  
  export interface IRegisterServiceOrder {
    id: number;
    date: string;
    client: string;
    items: Array<IItemOS>;
    saleId?: number;
  }
  
  export interface iItemPrice {
    price: number;
  }
  
  export type FormValues = IRegisterServiceOrder;