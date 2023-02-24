import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    _id: '63f8be4db951ed6fc03edbe6',
    table: '1',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Quatro Queijos',
          imagePath: '1677243512411-quatro-queijos.png',
          price: 78,
        },
        quantity: 1,
        _id: '63f8be4db951ed6fc03edbe7',
      },
      {
        product: {
          name: 'Coca-Cola',
          imagePath: '1677245829149-coca-cola.png',
          price: 8.9,
        },
        quantity: 4,
        _id: '63f8be4db951ed6fc03edbe8',
      },
    ],
  },
  {
    _id: '63f8be8db951ed6fc03edbea',
    table: '2',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Marguerita',
          imagePath: '1677243718815-marguerita.png',
          price: 67,
        },
        quantity: 1,
        _id: '63f8be8db951ed6fc03edbeb',
      },
      {
        product: {
          name: 'Coca-Cola',
          imagePath: '1677245829149-coca-cola.png',
          price: 8.9,
        },
        quantity: 3,
        _id: '63f8be8db951ed6fc03edbec',
      },
      {
        product: {
          name: 'Cerveja Pilsen',
          imagePath: '1677245919249-cerveja.png',
          price: 14.7,
        },
        quantity: 1,
        _id: '63f8be8db951ed6fc03edbed',
      },
    ],
  },
  {
    _id: '63f8bf24b951ed6fc03edbef',
    table: '3',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Burguer com Molho Especial',
          imagePath: '1677245238121-burger-molho-especial.png',
          price: 28,
        },
        quantity: 1,
        _id: '63f8bf24b951ed6fc03edbf0',
      },
      {
        product: {
          name: 'Burguer Frango',
          imagePath: '1677245375384-chicken.png',
          price: 24,
        },
        quantity: 1,
        _id: '63f8bf24b951ed6fc03edbf1',
      },
      {
        product: {
          name: 'Burguer Egg',
          imagePath: '1677245505247-egg.png',
          price: 25,
        },
        quantity: 2,
        _id: '63f8bf24b951ed6fc03edbf2',
      },
      {
        product: {
          name: 'Coca-Cola',
          imagePath: '1677245829149-coca-cola.png',
          price: 8.9,
        },
        quantity: 2,
        _id: '63f8bf24b951ed6fc03edbf3',
      },
      {
        product: {
          name: 'Cerveja Pilsen',
          imagePath: '1677245919249-cerveja.png',
          price: 14.7,
        },
        quantity: 2,
        _id: '63f8bf24b951ed6fc03edbf4',
      },
    ],
  },
  {
    _id: '63f8bf4eb951ed6fc03edbf6',
    table: '4',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Burguer Frango',
          imagePath: '1677245375384-chicken.png',
          price: 24,
        },
        quantity: 1,
        _id: '63f8bf4eb951ed6fc03edbf7',
      },
      {
        product: {
          name: 'Suco de Laranja',

          imagePath: '1677245736099-suco-de-laranja.png',
          price: 12.5,
        },
        quantity: 1,
        _id: '63f8bf4eb951ed6fc03edbf8',
      },
    ],
  },
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon='🕑' title='Fila de Espera' orders={orders} />
      <OrdersBoard icon='👨‍🍳' title='Em preparação' orders={[]} />
      <OrdersBoard icon='✅' title='Pronto' orders={[]} />
    </Container>
  );
}
