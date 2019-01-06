import { Globals } from './global';

export class TvSwitchAccessory {
    private log: any;
    private config: any;
    private service: any;
    private isOn: boolean;

    constructor (log: any, config: any)
    {
        this.log = log;
        this.config = config;
        this.isOn = false;
        this.service = new Globals.Service.Switch(this.config.name);
    }

    getServices () {
        const informationService = new Globals.Service.AccessoryInformation()
            .setCharacteristic(Globals.Characteristic.Manufacturer, 'Sony')
            .setCharacteristic(Globals.Characteristic.Model, 'XE70')
            .setCharacteristic(Globals.Characteristic.SerialNumber, '000000')


        this.service.getCharacteristic(Globals.Characteristic.On)
            .on('get', this.getOnCharacteristicHandler.bind(this))
            .on('set', this.setOnCharacteristicHandler.bind(this))

        return [informationService, this.service]
    }

    setOnCharacteristicHandler (value: boolean, callback: Function) {
        this.isOn = value

        let state = value ? "ON" : "OFF";
        this.log(`Sony XE70 ${state}`);

        callback(null);
    }

    getOnCharacteristicHandler (callback: Function) {
        let state = this.isOn ? "ON" : "OFF";
        this.log(`Checking Sony XE70 current state (${state})`)

        callback(null, this.isOn);
    }
}