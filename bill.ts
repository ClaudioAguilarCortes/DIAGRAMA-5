import { guest } from './guest';
import { receptionist } from './receptionist';

export class bill {
    private billNo: string = "";
    private guestName: string = "";

    constructor(name: string, id: string, phoneNo: string, address: string, roomNo: string, NameManager: string, IdManager: string, PhoneNoManager: string, Location: string, type: string, status: string, idFood: string, nameFood: string, chefName: string, chefId: string, LocationChef: string, nameHousekeeping: string, idHousekeeping: string, locationHousekeeping: string, locationRoom: string, billNo: string, guestName: string) {
        this.billNo = billNo;
        this.guestName = guestName;
    }
    //get data
    public get_billNo(): string { return this.billNo; }
    public get_guestName(): string { return this.guestName; }
    //set data
    public set_billNo(billNo: string) { this.billNo = billNo; }
    public set_guestName(guestName: string) { this.guestName = guestName; }
}