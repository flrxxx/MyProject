export const guid = function(){
    function S4() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}
export const loginin = function(data){
    let loginID,logininfo;
    loginID =  guid();
    localStorage.setItem('loginID',loginID);
    logininfo ={
        ...data,
        loginID
    }
    return logininfo;
}
export const loginout = ()=>{
    localStorage.removeItem('loginID');
}