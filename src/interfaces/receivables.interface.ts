export interface IRegisterReceivable {
    id?: number;
    saleId?: number;
    cpfcnpj: number;
    description: string;
    originalValue: number | any;
    received: number | null;
    payType?: string;
    obs?: string;
  }