export interface IItem {
  id?: number;
  code: number | null;
  description: string;
  price: number | null;
  disccount: number | null;
  qty: number | null;
  cost: number | null;
  margin: number | null;
  obs?: string;
}

export interface IRegisterSales {
  id: number;
  date: string;
  client: string;
  items: Array<IItem>;
  total: number;
  payType?: string;
  received: number;
}

export interface iItemPrice {
  price: number;
}

export type FormValues = IRegisterSales;