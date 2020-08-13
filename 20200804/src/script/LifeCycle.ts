export default class LifeCycle extends Laya.Script{

    /** @prop {type: int, default:10} */
    public  Time :number = 0;
    onAwake(){
        console.log("OnAwake");
    }
    onStart(){
        console.log("OnStart");
    }
    onUpdate(){
        console.log("onUpdate");
    }
    onDisdable(){
        console.log("onDisable");
    }
    onDestroy(){
        console.log("onDestroy");
    }

    onClick(){
        console.log("onClick");
        
    }
    onDoubleClick(){
        console.log("onDoubleClick");
        
    }
    onRightClick(){
        console.log("onRightClick");
        
    }

    print(event: Laya.Event): void{
        console.log(">>"+ this.owner.name + " " + event.type)

    }
} 