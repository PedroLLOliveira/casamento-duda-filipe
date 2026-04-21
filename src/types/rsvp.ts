export type RsvpInput = {
  name: string;
  phone: string;
  guestsCount: number;
  guestNames?: string;
  dietaryRestriction?: string;
  message?: string;
};

export type RsvpRecord = RsvpInput & {
  _id?: string;
  createdAt: string;
};