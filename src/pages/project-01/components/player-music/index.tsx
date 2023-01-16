import { PlayerSmall } from "./player-01";
import { PlayerMedium } from "./player-02";
import { PlayerFull } from "./player-03";

interface Props {
  playerSize: 'small' | 'medium' | 'full'
}

export function PlayerMusic({ playerSize }: Props) {
  if (playerSize === 'small') {
    return <PlayerSmall />
  } else if (playerSize === 'medium') {
    return <PlayerMedium />
  } else {
    return <PlayerFull />
  }
}