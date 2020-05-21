function setTab(name,cursel,n){ 
for(i=1;i<=n;i++){ 
var menu=document.getElementById(name+i); 
var con=document.getElementById("con_"+name+"_"+i); 
menu.className=i==cursel?" ":""; 
con.style.display=i==cursel?"block":"none"; 


} 
}

function cona(){
document.getElementById('con_menu_1').style.display='block';
}
function conb(){
document.getElementById('con_menu_2').style.display='block';
}
function conc(){
document.getElementById('con_menu_3').style.display='block';
}
function cond(){
document.getElementById('con_menu_4').style.display='block';
}
function cone(){
document.getElementById('con_menu_5').style.display='block';
}
function conf(){
document.getElementById('con_menu_6').style.display='block';
}
function cong(){
document.getElementById('con_menu_7').style.display='block';
}
function conh(){
document.getElementById('con_menu_8').style.display='block';
}
function coni(){
document.getElementById('con_menu_9').style.display='block';
}
function conj(){
document.getElementById('con_menu_10').style.display='block';
}
 
function conk(){
document.getElementById('con_menu_11').style.display='block';
}
 




function GetQueryString(name) {  
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
    var r = window.location.search.substr(1).match(reg);  //获取url中"?"符后的字符
    var context = "";  
    if (r != null)  
         context = r[2];  
    reg = null;  
    r = null;  
    return context == null || context == "" || context == "undefined" ? "" : context;  
}
if(GetQueryString("f")==1){
	document.write("<body onload='cona()'>");
}
if(GetQueryString("f")==2){
	document.write("<body onload='conb()'>");
}
if(GetQueryString("f")==3){
	document.write("<body onload='conc()'>");
}
if(GetQueryString("f")==4){
	document.write("<body onload='cond()'>");
}
if(GetQueryString("f")==5){
	document.write("<body onload='cone()'>");
}
if(GetQueryString("f")==6){
	document.write("<body onload='conf()'>");
}
if(GetQueryString("f")==7){
	document.write("<body onload='cong()'>");
}
if(GetQueryString("f")==8){
	document.write("<body onload='conh()'>");
}
if(GetQueryString("f")==9){
	document.write("<body onload='coni()'>");
}
if(GetQueryString("f")==10){
	document.write("<body onload='conj()'>");
}
if(GetQueryString("f")==11){
	document.write("<body onload='conk()'>");
}
	var a55=GetQueryString("url"); c=decodeURIComponent(a55);
var a56=GetQueryString("url2"); c2=decodeURIComponent(a56);
var a57=GetQueryString("url3"); c3=decodeURI(a57);
var a58=GetQueryString("url4"); c4=decodeURI(a58);
var a59=GetQueryString("url5"); c5=decodeURI(a59);
var a60=GetQueryString("url6"); c6=decodeURI(a60);
var a61=GetQueryString("url7"); c7=decodeURI(a61);
var a62=GetQueryString("url8"); c8=decodeURI(a62);
var a63=GetQueryString("url9"); c9=decodeURI(a63);
var a64=GetQueryString("url10"); c10=decodeURI(a64);
var a65=GetQueryString("url11"); c11=decodeURI(a65);
var a66=GetQueryString("url12"); c12=decodeURI(a66);
var array3=["./dzj/阿含部.txt","./dzj/事汇部·外教部·目录部.txt","./dzj/史传部.txt","./dzj/诸宗部.txt","./dzj/律疏部·论疏部.txt","./dzj/经疏部.txt","./dzj/论集部.txt","./dzj/中观部·瑜伽部.txt","./dzj/释经论部·毗昙部.txt","./dzj/律部.txt","./dzj/密教部.txt","./dzj/经集部.txt","./dzj/大集部.txt","./dzj/宝积部·涅槃部.txt","./dzj/法华部·华严部.txt","./dzj/般若部.txt","./dzj/本缘部.txt","./dzj/古逸部·疑似部.txt","./dzj/index.txt"];
		
var array2=['./qldzj/大乘般若部1-16.txt','./qldzj/大乘宝积部17-20.txt','./qldzj/大乘大集部21-23.txt','./qldzj/大乘华严部24-28.txt','./qldzj/大乘涅槃部29-31.txt','./qldzj/大乘五大部外重译经32-41.txt','./qldzj/大乘单译经42-48.txt','./qldzj/小乘阿含部49-55.txt','./qldzj/小乘单译经56-58.txt','./qldzj/宋元入藏诸大小乘经59-66.txt','./qldzj/大乘律67.txt','./qldzj/小乘律68-77.txt','./qldzj/大乘论78-88.txt','./qldzj/小乘论89-104.txt','./qldzj/宋元续入藏诸论105.txt','./qldzj/西土圣贤撰集106-110.txt','./qldzj/此土著述111-168.txt','./qldzj/index.txt'];
	
var array1=["./dzxxdzj/阿含部/index.txt","./dzxxdzj/本缘部/index.txt","./dzxxdzj/般若部/index.txt","./dzxxdzj/法华部/index.txt","./dzxxdzj/华严部/index.txt","./dzxxdzj/宝积部/index.txt","./dzxxdzj/涅槃部/index.txt","./dzxxdzj/大集部/index.txt","./dzxxdzj/经集部/index.txt","./dzxxdzj/密教部/index.txt","./dzxxdzj/在家律/index.txt","./dzxxdzj/释经论部/index.txt","./dzxxdzj/毘昙部/index.txt","./dzxxdzj/中观部/index.txt","./dzxxdzj/瑜伽部/index.txt","./dzxxdzj/论集部/index.txt","./dzxxdzj/经疏部/index.txt","./dzxxdzj/论疏部/index.txt","./dzxxdzj/诸宗部/index.txt","./dzxxdzj/史传部/index.txt","./dzxxdzj/事汇部/index.txt","./dzxxdzj/外教部/index.txt","./dzxxdzj/目录部/index.txt","./dzxxdzj/古逸部/index.txt","./dzxxdzj/疑似部/index.txt","./dzxxdzj/index.txt"];

var array30=["../10/ziz/兵家.txt","../10/ziz/法家.txt","../10/ziz/农家.txt","../10/ziz/算法.txt","../10/ziz/诸子.txt","../10/ziz/ziz2.txt"];
		
var array20=["../10/yuz/春秋.txt","../10/yuz/乐经.txt","../10/yuz/礼经.txt","../10/yuz/启蒙蒙学.txt","../10/yuz/尚书.txt","../10/yuz/诗经.txt","../10/yuz/四书.txt","../10/yuz/五经总义.txt","../10/yuz/小学.txt","../10/yuz/孝经.txt","../10/yuz/修身治家.txt","../10/yuz/语录.txt","../10/yuz/yuz2.txt"];
	
var array10=["../10/dz/正统道藏洞神部.txt","../10/dz/正统道藏洞玄部.txt","../10/dz/正统道藏洞真部.txt","../10/dz/正统道藏太平部.txt","../10/dz/正统道藏太清部.txt","../10/dz/正统道藏太玄部.txt","../10/dz/正统道藏续道藏.txt","../10/dz/正统道藏正一部.txt","../10/dz/藏外.txt","../10/dz/dz.txt","../10/yz/yz2.txt"];
var klanj2=["../11/klanj/klanj2.txt",""];
var shengj2=['../11/shengj/旧约 - 创世记(Genesis).txt','../11/shengj/旧约 - 出埃及记(Exodus).txt','../11/shengj/旧约 - 利未记(Leviticus).txt','../11/shengj/旧约 - 民数记(Numbers).txt','../11/shengj/旧约 - 申命记(Deuteronomy).txt','../11/shengj/旧约 - 约书亚记(Joshua).txt','../11/shengj/旧约 - 士师记(Judges).txt','../11/shengj/旧约 - 路得记(Ruth).txt','../11/shengj/旧约 - 撒母耳记上(1 Samuel).txt','../11/shengj/旧约 - 撒母耳记下(2 Samuel).txt','../11/shengj/旧约 - 列王记上(1 Kings).txt','../11/shengj/旧约 - 列王记下(2 Kings).txt','../11/shengj/旧约 - 历代记上(1 Chronicles).txt','../11/shengj/旧约 - 历代记下(2 Chronicles).txt','../11/shengj/旧约 - 以斯拉记(Ezra).txt','../11/shengj/旧约 - 尼希米记(Nehemiah).txt','../11/shengj/旧约 - 以斯帖记(Esther).txt','../11/shengj/旧约 - 约伯记(Job).txt','../11/shengj/旧约 - 诗篇(Psalms).txt','../11/shengj/旧约 - 箴言(Proverbs).txt','../11/shengj/旧约 - 传道书(Ecclesiastes).txt','../11/shengj/旧约 - 雅歌(Song of Songs).txt','../11/shengj/旧约 - 以赛亚书(Isaiah).txt','../11/shengj/旧约&nbsp;-&nbsp;耶利米书(Jeremiah).txt','../11/shengj/旧约 - 耶利米哀歌(Lamentations).txt','../11/shengj/旧约 - 以西结书(Ezekiel).txt','../11/shengj/旧约 - 但以理书(Daniel).txt','../11/shengj/旧约 - 何西阿书(Hosea).txt','../11/shengj/旧约 - 约珥书(Joel).txt','../11/shengj/旧约 - 阿摩司书(Amos).txt','../11/shengj/旧约 - 俄巴底亚书(Obadiah).txt','../11/shengj/旧约 - 约拿书(Jonah).txt','../11/shengj/旧约 - 弥迦书(Micah).txt','../11/shengj/旧约 - 那鸿书(Nahum).txt','../11/shengj/旧约 - 哈巴谷书(Habakkuk).txt','../11/shengj/旧约 - 西番雅书(Zephaniah).txt','../11/shengj/旧约 - 哈该书(Haggai).txt','../11/shengj/旧约 - 撒迦利亚书(Zechariah).txt','../11/shengj/旧约 - 玛拉基书(Malachi).txt','../11/shengj/新约 - 马太福音(Matthew).txt','../11/shengj/新约 - 马可福音(Mark).txt','../11/shengj/新约 - 路加福音(Luke).txt','../11/shengj/新约 - 约翰福音(John).txt','../11/shengj/新约 - 使徒行传(Acts).txt','../11/shengj/新约 - 罗马书(Romans).txt','../11/shengj/新约 - 哥林多前书(1 Corinthians).txt','../11/shengj/新约 - 哥林多后书(2 Corinthians).txt','../11/shengj/新约 - 加拉太书(Galatians).txt','../11/shengj/新约 - 以弗所书(Ephesians).txt','../11/shengj/新约 - 腓立比书(Philippians).txt','../11/shengj/新约 - 歌罗西书(Colossians).txt','../11/shengj/新约 - 帖撒罗尼迦前书(1 Thessalonians).txt','../11/shengj/新约 - 帖撒罗尼迦后书(2 Thessalonians).txt','../11/shengj/新约 - 提摩太前书(1 Timothy).txt','../11/shengj/新约 - 提摩太后书(2 Timothy).txt','../11/shengj/新约 - 提多书(Titus).txt','../11/shengj/新约 - 腓利门书(Philemon).txt','../11/shengj/新约 - 希伯来书(Hebrews).txt','../11/shengj/新约 - 雅各书(James).txt','../11/shengj/新约 - 彼得前书(1Peter).txt','../11/shengj/新约 - 彼得后书(2Peter).txt','../11/shengj/新约 - 约翰壹书(1 John).txt','../11/shengj/新约 - 约翰贰书(2 John).txt','../11/shengj/新约 - 约翰叁书(3 John).txt','../11/shengj/新约 - 犹大书(Jude).txt','../11/shengj/新约 - 启示录(Revelation).txt','../11/shengj/shengj.txt'];
