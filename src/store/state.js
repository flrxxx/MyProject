

const state = {
    count:0,
    history:[],
    todos:[
        {
            id:1,text:'1w',done:true
        },{
            id:2,text:'2w',done:false
        }
    ],
    user:{
        username:'测试账号',
        useraddress:'沈阳金豪研发中心',
        userimg :require('../image/user.png')
    }
}
export default state;