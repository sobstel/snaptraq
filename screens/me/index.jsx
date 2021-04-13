import * as React from 'react';
import Screen from 'components/Screen';
import NetworkStatusTile from './NetworkStatusTile';
import BatteryStatusTile from './BatteryStatusTile';

export default function MeScreen() {
  return (
    <Screen>
      <NetworkStatusTile />
      <BatteryStatusTile />
    </Screen>
  );
}
