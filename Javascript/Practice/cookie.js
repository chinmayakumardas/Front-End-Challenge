function loop(cname,cvalue,extradays){
    const date=new Date();
    date.setTime(date.getTime()+(extradays*24*60*60*2000))
    let expire="expires in "+date.toUTCString;
    console.log(cname+" "+"expires in"+";path=/");

}