export type GiftItem = {
  id: string;
  name: string;
  image: string;
};

export type GiftCategoryWindow = {
  id: string;
  label: string;
  value: number;
  paymentLink: string;
  items: GiftItem[];
};