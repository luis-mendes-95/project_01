export interface IItem {
  id?: number;
  code: number | null;
  description: string;
  price: number | null | string;
  disccount: number | null | string;
  qty: number | null | string;
  cost: number | null | string;
  margin: number | null | string;
  obs?: string;
}

export interface IRegisterSales {
  id: number;
  date: string;
  client: string;
  items: Array<IItem>;
  totalCost: number | null | string;
  totalMargin: number | null | string;
  total: string | number;
  payType?: string;
  received: number | string;
}

export interface iItemPrice {
  price: number;
}

export type FormValues = IRegisterSales;