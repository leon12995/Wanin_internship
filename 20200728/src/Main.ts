import GameConfig from "./GameConfig";
import { IronMan } from "./IronMan";
import { HulkBuster } from "./HulkBuster";
import { FlyingObject } from "./FlyingObject";
import { Thor } from "./Thor";
import { CaptainAmerica } from "./CaptainAmerica";
import { Direction } from "./Direction";
class Main {
	constructor() {
		//根据IDE设置初始化引擎		
		if (window["Laya3D"]) Laya3D.init(GameConfig.width, GameConfig.height);
		else Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
		Laya["Physics"] && Laya["Physics"].enable();
		Laya["DebugPanel"] && Laya["DebugPanel"].enable();
		Laya.stage.scaleMode = GameConfig.scaleMode;
		Laya.stage.screenMode = GameConfig.screenMode;
		//兼容微信不支持加载scene后缀场景
		Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;

		//打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
		if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
		if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
		if (GameConfig.stat) Laya.Stat.show();
		Laya.alertGlobalError = true;

		//激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
		Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
	}

	onVersionLoaded(): void {
		//激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
		Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
	}

	onConfigLoaded(): void {
		//加载IDE指定的场景
		GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);

		Laya.stage.on(Laya.Event.KEY_UP,this,(event)=>{
			let code = event.which || event.keyCode;
			switch(code){
				case Direction.Left:
					console.log("Move Left");
					break;
				case Direction.Up:
					console.log("Move Up");
					break;
				case Direction.Right:
					console.log("Move Right");
					break;
				case Direction.Down:
					console.log("Move Down");
					break;
			}
		})

		// let airAvengers: FlyingObject[] =[];
		// airAvengers.push(new Thor());
		// airAvengers.push(new IronMan("Tony"));
		// airAvengers.push(new CaptainAmerica());		
		// airAvengers.forEach((airAvenger: FlyingObject)=>{
		//  console.log(airAvenger.fly());
		 
		// });
		
		// let ironman : IronMan = new IronMan("Tony");
		// console.log(ironman.sayHi());

		// let hulk: HulkBuster = new HulkBuster("Banner")
		// console.log(hulk.sayHi());

		// // hulk.m_Name = "Panner";
		// console.log(hulk.sayHi());
		
		// let isStudent: boolean =  false;
		// let aNumber : number = 9;
		// let notANumber : number = NaN;
		// let anInfiniteNumber : number = Infinity;
		// let aString: any  ="I am a string";
		// console.log("aNumber is a number: " +isNaN(aNumber));
		// console.log("aString is a string: " +isNaN(aString));
		// console.log("anInfinityNumber value: " +isNaN(anInfiniteNumber));
		// let aString : string = "Curry";
		// let greeting: string = "Hello my name is " + aString;
		// console.log( greeting + aString );
		// let isDownload = this.isDownload();
		// let u: undefined = undefined;
		// let n: null = null;
		// console.log("typeof u : " + typeof(u));
		// console.log("typeof n : " + typeof(n));


	
		
		//任何型態陣列
		let anArray: any[] = ["A", 1];

		//字串型態陣列
		let aStringArray: string[] =  ["A","B","C","D"];
		
		//數字型態陣列
		// let aNumberArray: number[] = [100,200,300,400];

		// let Number99: number[][] = [];
		// let row: number = 9;
		// let column: number = 9;
		// for(let i = 1; i<=column; i++){
		// 	Number99.push([]);			
		// 	for(let s = 1; s<=row;s++){
		// 		Number99[i-1][s-1]= i*s;
		// 	}
		// }
		// console.log(Number99);

		
		//刪除兩個元素
		// aNumberArray.splice(1,2);
		// console.log(aNumberArray);
		//新增一個元素到100跟200之間
		// aNumberArray.splice(1,0, 150);
		// console.log(aNumberArray);

		// let aNewArray: number[] = aNumberArray.slice(1,3);
		// console.log(aNewArray);

		

		// let index: number  = aStringArray.indexOf("B");
		// console.log(index);

		// let aNumber: number = aNumberArray[0];

		// aNumberArray.push(500);
		// console.log(aNumberArray);

		// aNumberArray.pop();
		// console.log(aNumberArray);

		// aNumberArray.unshift(0);
		// console.log("unshift " + aNumberArray );
		//forEach
		// aNumberArray.forEach((aNumber: number)=>{
		// 	console.log(aNumber);

		// })
		//for ...of
		// for(let aNumber of aNumberArray){
		// 	console.log(aNumber);
		// }
		// for (let i = aNumberArray.length; i>-1 ;i--){
		// 	console.log("index: " +i+ "number = "+ aNumberArray[i]);
		// }
		// let answer:number =this.sum(1,2);
		// this.printName("Chen");
		// this.printName("Cheng","Dr.");
		// this.printFamily("John","Mary","Leon","Brain","Joe");
	}
	// public isDownload(): boolean {
	// 	return true;
	// }

	// public  print() : void{
	// 	console.log("Log!!!");
	// }
	// printName(surname:string, title:string ="Mr."):void{
	// 	console.log("Hi " +(title? title:"") + surname)
		
	// }
	//函式
	sum(x: number, y:number ):number{
		return x+y;
	}
	printFamily(father: string, mother: string, ...children: string[]) :void{
		console.log(father);
		console.log(mother);
		if (children){
			children.forEach((child:string) => {
				console.log(child);
				
			})
			if(children.length===0){
				console.log("No child")
			}
		}
		
		
		
	}
	
}
//激活启动类
new Main();
