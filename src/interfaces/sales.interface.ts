export interface IItem {
  id?: number;
  code: number | null;
  description: string;
  price: number | null;
  disccount: number | null;
  qty: number | null;
  obs?: string;
}

export interface IRegisterSales {
  id: number;
  date: string;
  client: string;
  items: Array<IItem>;
  total: number | null;
  payType?: string;
  received: number | null;
}

export interface iItemPrice {
  price: number;
}

export type FormValues = IRegisterSales;