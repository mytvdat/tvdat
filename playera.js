var m3u8Uri = "";

function startPlayer(uri) {
	uri = uri.split("").reverse().join("");
  	uri = decodeb(uri,hken);
	uri = uri.replace("token=123", "token="+token);
	uri = uri.replace("token="+hkens, "token="+token);
	uri = uri.replace(hken, "");
	m3u8Uri = uri;
}
function edecode(b){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var d,g,m,n,o,h,j,e,c=0,l=0,p="",f=[];if(!b){return b}b+='';do{n=a.indexOf(b.charAt(c++));o=a.indexOf(b.charAt(c++));h=a.indexOf(b.charAt(c++));j=a.indexOf(b.charAt(c++));e=n<<18|o<<12|h<<6|j;d=e>>16&0xff;g=e>>8&0xff;m=e&0xff;if(h==64){f[l++]=String.fromCharCode(d)}else if(j==64){f[l++]=String.fromCharCode(d,g)}else{f[l++]=String.fromCharCode(d,g,m)}}while(c<b.length);p=f.join('');return p}function decodeb(b,a){model="GG";string=edecode(b);a=a+model;a=a.split("").reverse().join("");len=a.length;code="";for(i=0;i<string.length;i++){k=i%len;code+=String.fromCharCode(string.charCodeAt(i)^a.charCodeAt(k))}stra=edecode(code);return stra};

$(document)

