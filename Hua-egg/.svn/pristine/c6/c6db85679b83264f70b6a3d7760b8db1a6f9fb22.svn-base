
/**
 * 
 * @param {*} num 
 */
const  crypto = require('crypto');
const getRandomId = function(num){  
    let digit = num
    if(num <6 ) num = 6;
    let b = [9];
    let c = [1];
    for(let i = 0;i < digit-1;i++){ 
        b.push(9);
        c.push(0) 
    }
    num = parseInt(String(b).replace(/,/g,''))
    n = parseInt(String(c).replace(/,/g,''))
    let someId = parseInt(Math.random()*num+n )
    let someIdArr = [...String(someId)]
    let a = []
    for(let i = 0;i < 6;i++){
        var result = someIdArr[parseInt(Math.random()*6)]
        a.push(result)
    }
    return parseInt(String(a).replace(/,/g,''))
}
const checkSeachData = function(data){
    let obj = {}
    for(let key in data){
        // console.log(data[key])
        if(typeof data[key] === 'string' ||typeof data[key] === 'number'){
            
            if(data[key] !== undefined &&data[key]!==''&&data[key]!==null ){
                obj[key] = data[key]           
            }
        }
        else{
            if(typeof data[key] === 'object'){
              
            }

        }
        
    }
    console.log('objobjobj',obj)
    return obj
}
const getOrderNum = function(){
    let timeTamp = new Date()
    let str ='OD'+timeTamp.getTime().toString().slice(6) + parseInt(Math.random()*9000+1000)
    return str

}
const md5Password = function(password,key){
    console.log('password',typeof password)
    const cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(password, 'utf-8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
    let saltPassword = password + salt
    var md5 = crypto.createHash('md5');
    var result = md5.update(saltPassword).digest('hex');
    return result
}
const decodePassword = function(password,key){
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(password, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
module.exports ={
    getRandomId,
    checkSeachData,
    getOrderNum,
    md5Password,
    decodePassword
}