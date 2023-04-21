export const isLoggedIn = true;
export const fName = "Adolf";
export const lName = "Hitler";
export const initials = fName.substring(0, 1) + lName.substring(0, 1);
export const ownerId = 0;

// User preferences
export const orderAutoname = true;
export const ordersEnabledByDefault = true;
export const budgetEnabledByDefault = false;

export function isOnlySpaces(str: string) {
  return str.trim().length === 0;
}

type OrderType = {
  name: string;
  basePrice: number;
  variations: { name: string; price: number }[];
};

type OrderListType = {
  id: number;
  ownerId: number;
  ownerOrderId: number;
  name: string;
  noOfOrders: number;
  budget: number;
  location: string;
  orders: OrderType[];
};

export let OrderList: OrderListType[] = [
  {
    id: 1,
    ownerId: 1,
    ownerOrderId: 1,
    name: "Order 1",
    noOfOrders: 2,
    budget: 100,
    location: "New York",
    orders: [
      {
        name: "Burger",
        basePrice: 8,
        variations: [
          { name: "Cheeseburger", price: 10 },
          { name: "Veggie burger", price: 8 },
        ],
      },
      {
        name: "Pizza",
        basePrice: 10,
        variations: [
          { name: "Margherita", price: 12 },
          { name: "Pepperoni", price: 15 },
          { name: "Veggie", price: 12 },
        ],
      },
    ],
  },
  {
    id: 2,
    ownerId: 1,
    ownerOrderId: 2,
    name: "Order 2",
    noOfOrders: 1,
    budget: 50,
    location: "San Francisco",
    orders: [
      {
        name: "Sushi",
        basePrice: 5,
        variations: [
          { name: "California Roll", price: 8 },
          { name: "Spicy Tuna Roll", price: 12 },
          { name: "Dragon Roll", price: 15 },
        ],
      },
    ],
  },
];

export function getOrderById(orderId: number): OrderListType | undefined {
  return OrderList.find((order) => order.id === orderId);
}

export function getNextOrderId(): number {
  const maxId = Math.max(...OrderList.map((order) => order.id));
  return maxId + 1;
}

export function getNextOwnerOrderId(ownerId: number): number {
  const ordersForOwner = OrderList.filter((order) => order.ownerId === ownerId);
  const maxOwnerOrderId = Math.max(
    ...ordersForOwner.map((order) => order.ownerOrderId)
  );
  return maxOwnerOrderId + 1;
}

export function getTotalPrice(order: OrderListType): number {
  const totalPrice = order.orders.reduce((acc, orderItem) => {
    const variationPrice = orderItem.variations.reduce((acc, variation) => {
      return acc + variation.price;
    }, 0);
    return acc + orderItem.basePrice + variationPrice;
  }, 0);
  return totalPrice;
}
