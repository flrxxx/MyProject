<!--签约统计-->
<template>
    <div name="过渡组件" class="tabs">
        <div class="title">动态组件</div>
        <div class="col-12">
            <AnimationBox >
                <div class="title" title="过渡组件" slot="title">过渡组件</div>
                <div slot="content">
                    <div id="animated-number-demo">
                        <remote-js :jsUrl="animateUrl" :jsLoadCallBack="loaderjs"></remote-js>
                        <input v-model.number="number" type="number" step="20">
                        <p>{{ animatedNumber }}</p>
                    </div>
                </div>
            </AnimationBox>
        </div>
        <div class="col-12">
            <AnimationBox >
                <div class="title" title="色彩动画组件" slot="title">色彩动画组件</div>
                <div slot="content">
                    <remote-js :jsUrl="animateTweenUrl" :jsLoadCallBack="tweenfished"></remote-js>
                    <div class="loading" v-if="colorshow">loading</div>
                    <div v-else>
                    <input v-model="colorQuery" v-on:keyup.enter="updateColor" placeholder="请输入颜色">
                    <button v-on:click="updateColor">Update</button>
                    <p>Preview:</p>
                    <span v-bind:style="{ backgroundColor: tweenedCSSColor }" class="example-7-color-preview"></span>
                    <p>{{ tweenedCSSColor }}</p>
                    </div>
                </div>
            </AnimationBox>
        </div>
    </div>
</template>

<script type="text/javascript">

    import remoteJs from '../chart/remote-js.vue';
    export default {
        name: "qytj",
        data(){
            return {
                animateUrl:"https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js",
                animateTweenUrl:'https://cdn.jsdelivr.net/npm/tween.js@16.3.4',
                animateColorUrl:'',
                number: 0,
                tweenedNumber: 0,
                colorQuery:"",
                color: {
                    red: 0,
                    green: 0,
                    blue: 0,
                    alpha: 1
                },
                tweenedColor: { },
                colorshow:true
            }
        },
        created(){
            //vue实例创建完成
            this.tweenedColor = Object.assign({}, this.color)
        },
        components:{remoteJs},
        computed: {
            animatedNumber: function() {
                return this.tweenedNumber.toFixed(0);
            },
            tweenedCSSColor: function () {
                try{
                    return new Color({
                        red: this.tweenedColor.red,
                        green: this.tweenedColor.green,
                        blue: this.tweenedColor.blue,
                        alpha: this.tweenedColor.alpha
                    }).toCSS()
                }catch(err){
                    return '#000000'
                }

            }
        },
        methods:{
            loaderjs:function(){
                console.log(this);
            },
            tweenfished:function(){
                console.log('tween完成');
                this.animateColorUrl='https://cdn.jsdelivr.net/npm/color-js@1.0.3';
            },
            colorfished:function(){

                var self = this;
                setTimeout(function(){
                    self.colorshow = false;
                    window.Color = net.brehaut.Color;
                },5000);
            },
            updateColor:function(){
                this.color = new Color(this.colorQuery).toRGB()
                this.colorQuery = ''
            },
            render(h){
                var self = this;
                console.log('123');
                return h('script',{
                    attrs: { type: 'text/javascript', src: this.animateColorUrl },
                    on:{
                        load:function(){
                            console.log('secai')
                            self.$emit('colorfished');
                        }
                    }
                })
            }
        },
        watch: {
            number: function(newValue) {
                try{
                    TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
                }catch(err){
                    this.tweenedNumber = this.number;
                }
            },
            color: function () {
                function animate () {
                    if (TWEEN.update()) {
                        requestAnimationFrame(animate)
                    }
                }
                new TWEEN.Tween(this.tweenedColor)
                    .to(this.color, 750)
                    .start()
                animate();
                console.log(this.tweenedColor);
                console.log('检测到变化');
            },
            animateColorUrl:function(){

            }
        }
    }
</script>

<style scoped>
    .example-7-color-preview {
        display: inline-block;
        width: 50px;
        height: 50px;
    }
</style>