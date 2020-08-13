// module laya {
    import Stage = Laya.Stage;
    import Text = Laya.Text;
    import Browser = Laya.Browser;
    import WebGL = Laya.WebGL;
export class TextAttributes {
        constructor() {
            // 不支持WebGL时自动切换至Canvas
            Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);
            Laya.stage.alignV = Stage.ALIGN_MIDDLE;
            Laya.stage.alignH = Stage.ALIGN_CENTER;
            Laya.stage.scaleMode = "showall";
            Laya.stage.bgColor = "#92a8d1";
            var txt: Text = new Text();
            //给文本的text属性赋值

            // //設置文字內容
            // txt.text = "hello layabox lorem dfasdf";
            // //設置文字顏色
            // txt.color = "#92a8d1";
            // //設置文字大小
            // txt.fontSize = 32;
            // //設置文字背景顏色
            // txt.bgColor = "#ffffff";
            // //設置文字外框顏色
            // txt.borderColor ="#000000"
            // //設置粗體、斜體
            // txt.bold = true;
            // // 設置斜體
            // txt.italic = true;

            // // 設置文字寬高
            // txt.width = 400;
            // txt.height = 400;

            // //設置文本水平居中
            // txt.align ="center";
            // //設置文本垂直居中
            // txt.valign = "middle";
        
            // //設置自動換行
            // txt.wordWrap = true;
            // // 文字加入到場景
            // Laya.stage.addChild(txt);
            this.createTexts();
        }
        private createTexts(): void {
            var t1: Text =  this.createText();
            t1.overflow =Text.VISIBLE;
            t1.pos(10,10);

            var t2: Text =  this.createText();
            t2.overflow =Text.SCROLL;
            t2.pos(10,120);

            var t3: Text =  this.createText();
            t3.overflow =Text.HIDDEN;
            t2.pos(10,210);
        }

        private createText():Text {
            var txt: Text = new Text();
            txt.text =
            "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
                "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
                "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！"; 
            txt.borderColor = "#FFF00";
            txt.size(300, 50);
            txt.fontSize = 20;
            txt.color = "ffffff";
            Laya.stage.addChild(txt);
            return txt ;
        }
    }
// }
//HelloLayabox.init();
// new laya.HelloLayabox();