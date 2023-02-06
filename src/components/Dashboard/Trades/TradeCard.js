import { TradeCardLayout } from '../../../styles/Dashboard/Trade/TradeCardLayout';
import { FaExchangeAlt } from 'react-icons/fa';
import { RequestButton } from '../../../styles/Dashboard/Trade/RequestButton';

export default function TradeCard({ trade }) {
  return (
    <TradeCardLayout>
      <div>
        <img src={trade[0].Pokemon.image} alt={trade[0].Pokemon.name} />
        <h2>{trade[0].Pokemon.name}</h2>
      </div>
      <FaExchangeAlt size={70} />
      <div>
        <img src={trade[1].Pokemon.image} alt={trade[1].Pokemon.name} />
        <h2>{trade[1].Pokemon.name}</h2>
      </div>
      <span>
        <h2>{trade[1].User.nickname}</h2>
        <h3>#{trade[1].User.code}</h3>
      </span>
      <RequestButton color={'#21F38F'}>Request</RequestButton>
    </TradeCardLayout>
  );
}
