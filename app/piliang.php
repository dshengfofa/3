<meta charset="utf-8">

<?php 
$w10=urldecode($_GET['file']);
$shu=$_POST['shu'];
$shu2=$_POST['shu2'];
$fi=$_POST['fi'];
$file2=$_POST['wapfile'];





if(!empty($w10)){
$txt=file_get_contents("999.txt","w");
   if(!file_exists("./6/{$w10}.js")){
$js=fopen("./6/{$w10}.js","w");
 $text=$txt;
//$text=utf8_encode($text);
fwrite($js,"if(GetQueryString('v')==8000){document.write(");
fwrite($js,'"'.$text.'");}');
//fwrite($js,$text);

fclose($js);
  
}
   }


function read_all_dir ( $dir ){
 
    $result = array();
    $handle = opendir($dir);//读资源
    if ($handle){
        while (($file = readdir($handle)) !== false ){
            if ($file != '.' && $file != '..'){
                $cur_path = $dir . "/" . $file;
                if (is_dir($cur_path )){//判断是否为目录，递归读取文件
                    //echo "if({$result['dir'][$cur_path]} = read_all_dir({$cur_path} )){";
					$result[1][$cur_path] = read_all_dir($cur_path );
					//$b=preg_replace("/[0-9]/", '99', $result[1][$cur_path]);
					//print_r($result[1][$cur_path]);
				//$files[$i]["time"] = date("Y-m-d H:i:s",filemtime($file));
                }else{
					//echo "if({$result['file']} = {$cur_path}){";
					
                    $result[2][] = $cur_path;
				   
					
                }
            }
        }
        closedir($handle);
    }
    return $result;
}
$filename="./yulu";
$files =read_all_dir($filename);
//print_r($files[2]);

$file=fopen("777.txt","w");
sort($files[2]);
 //array_multisort($time,SORT_DESC,SORT_STRING, $files[2]);
 foreach($files[2] as $k=>$value){
	 //echo $value;
	$z=explode("/",$value);
	//if(strpos($z,"js")){ $mm2=str_replace("document.write","",$mm2);}
 $dd=$z[2];
	//$dd=str_replace(".js","",$dd);
	$dd=iconv('gbk', 'utf-8', $dd);
	//echo $dd;
	if(strpos($dd,"js")){ 
	//$dd=preg_replace("/[a-z]/","",$dd);
	//$dd=str_replace(".","",$dd);
	
	//sort($dd);
	//$dd2=$dd.".js";
	//echo $dd;
$b=$dd;
$b=iconv('utf-8', 'gbk', $b);
echo $b;	                 	       
$dirfile=file_get_contents("{$filename}/{$b}");
$k=$k-$shu;
$kk=$k+1;
//echo $dirfile;

//$dirfile=str_replace("==800{$k}){document.write","==800{$kk}){document.write",$dirfile);

//$dirfile=str_replace("./{$b}","../../6/fojingqianshi/{$b}",$dirfile);
$dirfile=str_replace("../jingji","../../jingji",$dirfile);
if($shu2==1){
file_put_contents("{$filename}/{$b}",$dirfile);
}

//echo $dirfile;

	$ddd="$ddd{$k}";
	//echo "$ddd{$k}";
	$ddd=$dd;
	global $ddd;
	fwrite($file,$dd);
	fwrite($file,"<br>");
	echo "<br>"; 
	echo $k;
	}
	echo "<br>";
}  


fclose($file);
$aa=file_get_contents("777.txt");
//$aa=iconv('utf-8', 'gbk', $aa);
$bb=explode("<br>",$aa);
$w1=$aa[1];
//$w1=iconv('gbk', 'utf-8', $w1);
global $w1;
$w3=$aa[3];
global $w3;
//echo $www[5];
$w5=$aa[5];
global $w5;
$w7=$aa[7];
global $w7;
$w9=$aa[9];
global $w9;
$w11=$aa[11];
global $w11;
$w13=$aa[13];
global $w13;
$w15=$aa[15];
global $w15;
$w17=$aa[17];
global $w17;
$w19=$aa[19];





if($_POST['sub2']){echo "<script>window.document.location.href='333.php'</script>";}




?>
<meta charset="utf-8">
<form action="" method="post">
<input type="submit" name="sub2" value="返回"><br>
目录:<br>
shu:<input type="text" name="shu" value="<?php echo $shu; ?>" style="width:10%;">
index:<input type="text" name="fi" value="<?php echo $fi; ?>" style="width:10%;">
wapfile:<input type="text" name="wapfile" value="<?php echo $file2; ?>" style="width:10%;">
800{$k}:<input type="text" name="shu2" value="<?php echo $shu2; ?>" style="width:10%;">
value:1 
4:<input type="text" name="file" value="<?php echo $file; ?>" style="width:10%;">
file:<input type="text" name="e2" value="<?php echo $fi; ?>" style="width:10%;">

<br>
文件js<br>
3:<input type="text" name="d2" value="<?php echo $d2; ?>" style="width:10%;">
5:<input type="text" name="f2" value="<?php echo $f2; ?>" style="width:10%;">
6:<input type="text" name="g2" value="<?php echo $g2; ?>" style="width:10%;"><br>
7:<input type="text" name="h2" value="<?php echo $h2; ?>" style="width:10%;">
8:<input type="text" name="i2" value="<?php echo $i2; ?>" style="width:10%;">
9:<input type="text" name="j2" value="<?php echo $j2; ?>" style="width:10%;">
10:<input type="text" name="k2" value="<?php echo $k2; ?>" style="width:10%;"><br>
<input type="submit" name="sub6" value="重置">
<input type="submit" name="sub" value="提交html">
<input type="submit" name="sub5" value="提交wap">
<input type="submit" name="sub3" value="静态页面2">
</form>
<?php
$b=$_POST['b'];$b2=$_POST['b2'];
$c=$_POST['c'];$c2=$_POST['c2'];
$d=$_POST['d'];$d2=$_POST['d2'];
$e=$_POST['e'];$e2=$_POST['e2'];
$f=$_POST['f'];$f2=$_POST['f2'];
$g=$_POST['g'];$g2=$_POST['g2'];
$h=$_POST['h'];$h2=$_POST['h2'];
$i=$_POST['i'];$i2=$_POST['i2'];
$j=$_POST['j'];$j2=$_POST['j2'];
$k=$_POST['k'];$k2=$_POST['k2'];
if($_POST['sub']){
$a=fopen("./6/{$fi}.html","w");

fwrite($a,"<html lang='en'>
<head>
<meta charset='utf-8'>
<meta name='viewport' content='width=device-width, initial-scale=1'>
<meta name='applicable-device' content='pc'>
<meta name='keywords' content='佛法,东升佛法,冬参佛法,视频讲解 东升' />
<meta name='description' content='东升佛法--是一个佛学网站 主要呈现视频 佛学经文 供大家学习' />
<title>东升佛法-主页</title>
<link href='title.ico' rel='shortcut icon'/>
<link href='./css/ys.css' rel='stylesheet' type='text/css'>
</head>
 <body>
 <script type='text/javascript' src='./js/in.js'>
</script>
 <div class='header'><p>东升佛法</p></div>
   <div class='nav'>
<script src='./js/nav.js'></script>
<script>
var system ={  
win : false,  
mac : false,  
xll : false  
};  

var p = navigator.platform;  
system.win = p.indexOf('Win') == 0;  
system.mac = p.indexOf('Mac') == 0;  
system.x11 = (p == 'X11') || (p.indexOf('Linux') == 0);  

if(system.win||system.mac||system.xll){  
}else{  
window.location.href='{$file2}wap.html';  
}  

</script>
 </div>
 <div class='nav'>");
 
 fwrite($a,"<ul>");
foreach($files[2] as $k=>$value){
	 //echo $value;
	$z=explode("/",$value);
	//if(strpos($z,"js")){ $mm2=str_replace("document.write","",$mm2);}
 $dd=$z[3];
	//$dd=str_replace(".js","",$z[2]);
	$dd=iconv('gbk', 'utf-8', $dd);
	//echo $dd;
	if(strpos($dd,"js")){ 
	$dd=preg_replace("/[a-z]/","",$dd);
	$dd=str_replace(".","",$dd);
    $k=$k-$shu;
	$kk=$k+1;
	global $k;
fwrite($a,"<li id='menu{$kk}'><a href='{$fi}.html?nav=62000&f={$kk}&v=800{$kk}'>{$dd}</a></li>");	

	
	}

}  
fwrite($a,"</ul>
	
 </div>
 <div id='main'>
  <div class='left'>
  <div class='g'><li></li></div>");
 
 foreach($files[2] as $k=>$value){
	 //echo $value;
	$z=explode("/",$value);
	//if(strpos($z,"js")){ $mm2=str_replace("document.write","",$mm2);}
 $dd=$z[3];
	//$dd=str_replace(".js","",$z[2]);
	$dd=iconv('gbk', 'utf-8', $dd);
	//echo $dd;
	if(strpos($dd,"js")){ 
	$dd=preg_replace("/[a-z]/","",$dd);
	$dd=str_replace(".","",$dd);
$k=$k-$shu;
$kk=$k+1;
fwrite($a," <div id='con_menu_{$kk}' style='display:none'>
<div class='shipin'>
<div class='list_sp'>
				<ul id='idData_{$kk}'>
					        
				 <center><script type='text/javascript' src='./{$fi}/{$dd}.js'></script></center>");     
fwrite($a,"</ul>
			</div>
<script src='ZLpages.js'></script>     	
<center><div class='pages' id='barcon_{$kk}'></div></center>
<script> 
goPage(1,150,{$kk}); 
</script> 

</div>
</div>");
	
	}

}  
fwrite($a,"
  </div >
   
   </div>");
fwrite($a," 
 <div id='footer'>
</div>

 </body>
 </html>  ");
fclose($a);

echo "";
}


if($_POST['sub3']){
$a=fopen("./3/2.html","w");
fwrite($a,"<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
<html xmlns='http://www.w3.org/1999/xhtml'>
<head>
<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
<title>无标题文档</title>
<style type='text/css'>

#head{
height:50px;
    width:960px;
	margin:0 auto;
     background:#ECF5FF;
     margin-bottom:10px; 
	 opacity:0.9;
	 border:1px solid #ECF5FF; 
 }
 .nav{
     width:960px;
	 height:30px;
     margin:0 auto;
     margin-bottom:10px;
	 opacity:0.9;
	 border:1px solid #CCCC66;
 }
#content{

width:960px;
background:#FFFFFF;
height:800px;

 margin:0 auto;

}
#left{

width:150px;
height:800px;
background:#CCCC66;
float:left;
  margin-bottom:10px;
   
}
#c{

width:650px;
height:800px;
background:#FFFFFF;
float:left;
margin-left:5px;
  margin-bottom:10px;
 border:1px solid #CCCC66; 
}
#right{

width:150px;
height:800px;
background:#339966;
float:right;
  margin-bottom:10px;
}
#foot{

width:960px;
background:#0099CC;
height:40px;
mrgin-top:10px;
 margin:0 auto;
 margin-top:10px;
}
</style>
</head>
<body>
<div id='head'>head</div>
<div class='nav'>nav</div>
<div id='content'>
  <div id='left'>left</div>
  <div id='c'>content</div>
  <div id='right'>rigth</div>
</div>
<div id='foot'>foot</div>
</body>
</html>
");
}



if($_POST['sub5']){
$a=fopen("./6/{$file2}wap.html","w");
fwrite($a,"<html>
<head>
<meta charset='utf-8'>
<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0,user-scalable=0' />
<title>东升佛法-&#31227;&#21160;&#29256;</title>
<link href='title.ico' rel='shortcut icon'/>
<link href='./css/wapys.css' rel='stylesheet' type='text/css'>


 </head>
 <body>
  <script type='text/javascript' src='./js/wapin.js'>


</script>

 <div class='header'><p>东升佛法</p></div>
 <div id='nav'>");
 fwrite($a,"<ul>");
foreach($files[2] as $k=>$value){
	 //echo $value;
	$z=explode("/",$value);
	//if(strpos($z,"js")){ $mm2=str_replace("document.write","",$mm2);}
 $dd=$z[3];
	//$dd=str_replace(".js","",$z[2]);
	$dd=iconv('gbk', 'utf-8', $dd);
	//echo $dd;
	if(strpos($dd,"js")){ 
	$dd=preg_replace("/[a-z]/","",$dd);
	$dd=str_replace(".","",$dd);
$k=$k-$shu;
$kk=$k+1;
fwrite($a,"<li id='menu{$kk}'><a href='{$file2}wap.html?nav=62000&f={$kk}&v=800{$kk}'>{$dd}</a></li>");	

	
	}

}  
fwrite($a,"</ul>
	
 </div>
 <div id='main'>
  <div class='left'>
  <div class='g'><li></li></div>");
 foreach($files[2] as $k=>$value){
	 //echo $value;
	$z=explode("/",$value);
	//if(strpos($z,"js")){ $mm2=str_replace("document.write","",$mm2);}
 $dd=$z[3];
	//$dd=str_replace(".js","",$z[2]);
	$dd=iconv('gbk', 'utf-8', $dd);
	//echo $dd;
	if(strpos($dd,"js")){ 
	$dd=preg_replace("/[a-z]/","",$dd);
	$dd=str_replace(".","",$dd);
$k=$k-$shu;
$kk=$k+1;
fwrite($a," <div id='con_menu_{$kk}' style='display:none'>
<div class='shipin'>
<div class='list_sp'>
				<ul id='idData_{$kk}'>
					        
				 <center><script type='text/javascript' src='./{$fi}/{$dd}.js'></script></center>     
                 	       

  
				</ul>
			</div>
<script src='ZLpages.js'></script>     	
<center><div class='pages' id='barcon_{$kk}'></div></center>
<script> 
goPage(1,150,{$kk}); 
</script> 

</div>
</div>");
	
	}

}  
fwrite($a,"
  </div >
   
   </div>");
 
fwrite($a,"<script type='text/javascript' src='./js/footer.js'></script>
 </body>
 </html>     

");
}























?>








 
   

