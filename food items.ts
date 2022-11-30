import { guest } from './guest';

export class foodItems {
    private idFood: string = "";
    private nameFood: string = "";

    constructor (name: string, id: string, phoneNo: string, address: string, roomNo: string, NameManager: string, IdManager: string, PhoneNoManager: string, Location: string, type: string, status: string, idFood: string, nameFood: string) {
        this.idFood = idFood;
        this.nameFood = nameFood;
    }
    //get data
    public get_idFood(): string { return this.idFood; }
    public get_nameFood(): string { return this.nameFood; }
    //set data
    public set_idFood(idFood: string) { this.idFood = idFood; }
    public set_nameFood(nameFood: string) { this.nameFood = nameFood; }
}