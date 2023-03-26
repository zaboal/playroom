((...m)=>{
    var html = () => {
        m[1].querySelector('html').innerHTML = `<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru"><head> <meta charset="UTF-8"/> <meta name="viewport" content="width=device-width, initial-scale=1.0"/> <title>Mobile</title> <link rel="icon" href="https://org.zaboal.name/assets/logo-playroom_green_black-border.svg"/></head><body> <div id="mobile" class="error"> <div class="header"> <img src="https://org.zaboal.name/assets/logo-playroom_green.svg" alt="Логотип «Игровой»"/> </div><div class="info"> <b>Перезайдите с компьютера. На наших серверах играть можно только с него.<big>(⌐■_■)</big></b> </div><div class="footer"> <h1>Зажигин Богдан Алексеевич</h1> </div></div></body></html>`;
        m[1].head.appendChild(m[1].createElement('style'));
        var styleSheets = m[1].styleSheets[0];
        var cssCode = `@import url(https://fonts.googleapis.com/css?family=Martian+Mono);:root{--main-b-color:#04030F;--main-g-color:#04F30F;--main-text-g:#04F30F;--main-text-b:#04030F;--main-width:1900px;--main-height:500vh;--error-width:1900px;--error-height:100vh}*{margin:0;padding:0;box-sizing:border-box;font-family:"Martian Mono",monospace;font-size:14pt}body{overflow-x:hidden}body,html,div.error#mobile{background:var(--main-g-color);display:flex;min-height:var(--error-height);width:100%;height:100%;flex-direction:column}div.error#mobile>.header{position:fixed;height:32px;width:100%;background:var(--main-b-color);z-index:999999999999}div.error#mobile>.header>img{height:100%;margin:auto;display:block;padding:8px 0 8px 0}div.error#mobile>.info{margin-top:32px;background:var(--main-g-color);width:100%}div.error#mobile>.info>b{padding:64px 64px 0 64px;display:block;max-width:100%;font-size:32px;line-height:1.25;letter-spacing:1px;overflow-wrap:break-word}div.error#mobile>.info>b>big{display:block;padding-top:44px;font-size:32px;color:rgba(0,0,0,.25)}div.error#mobile>.footer{display:block;min-height:32px;width:100%;background:var(--main-b-color);color:var(--main-text-g);margin-top:auto;text-align:center}div.error#mobile>.footer>h1{letter-spacing:4px;width:100%;height:100%;padding:5px 0 8px 0;text-decoration:none;text-transform:none}`;

        cssCode.split(/(@[^;]+;)|(\})/g).filter((rule)=> rule && rule.trim().length > 0).forEach(function(rule,index,array) {
            if (index == 0) {
                styleSheets.insertRule(rule, styleSheets.cssRules.length);
            } else {
                if(index % 2 == 1) {
                    styleSheets.insertRule(rule + array[index+1], styleSheets.cssRules.length);
                }
            }
        });
    };
    if(m[0] === m[0].parent) {
        var nv = m[0].navigator.userAgent||m[0].navigator.vendor||m[0].opera;
        nv = (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(nv)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(nv.substr(0,4)));
        if(nv || m[0].navigator.maxTouchPoints || 'ontouchstart' in m[1]) {
            html();
            return;
        }
    } else {
        html();
    }
    return;
})(window,document);