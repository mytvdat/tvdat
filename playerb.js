function edecode(data){
var keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var a1,a2,a3,h1,h2,h3,h4,bits,i=0,ac=0,dec="",tmp_arr=[];
if(!data){return data}data+='';
do{h1=keyStr.indexOf(data.charAt(i++));
h2=keyStr.indexOf(data.charAt(i++));
h3=keyStr.indexOf(data.charAt(i++));
h4=keyStr.indexOf(data.charAt(i++));
bits=h1<<18|h2<<12|h3<<6|h4;a1=bits>>16&0xff;a2=bits>>8&0xff;a3=bits&0xff;
if(h3==64){tmp_arr[ac++]=String.fromCharCode(a1)}else if(h4==64){tmp_arr[ac++]=String.fromCharCode(a1,a2)}else{tmp_arr[ac++]=String.fromCharCode(a1,a2,a3)}}
while(i<data.length);
dec=tmp_arr.join('');
return dec}
function decodeb(str,key){
if(str){var d=new Date();var n=d.getDate();var h=d.getHours();
var deviceId="0557c39cb03059246c0309ae03f31612";
appVersion="1.1.5";
string=edecode(str);
key=key+deviceId+appVersion+ips+n;
key=key.split("").reverse().join("");
len=key.length;code="";
for(i=0;i<string.length;i++){k=i%len;code+=String.fromCharCode(string.charCodeAt(i)^key.charCodeAt(k))}
stra=edecode(code);
return stra}}

var m3u8Uri = "";

function startPlayer(uri) {
	uri = uri.split("").reverse().join("");
  uri = decodeb(uri,hken);
	uri = uri.replace("token=123", "token="+token);
	uri = uri.replace("token="+hkens, "token="+token);
	uri = uri.replace(hken, "");
	m3u8Uri = uri;
}

$(document)

