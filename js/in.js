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
var array3=["./dzj/阿含部.txt","./dzj/事汇部·外教部·目录部.txt","./dzj/史传部.txt","./dzj/诸宗部.txt","./dzj/律疏部·论疏部.txt","./dzj/经疏部.txt","./dzj/论集部.txt","./dzj/中观部·瑜伽部.txt","./dzj/释经论部·毗昙部.txt","./dzj/律部.txt","./dzj/密教部.txt","./dzj/经集部.txt","./dzj/大集部.txt","./dzj/宝积部·涅槃部.txt","./dzj/法华部·华严部.txt","./dzj/般若部.txt","./dzj/本缘部.txt","./dzj/古逸部·疑似部.txt","./dzj/index.txt"];
		
var array2=['./qldzj/大乘般若部1-16.txt','./qldzj/大乘宝积部17-20.txt','./qldzj/大乘大集部21-23.txt','./qldzj/大乘华严部24-28.txt','./qldzj/大乘涅槃部29-31.txt','./qldzj/大乘五大部外重译经32-41.txt','./qldzj/大乘单译经42-48.txt','./qldzj/小乘阿含部49-55.txt','./qldzj/小乘单译经56-58.txt','./qldzj/宋元入藏诸大小乘经59-66.txt','./qldzj/大乘律67.txt','./qldzj/小乘律68-77.txt','./qldzj/大乘论78-88.txt','./qldzj/小乘论89-104.txt','./qldzj/宋元续入藏诸论105.txt','./qldzj/西土圣贤撰集106-110.txt','./qldzj/此土著述111-168.txt','./qldzj/index.txt'];
	
var array1=["./dzxxdzj/阿含部/index.txt","./dzxxdzj/本缘部/index.txt","./dzxxdzj/般若部/index.txt","./dzxxdzj/法华部/index.txt","./dzxxdzj/华严部/index.txt","./dzxxdzj/宝积部/index.txt","./dzxxdzj/涅槃部/index.txt","./dzxxdzj/大集部/index.txt","./dzxxdzj/经集部/index.txt","./dzxxdzj/密教部/index.txt","./dzxxdzj/在家律/index.txt","./dzxxdzj/释经论部/index.txt","./dzxxdzj/毘昙部/index.txt","./dzxxdzj/中观部/index.txt","./dzxxdzj/瑜伽部/index.txt","./dzxxdzj/论集部/index.txt","./dzxxdzj/经疏部/index.txt","./dzxxdzj/论疏部/index.txt","./dzxxdzj/诸宗部/index.txt","./dzxxdzj/史传部/index.txt","./dzxxdzj/事汇部/index.txt","./dzxxdzj/外教部/index.txt","./dzxxdzj/目录部/index.txt","./dzxxdzj/古逸部/index.txt","./dzxxdzj/疑似部/index.txt","./dzxxdzj/index.txt"];


  