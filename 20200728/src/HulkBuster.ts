import { IronMan } from "./IronMan";

export class HulkBuster extends IronMan{
    
    constructor(name: string){
        super(name);
        this.m_Name = "Dr." + name; 
    }
    sayHi() :string{
        return "我的真正名字叫" + this.m_Name;
    }
}