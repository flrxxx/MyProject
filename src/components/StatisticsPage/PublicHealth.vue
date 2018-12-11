<!--公卫统计-->
<template>

    <div name="动态组件" class="tabs">
       <div class="title">动态组件</div>
        <div class="col-12">
            <AnimationBox >
                <div class="title" title="动态组件缓存" slot="title">动态组件缓存</div>
                <div slot="content">
                <div class="tabHead" >
                    <a href="javascript:void(0)"
                       v-for="item in tabs"
                       :key="item.class"
                       :class="['tabLinkitem',{ active: selected === item.class }]"
                       v-on:click="selected = item.class"
                    >{{item.name}}</a>
                </div>
                <keep-alive>
                    <component :is="sidebarsTabComponent" :texts="text" :sidebar="sidebar" :check="check" class="whatareyou" style="border:1px solid #197fd3" name="dtzj"></component>
                </keep-alive>
                </div>
            </AnimationBox>
        </div>
    </div>
</template>

<script>
    import first from '../sidebar/sidebar.vue';
    import second from '../sidebar/text.vue';

    function Counter(){
        this.num = 0;
        this.timer = setInterval( () => {this.num++;console.log(this.num)},1000);
    }

    export default {
        name: "PublicHealth",
        data(){
            return {
                tabs:[{
                    name:'tab1',
                    class:'first'
                },{
                    name:'tab2',
                    class:'second'
                }],
                check:true,
                sidebar:[{
                    class: 1,
                    name: 'Cat Ipsum',
                    content: '<p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p>'
                },
                {
                    class: 2,
                    name: 'Hipster Ipsum',
                    content: '<p>Bushwick blue bottle scenester helvetica ugh, meh four loko. Put a bird on it lumbersexual franzen shabby chic, street art knausgaard trust fund shaman scenester live-edge mixtape taxidermy viral yuccie succulents. Keytar poke bicycle rights, crucifix street art neutra air plant PBR&B hoodie plaid venmo. Tilde swag art party fanny pack vinyl letterpress venmo jean shorts offal mumblecore. Vice blog gentrify mlkshk tattooed occupy snackwave, hoodie craft beer next level migas 8-bit chartreuse. Trust fund food truck drinking vinegar gochujang.</p>'
                },
                {
                    class: 3,
                    name: 'Cupcake Ipsum',
                    content: '<p>Icing dessert soufflé lollipop chocolate bar sweet tart cake chupa chups. Soufflé marzipan jelly beans croissant toffee marzipan cupcake icing fruitcake. Muffin cake pudding soufflé wafer jelly bear claw sesame snaps marshmallow. Marzipan soufflé croissant lemon drops gingerbread sugar plum lemon drops apple pie gummies. Sweet roll donut oat cake toffee cake. Liquorice candy macaroon toffee cookie marzipan.</p>'
                }],
                text:"切换到第二个组件",
                selected:'first'
            }
        },
        components:{first,second},
        computed:{
            sidebarsTabComponent:function(){
                return this.selected
            }
        },
        mounted(){
           this.b = new Counter();
        },
        beforeDestroy(){
            console.log(this.b);
            clearInterval(this.b.timer);
        }
    }
</script>

<style scoped lang="less">
    .tabHead{
        height: 40px;
        box-sizing: border-box;
        border-bottom:2px solid #e4e7ed;
        &:after{
            content:"";
            display: block;
            clear:both;
        }
    }
    .tabLinkitem{
        display: block;
        float: left;
        padding: 0px 30px;
        height: 40px;
        box-sizing: border-box;
        border-bottom:2px solid transparent;
        text-align: center;
        min-width: 100px;
        background-color: transparent;
        line-height: 40px;
        color: #999;
        &.active{
            border-color:#1d84d9;
            color: #1d84d9;
        }
    }
</style>