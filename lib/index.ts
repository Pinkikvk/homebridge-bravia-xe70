import { Globals } from './global';
import { TvSwitchAccessory } from './tv-switch-accessory';

export default function(homebridge: any) {
    Globals.Service = homebridge.hap.Service;
    Globals.Characteristic = homebridge.hap.Characteristic;
    homebridge.registerAccessory('homebridge-bravia-xe70', 'TvSwitch', TvSwitchAccessory)
}