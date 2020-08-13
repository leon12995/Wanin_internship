export class MouseMove {
    constructor(){
        let label = new Laya.Label("Label");
        label.bgColor = "#FF0000";
        label.fontSize = 30;
        label.size(100,32);
        label.centerX = 0;
        label.centerY = 0;
        label.on(Laya.Event.MOUSE_OVER, this, this.onMouseOver);
        label.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove); 
        label.on(Laya.Event.MOUSE_OUT, this, this.onMouseOut);
         
        Laya.stage.addChild(label);
              
    }
    onMouseOver(event: Laya.Event) :void{
        console.log("Mouse. event: " + event.type);
    }
    onMouseMove(event: Laya.Event) :void{
        console.log("Mouse. event: " + event.type);
    }
    onMouseOut(event: Laya.Event) :void{
        console.log("Mouse. event: " + event.type);
    }
}