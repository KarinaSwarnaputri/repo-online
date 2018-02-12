var mulai= setInterval(waktu,1000)
function waktu()
{
    let dt = new Date();
    //////////////
    var hmast = dt.getHours()-1;
    var mmast = dt.getMinutes()-1;
    var smast = dt.getSeconds()-1;
    var noljamast='';
    var nolminast='';
    var noldetast='';
    if(hmast>=0 && hmast<10){noljamast='0'}
    if(hmast>9 && hmast<24){noljamast=''}
    if(mmast>=0 && mmast<10){nolminast='0'}
    if(mmast>9 && mmast<60){nolminast=''}
    if(smast==-1){smast=59}
    if(smast==-2){smast=0}
    if(smast>=0 && smast<10){noldetast='0'}
    if(smast>9 && smast<60){noldetast=''}
    var outputast = noljamast+hmast+':'+nolminast+mmast+':'+noldetast+smast+' * '
    document.getElementById("output6").innerHTML='<h3>'+outputast+'</h3>';

    //////////////
    var hmjkt = dt.getHours()+0;
    var mmjkt = dt.getMinutes()+0;
    var smjkt = dt.getSeconds()+0;
    var noljamjkt='';
    var nolminjkt='';
    var noldetjkt='';
    if(hmjkt>=0 && hmjkt<10){noljamjkt='0'}
    if(hmjkt>9 && hmjkt<24){noljamjkt=''}
    if(mmjkt>=0 && mmjkt<10){nolminjkt='0'}
    if(mmjkt>9 && mmjkt<60){nolminjkt=''}
    if(smjkt>=0 && smjkt<10){noldetjkt='0'}
    if(smjkt>9 && smjkt<60){noldetjkt=''}
    var outputjkt = noljamjkt+hmjkt+':'+nolminjkt+mmjkt+':'+noldetjkt+smjkt+' * '
    document.getElementById("output7").innerHTML='<h3>'+outputjkt+'</h3>';
    ////////////////////

    var hmbei = dt.getHours()+1;
    var mmbei = dt.getMinutes()+1;
    var smbei = dt.getSeconds()+1;
    var noljambei='';
    var nolminbei='';
    var noldetbei='';
    if(hmbei==24) {hmbei=0}
    if(hmbei>=0 && hmbei<10){noljambei='0'}
    if(hmbei>9 && hmbei<24){noljambei=''}
    if(mmbei>=0 && mmbei<10){nolminbei='0'}
    if(mmbei>9 && mmbei<60){nolminbei=''}
    if(smbei==60) {smbei=0}
    if(smbei>=0 && smbei<10){noldetbei='0'}
    if(smbei>9 && smbei<60){noldetbei=''}
    var outputbei = noljambei+hmbei+':'+nolminbei+mmbei+':'+noldetbei+smbei+' * '
    document.getElementById("output8").innerHTML='<h3>'+outputbei+'</h3>';
    ////////////////////

    var hmlon = dt.getHours()+2;
    var mmlon = dt.getMinutes()+2;
    var smlon = dt.getSeconds()+2;
    var noljamlon='';
    var nolminlon='';
    var noldetlon='';
    if(hmlon==24) {hmlon=0}
    if(hmlon==25) {hmlon=1}
    if(hmlon>=0 && hmlon<10){noljamlon='0'}
    if(hmlon>9 && hmlon<24){noljamlon=''}
    if(mmlon>=0 && mmlon<10){nolminlon='0'}
    if(mmlon>9 && mmlon<60){nolminlon=''}
    if(smlon==60) {smlon=0}
    if(smlon==61) {smlon=1}
    if(smlon>=0 && smlon<10){noldetlon='0'}
    if(smlon>9 && smlon<60){noldetlon=''}
    var outputlon = noljamlon+hmlon+':'+nolminlon+mmlon+':'+noldetlon+smlon+' * '
    document.getElementById("output9").innerHTML='<h3>'+outputlon+'</h3>';
    ////////////////////
}