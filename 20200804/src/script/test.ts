export default class test  extends Laya.Script{

    onAwake(): void{
        let button : Laya.Button = this.owner.getChildByName("start") as Laya.Button;
        button.on(Laya.Event.CLICK,this,()=>{
            alert("Game Start");
        })
    }
}