import { OrderStatus } from "~/constants/order";
import { CartItem } from "~/models/CartItem";
import { Order } from "~/models/Order";
import { AvailableProduct, Product } from "~/models/Product";

export const products: Product[] = [
  {
    description: "Olej kokosowy",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
    price: 24,
    title: "Olej kokosowy",
    image: "./img/Olej-kokosowy-Olini.jpg"
  },
  {
    description: "Zestaw Olej dla dziecka + Naklejki gratis Olini",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
    price: 15,
    title: "Zestaw Olej dla dziecka",
    image: "./img/olej_dziecko_250_UMED_ZESTAW_s.jpg"
  },
  {
    description: "Miodek Olini",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a3",
    price: 23,
    title: "Miodek Olini",
    image: "./img/Miod-rzepakowy-z-jagoda-kamczacka,-truskawka-i-malina.jpg"
  },
  {
    description: "Miód rzepakowy kremowany z maliną Olini",
    id: "7567ec4b-b10c-48c5-9345-fc73348a80a1",
    price: 15,
    title: "Miód z maliną",
    image: "./img/rzepak_z_malina.jpg"
  },
  {
    description: "Miód rzepakowy kremowany z jagodą kamczacką Olini",
    id: "7567ec4b-b10c-48c5-9445-fc73c48a80a2",
    price: 23,
    title: "Miód z jagodą kamczacką",
    image: "./img/jagoda.jpg"
  },
];

export const availableProducts: AvailableProduct[] = products.map(
  (product, index) => ({ ...product, count: index + 1 })
);

export const cart: CartItem[] = [
  {
    product: {
      description: "Olej kokosowy",
      id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
      price: 24,
      title: "Olej kokosowy",
      image: "./img/Olej-kokosowy-Olini.jpg"
    },
    count: 2,
  },
  {
    product: {
      description: "Miód rzepakowy kremowany z jagodą kamczacką Olini",
      id: "7567ec4b-b10c-48c5-9445-fc73c48a80a2",
      price: 23,
      title: "Miód rzepakowy kremowany z jagodą kamczacką Olini",
      image: "./img/jagoda.jpg"
    },
    count: 5,
  },
];

export const orders: Order[] = [
  {
    id: "1",
    address: {
      address: "some address",
      firstName: "Name",
      lastName: "Surname",
      comment: "",
    },
    items: [
      { productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa", count: 2 },
      { productId: "7567ec4b-b10c-45c5-9345-fc73c48a80a1", count: 5 },
    ],
    statusHistory: [
      { status: OrderStatus.Open, timestamp: Date.now(), comment: "New order" },
    ],
  },
  {
    id: "2",
    address: {
      address: "another address",
      firstName: "John",
      lastName: "Doe",
      comment: "Ship fast!",
    },
    items: [{ productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa", count: 3 }],
    statusHistory: [
      {
        status: OrderStatus.Sent,
        timestamp: Date.now(),
        comment: "Fancy order",
      },
    ],
  },
];
