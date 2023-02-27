import { Text } from '../Text';
import { Cointainer } from './styles';

export function Header() {
  return (
    <Cointainer>
      <Text size={14} opacity={0.9}>
        Bem vindo(a) ao
      </Text>
      <Text size={24} weight='700'>
        WAITER
        <Text size={24}>APP</Text>
      </Text>
    </Cointainer>
  );
}
