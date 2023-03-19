export interface IItemReceivable {
    id?: number;
    saleId?: number;
    description: string;
    originalValue: number | null;
    received: number | null;
    payType?: string;
    obs?: string;
  }
  
  export interface IReceivableGenerated {
    id: number;
    date: string;
    client: string;
    items: Array<IItemReceivable>;
    total: number;
    payType?: string;
    received: number;
  }
  
  export interface iItemPrice {
    price: number;
  }
  
  // export type FormValues = IRegisterSales;