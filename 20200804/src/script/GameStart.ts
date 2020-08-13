export default class GameStart  extends Laya.Script{

    onAwake(): void{
        //操作button範例
        // let button : Laya.Button = this.owner.getChildByName("btnGameStart") as Laya.Button;
        // button.on(Laya.Event.CLICK,this,()=>{
        //     alert("Button Clicked");
        // })

        //操作 image 轉換範例
        // let image: Laya.Image = this.owner.getChildByName("imgStar") as Laya.Image;
        // image.skin = "res/materials/rank_2.png";
        // Laya.timer.once(2000,this,()=>{
        //     image.skin = "res/materials/rank_2.png";
            
        // })

        //選項按鈕
        // let comboBox : Laya.ComboBox = this.owner.getChildByName("cboxTest") as Laya.ComboBox;
        // comboBox.selectHandler = new Laya.Handler(this , this.onComboBoxSelect , [comboBox]);

        // onComboBoxSelect(comboBox: Layer.ComboBox): void{
        //     console.log("Selected index = " + comboBox.selectedIndex)
        // }

        //輸入文字
        // let textInput : Laya.TextInput = this.owner.getChildByName("txtTest") as Laya.TextInput;
        // textInput.on(Laya.Event.KEY_UP, this , this.onTextInputChanged);
        
        //選單
        // let list : Laya.List = this.owner.getChildByName("lstTest") as Laya.List;
        // list.dataSource = [1,2,3,4];


        //進度條
        // let progressbar : Laya.ProgressBar = this.owner.getChildByName("pbTest") as Laya.ProgressBar;
        // let value: number = 0;
        // progressbar.value = 0;
        // Laya.timer.frameLoop(1,this, ()=>{
        //     value+=0.01;
        //     progressbar.value = value;
        // });
        
        let button = this.owner.getChildByName("button");
        button.on(Laya.Event.CLICK, this, this.onButtonClick, [button]);
    }
    onButtonClick(button:Laya.Button){
        button && button.removeSelf;
    }

    // onTextInputChanged(event: Laya.Event):void{
    //     console.log( "Key code " +event.keyCode)
    // }
}