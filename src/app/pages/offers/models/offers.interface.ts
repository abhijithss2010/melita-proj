export interface Offer {
  id: number;
  name: string;
  name2: string;
}

export interface Usage {
  type: string;
  used: number;
  limit: number;
}

export interface Subscription {
  id: number;
  name: string;
  type: string;
  usage: Usage[];
}
