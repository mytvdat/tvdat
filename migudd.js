function GetRequest(e) {
    var u = e; 
    var theRequest = new Object();
    if (u.indexOf("?")>0) {
        var str = u.substr(u.indexOf("?")+1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
function getUrl(e) {
Request = GetRequest(e);
    var t = Request["userid"]
        , r = Request["timestamp"]
        , n = Request["ProgramID"]
        , a = Request["Channel_ID"]
        , o = Request["puData"]
    if (!o)
        return e;
    var s = "2624";
    s = s.split("");
    for (var u = t.split("")[s[0]] || "e", l = r.split("")[s[1]] || "t", c = n.split("")[s[2]] || "c", f = a.split("")[a.split("").length - s[3]] || "n", d = o.split(""), h = [], p = 0; 2 * p < d.length; p++)
        switch (h.push(d[d.length - p - 1]),
        h.push(d[p]),
            p) {
            case 1:
                h.push(u);
                break;
            case 2:
                h.push(l);
                break;
            case 3:
                h.push(c);
                break;
            case 4:
                h.push(f)
        }
    var v = h.join("");
 
    return e + "&ddCalcu=" + v
}
