<template>
    <div class="main" >
        <div class="loginheader">
            <div class=" loginbox">
                <div class="logoimg logotext"><img src="../image/logoimg2.png" width="81"
                                                   height="58"></div>
                <div class="logintext">
                    <p class="loginstext">滨海新区</p>
                    <p class="loginbtext">基层医疗卫生服务管理平台</p>
                </div>
            </div>
        </div>
        <div class="loginbody">
            <div class="logincontent">
                <div class="logincontentbox">
                    <div class="loginleftimg"></div>
                    <div class="loginrightbox">
                        <div class="logintitle">欢迎登录</div>
                        <div class="logininput">
                            <i class="xzlicon-font xzliconz-my"></i>
                            <input type="text" v-model="from.email" id="email" maxlength="30" placeholder="请输入账号">
                        </div>
                        <div class="logininput" style="margin-bottom: 40px;">
                            <i class="xzlicon-font xzliconz-lock"></i>
                            <input type="password" v-model="from.password" id="password" maxlength="30" placeholder="请输入密码">
                        </div>
                        <div class="loginbtn" style="width: 150px;">
                            <el-button type="primary" :loading="loginloading" @click.prevent="login" >{{logintext}}</el-button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <footinfo :footinfo="footinfo"></footinfo>
    </div>

</template>

<script>
    import footinfo from './footer.vue';
    import * as login from '../system/login';

    export default {
        name: "login",
        components:{footinfo},
        data(){
            return {
                footinfo:{
                    helpurl:'/indexsss',
                    docurl:'/indexsss'
                },
                from:{
                    email:'',
                    password:'',
                },
                loginloading:false,
                logintext:"登录"
            }
        },
        methods:{
            login:function(){
                let data;
                this.loginloading = true;
                this.logintext = '登录中';
                data = {
                    ...this.from
                }
                setTimeout(()=>{
                   this.loginint(data);
                },1000)
            },
            loginint:function(data){
                let backdata,backmsg;
                backdata = login.loginin(data);
                if( backdata.email != ''){
                    this.$store.commit('changname',backdata.email);
                }
                backmsg = '欢迎回来，'+this.$store.state.user.username ;
                this.$message({
                    message: backmsg,
                    type: 'success'
                });
                this.$router.push('main');
            }
        },
        created(){
            const self = this;
            const keyuplogin = function(){
                if(event.keyCode == '13' && !this.loginloading){
                    console.log('键盘事件')
                    let data;
                    self.loginloading = true;
                    self.logintext = '登录中';
                    data ={
                        ...self.from
                    }
                    setTimeout(()=>{
                        self.loginint(data);
                    },1000)
                    document.removeEventListener('keyup',keyuplogin)
                }
            }
            document.addEventListener('keyup',keyuplogin);
        },
        beforeDestroy(){
            // window.removeEventListener('keyup',keyuplogin)
        }
    }
</script>

<style scoped>

    .btn {
        position: relative;
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding: 7px 15px 6px;
        padding-top: 7px\9;
        padding-bottom: 6px\9;
        margin-bottom: 0;
        transition: all 0s;
        -webkit-transition: all 0s;
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-image: none;
        border: 1px solid transparent;
        border-radius: 4px;
        outline: none;
    }
    .btn-blue {
        background: #4a89dc;
        color: #fff;
        border-color: #5d9cec;
    }
    .loginbtn .btn {
        background-color: #218fde;
    }
    body{
        padding-top: 0px;
    }
    .loginheader {
        height: 120px;
        position: relative;
        background-color: #504f72;
    }

    .loginbox {
        white-space: nowrap;
        position: absolute;
        left: 30px;
        top: 31px;
        height: 58px;
        line-height: 58px;
    }

    .logintext {
        height: 58px;
        line-height: normal;
        color: #fff;
        display: inline-block;
        vertical-align: middle;
    }

    .loginstext {
        font-size: 16px;
        margin-bottom: 8px;
    }

    .loginbtext {
        font-size: 22px;
    }

    .loginbody {
        min-height: 480px;
        padding-top: 60px;
        padding-bottom: 60px;
        background-image: url('../image/loginbg.png');
    }

    .loginbody img {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
    }

    .logincontent {

    }

    .logincontentbox {

        width: 1000px;
        max-height: 560px;
        background-color: #fff;
        margin:0 auto;
        box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.15);
    }
    .logincontentbox:after{
        clear: both;
        display: block;
        content:"";
    }
    .loginleftimg {
        float: left;
        width: 549px;
        height: 560px;
        max-height: 560px;
        background-image: url("../image/loginleft.png");
        background-repeat: no-repeat;
    }

    .loginrightbox {
        float:left;
        padding-top: 60px;
        padding-left: 60px;
    }

    .logintitle {
        font-size: 40px;
        color: #3a3a3a;
        margin-bottom: 40px;
    }

    .loginbtn .btn {
        background-color: #218fde;
    }

    .logininput {
        width: 320px;
        margin-bottom: 20px;
        position: relative;
        height: 40px;
    }

    .logininput .xzlicon-font {
        position: absolute;
        left: 6px;
        font-size: 16px;
        top: 50%;
        color: #bbbbbb;
        margin-top: -9px;
    }

    input::-webkit-input-placeholder {
        color: #bbbbbb;
    }

    input::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: #bbbbbb;
    }

    input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: #bbbbbb;
    }

    input:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #bbbbbb;
    }

    .logininput input {
        display: block;
        width: 100%;
        box-sizing: border-box;
        height: 40px;
        border: none;
        border-bottom: 1px solid #e5e5e5;
        outline: none;
        padding-left: 30px;
    }

    .logininput input:focus {
        border-bottom: 1px solid #218fde;
    }


    .logoimg img{
        width: auto;
    }
    .logoimg {
        display: inline-block;
        padding-top: 0px;
        text-align: left;
        margin-right: 10px;
        height: 58px;
    }
    .logotext {
        display: inline-block;
        vertical-align: middle;
        font-size: 18px;
        color: #fff;
    }

</style>