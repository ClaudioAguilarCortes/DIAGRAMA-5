import { manager } from './manager';
export class inventory {
private type: string = "";
private status: string = "";

constructor (name: string, id: string, phoneNo: string, address: string, roomNo: string, NameManager: string, IdManager: string, PhoneNoManager: string, Location: string, type: string, status: string) {
    this.type = type;
    this.status = status;
}
//get data
public get_type(): string { return this.type;}
public get_status(): string { return this.status;}
//set data
public set_type(type: string) { this.type = type;}
public set_status(status: string) {this.status = status;}
}