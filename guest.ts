export class guest {
    private name: string = "";
    private id: string = "";
    private phoneNo: string = "";
    private address: string = "";
    private roomNo: string = "";

    constructor (name: string, id: string, phoneNo: string, address: string, roomNo: string) {
        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
        this.address = address;
        this.roomNo = roomNo;
}
//get data
public get_name(): string {return this.name;}
public get_id(): string {return this.id;}
public get_phoneNo(): string {return this.phoneNo;}
public get_address(): string {return this.address;}
public get_roomNo(): string {return this.roomNo;}
//set data
public set_name(name: string) {this.name = name;}
public set_id(id: string) {this.id = id;}
public set_phoneNo(phoneNo: string) {this.phoneNo = phoneNo;}
public set_address(address: string) {this.address = address}
public set_roomNo(roomNo: string) {this.roomNo}
//metods
public checkIn(checkIn: string): string {return checkIn;}
public checkOut(checkOut: string): string {return checkOut;}
public payBill(payBill: string): string {return payBill;}
public orderFood(orderFood: string): string {return orderFood;}
public submitFeedback(feedback: string): string {return feedback;}
}