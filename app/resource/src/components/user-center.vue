<template>
    <div id="user-center-box">
        <mt-popup v-model="popupVisible" position="left">
            <div class="head">
                <a href="javascript:;"><img src="../global/img/user-center/personal_icon.png" alt=""></a>
                <div class="right">
                    <h4>jingle</h4>
                    <span><i class="icon icon-uniE046"></i>已实名认证</span>
                </div>
            </div>
            <div class="integral">
                <span>积分数量：<strong>9999</strong></span>
                <span class="task">积分任务</span>
            </div>
            <hr>
            <ul class="user-info-list">
                <li><a href="">我的合同</a></li>
                <li class="original"><a href="">我的原创</a></li>
                <li class="evidence"><a href="">我的取证</a></li>
                <hr>
                <li class="config"><a href="">账户设置</a></li>
            </ul>
            <hr>
            <div class="submit-box">
                <a class="quit-btn" href="/logout/logout">退出</a>
            </div>
        </mt-popup>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            popupVisible: false
        }
    },
    computed: {
        isVisible () { 
            return this.$store.getters.isVisible
        }
    },
    watch: {
        'isVisible': function (val) {
            if (this.popupVisible === val && this.popupVisible === false) {
                this.$store.commit('getIsVisible')
            } else {
                this.popupVisible = val
            }
        },
        'popupVisible': function (val) {
            console.log("11111" + val)
        }
    },
    mounted () {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#user-center-box{
    .mint-popup-left{
        padding: 1rem 2rem;
        top: 50％;
        bottom: 0;
        left: 0;
        width: 70%;
        height: 100%;
        background: #fff;
    }
    .head{
        padding-top: 2rem;
        display: flex;
        a{
            flex: 0.6;
            text-align: center;
        }
        .right{
            flex: 1;
            h4{
                font-size: 1.6rem;
                line-height: 2.5rem;
            }
            span{
                display: inline-block;
                border: 1px solid #0fa0e9;
                border-radius: 20rem;
                color: #0fa0e9;
                padding: 0 0.6rem 0 0.3rem;
                font-size: 1.2rem;
                line-height: 1.9rem;
                i{
                    font-size: 1.8rem;
                    display: inline-block;
                    vertical-align: top;
                    padding-top: 0.4rem;
                    padding-right: 0.3rem;
                }
            }
        }
    }
    hr{
        border: 0;
        height: 1px;
        background: #a9a9a9;
        margin: 1.5rem 0;
    }
    .integral{
        display: flex;
        margin-top: 1.5rem;
        font-size: 1.4rem;
        span{
            flex: 1;
        }
        strong{
            color: #0fa0e9;
        }
        .task{
            text-align: right;
            color: #a9a9a9;
        }
    }
    .user-info-list{
        margin-top: 1.5rem;
        li{
            line-height: 3rem;
            width: 30%;
            &:before{
                content: "";
                display: inline-block;
                width: 1.8rem;
                height: 1.8rem;
                background: url(../global/img/user-center/icon_c_contact.png) no-repeat center;
                background-size: contain;
                vertical-align: middle;
                margin-right: 2rem;
            }
            &.original:before{
                background: url(../global/img/user-center/icon_c_work.png) no-repeat center;
                background-size: contain;
            }
            &.evidence:before{
                background: url(../global/img/user-center/icon_c_qz.png) no-repeat center;
                background-size: contain;
            }
            &.config:before{
                background: url(../global/img/user-center/icon_c_setting.png) no-repeat center;
                background-size: contain;
            }
        }
    }
    .submit-box{
        margin: 1rem 0;
        .quit-btn{
            display: block;
            width: 100%;
            line-height: 3rem;
            background: #eb090a;
            color: #fff;
            text-align: center;
        }
    }
}
</style>