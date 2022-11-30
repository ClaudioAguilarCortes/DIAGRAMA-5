import { guest } from './guest';

export class manager {
    private NameManager: string = "";
    private IdManager: string = "";
    private PhoneNoManager: string = "";
    private Location: string = "";

    constructor(name: string, id: string, phoneNo: string, address: string, roomNo: string, NameManager: string, IdManager: string, PhoneNoManager: string, Location: string) {
        this.NameManager = NameManager;
        this.IdManager = IdManager;
        this.PhoneNoManager = PhoneNoManager;
        this.Location = Location;
    }
//get data
public get_Name(): string { return this.NameManager;}
public get_Id(): string { return this.IdManager;}
public get_PhoneNo(): string { return this.PhoneNoManager;}
public get_Location(): string { return this.Location;}
//set data
public set_Name(NameManager: string) {this.NameManager = NameManager;}
public set_Id(IdManager: string) {this.IdManager = IdManager;}
public set_PhoneNo(PhoneNoManager: string) {this.PhoneNoManager = PhoneNoManager;}
public set_Location(Location: string) {this.Location = Location;}
//metodos
public PurchaseInventory(PurchaseInventory: string): string { return PurchaseInventory;}
public RecordComplaints(RecordComplaints: string): string { return RecordComplaints;}
public ManageStaff(ManageStaff: string): string { return ManageStaff;}
}