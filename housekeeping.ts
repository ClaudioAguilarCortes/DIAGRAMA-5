export class housekeeping {
    private nameHousekeeping: string = "";
    private idHousekeeping: string = "";
    private locationHousekeeping: string = "";

    constructor (name: string, id: string, phoneNo: string, address: string, roomNo: string, NameManager: string, IdManager: string, PhoneNoManager: string, Location: string, type: string, status: string, idFood: string, nameFood: string, chefName: string, chefId: string, LocationChef: string, nameHousekeeping: string, idHousekeeping: string, locationHousekeeping: string) {
        this.nameHousekeeping = nameHousekeeping;
        this.idHousekeeping = idHousekeeping;
        this.locationHousekeeping = locationHousekeeping;
    }
    //get data
    public get_nameHousekeeping(): string { return this.nameHousekeeping; }
    public get_idHousekeeping(): string { return this.idHousekeeping; }
    public get_locationHousekeeping(): string { return this.locationHousekeeping; }
    //set data
    public set_nameHousekeeping(nameHousekeeping: string) { this.nameHousekeeping = nameHousekeeping; }
    public set_idHousekeeping(idHousekeeping: string) { this.idHousekeeping = idHousekeeping; }
    public set_locationHousekeeping(locationHousekeeping: string) { this.locationHousekeeping = locationHousekeeping; }
    //metods
    public CleanRoom(CleanRoom: string): string { return CleanRoom}
}