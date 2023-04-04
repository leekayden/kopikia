export const isLoggedIn = true;
export const fName = "Adolf";
export const lName = "Hitler";
export const initials = fName.substring(0, 1) + lName.substring(0, 1);
export const ownerId = 0;

type OrderListType = {
  id: number;
  ownerId: number;
  name: string;
};

export let OrderList: OrderListType[] = [
  { id: 0, ownerId: 0, name: "test order" },
  { id: 1, ownerId: 0, name: "test order 2" },
];
