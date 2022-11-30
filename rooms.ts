import { guest } from './guest';

export class rooms {
    private locationRoom: string = "";

    constructor(name: string, id: string, phoneNo: string, address: string, roomNo: string, NameManager: string, IdManager: string, PhoneNoManager: string, Location: string, type: string, status: string, idFood: string, nameFood: string, chefName: string, chefId: string, LocationChef: string, nameHousekeeping: string, idHousekeeping: string, locationHousekeeping: string, locationRoom: string) {
        this.locationRoom = locationRoom;
    }
    //get data
    public get_locationRoom(): string { return this.locationRoom; }
    //set data
    public set_locatonRoom(locationRoom: string) { this.locationRoom = locationRoom; }
}