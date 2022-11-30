import { guest } from './guest';
import { rooms } from './rooms';

export class receptionist {
    private nameReceptionist: string = "";
    private idReceptionist: string = "";
    private phoneNoReceptionist: string = "";
    private locationsReceptionist: string = "";

    constructor (name: string, id: string, phoneNo: string, address: string, roomNo: string, NameManager: string, IdManager: string, PhoneNoManager: string, Location: string, type: string, status: string, idFood: string, nameFood: string, chefName: string, chefId: string, LocationChef: string, nameHousekeeping: string, idHousekeeping: string, locationHousekeeping: string, locationRoom: string, nameReceptionist: string, idReceptionist: string, phoneNoReceptionist: string, locationsReceptionist: string) {
        this.nameReceptionist = nameReceptionist;
        this.idReceptionist = idReceptionist;
        this.phoneNoReceptionist = phoneNoReceptionist;
        this.locationsReceptionist = locationsReceptionist;
    }
    //get data
    public get_nameReceptionist(): string { return this.nameReceptionist; }
    public get_idReceptionist(): string { return this.idReceptionist; }
    public get_phoneNoReceptionist(): string { return this.phoneNoReceptionist; }
    public get_locatonsReceptionist(): string { return this.locationsReceptionist; }
    //set data
    public set_nameReceptionist(nameReceptionist: string) { this.nameReceptionist = nameReceptionist; }
    public set_idReceptionist(idReceptionist: string) { this.idReceptionist = idReceptionist; }
    public set_phoneNoReceptionist(phoneNoReceptionist: string) { this.phoneNoReceptionist = phoneNoReceptionist; }
    public set_locationsReceptionist(locationsReceptionist: string) { this.locationsReceptionist; }
    //metods
    public CheckRoomAvailability(CheckRoomAvailability : string): string { return CheckRoomAvailability }
    public BookRoom(BookRoom : string): string { return BookRoom }
    public GenerateBill(GenerateBill : string): string { return GenerateBill }
    public AcceptCustomerFeedback(AcceptCustomerFeedback : string): string { return AcceptCustomerFeedback }
}