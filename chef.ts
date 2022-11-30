export class chef {
    private chefName: string = "";
    private chefId: string = "";
    private LocationChef: string = "";

    constructor (name: string, id: string, phoneNo: string, address: string, roomNo: string, NameManager: string, IdManager: string, PhoneNoManager: string, Location: string, type: string, status: string, idFood: string, nameFood: string, chefName: string, chefId: string, LocationChef: string,) {
        this.chefName = chefName;
        this.chefId = chefId;
        this.LocationChef = LocationChef; 
    }
    //get data
    public get_chefName(): string { return this.chefName; }
    public get_chefId(): string { return this.chefId; }
    public get_LocationChef(): string { return this.LocationChef; }
    //set data
    public set_chefName(chefName: string) { this.chefName = chefName; }
    public set_chefId(chefId: string) { this.chefId = chefId; }
    public set_LocationChef(LocationChef: string) { this.LocationChef = this.LocationChef; }
    //metods
    public TakeOrders(TakeOrders: string): string { return TakeOrders; }
}