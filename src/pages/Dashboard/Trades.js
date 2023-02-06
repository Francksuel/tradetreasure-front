import TradeCard from '../../components/Dashboard/Trades/TradeCard';
import useTrades from '../../hooks/api/useTrades';
import { TradesContainer } from '../../styles/Dashboard/Trade/TradesContainer';
export default function Trades() {
  const { trades } = useTrades();
  return (
    <TradesContainer>
      {trades ? trades.map((trade, index) => <TradeCard trade={trade} key={index} />) : ''}
    </TradesContainer>
  );
}
