<template>
    <div id="sign-info-box">
        <mt-header fixed title="我的签约">
            <router-link to="/" slot="left">
                <mt-button icon="back">首页</mt-button>
            </router-link>
            <router-link to="/" slot="right">
                <mt-button>筛选</mt-button>
            </router-link>
        </mt-header>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">未完成</mt-tab-item>
            <mt-tab-item id="2">已完成</mt-tab-item>
            <mt-tab-item id="3">我发起</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <div class="file-list">
                    <a href="">
                        <h4>123</h4>
                        <div class="right-info">
                            <strong>待我签</strong>
                            <span>2018-08-28</span>
                        </div>
                        <div class="tag-list">
                            <span>aaaaa</span>
                            <span class="qian">bbbb</span>
                            <strong class="right-sign">催签</strong>
                        </div>
                    </a>
                    <a href="">
                        <h4>123</h4>
                        <div class="right-info">
                            <strong>待我签</strong>
                            <span>2018-08-28</span>
                        </div>
                        <div class="tag-list">
                            <span>aaaaa</span>
                            <span class="qian">bbbb</span>
                        </div>
                    </a>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                22222
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                3333
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
export default {
    data () {
        return {
            selected: '1'
        }
    }
}
</script>
<style lang="less">
#sign-info-box{
    .mint-header{
        background: #464c5c;
    }
    .mint-header.is-fixed{
        height: 45px;
        line-height: 45px;
    }
    .mint-header-button.is-left{
        margin-left: 0.5rem;
    }
    .mint-header-button{
        flex: 0.1;
    }
    .mint-header-title{
        font-size: 1.8rem;
        font-weight: bold;
    }
    .mint-navbar .mint-tab-item.is-selected{
        border-bottom: 3px solid #eb090a;
        color:#eb090a;
    }
    .mint-tab-container{
        border-top: 0.5rem solid #f1f1f1;
        margin-top: 0.2rem;
    }
    .file-list{
        padding: 1rem 0;
        a{
            position: relative;
            display: block;
            border-top: 1px solid #f1f1f1;
            border-bottom: 1px solid #f1f1f1;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
        }
        h4{
            font-size: 1.6rem;
            margin-top: 1.4rem;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
            border-left: 2px solid #099;
        }
        .right-info{
            position: absolute;
            right: 1rem;
            top: 0;
            text-align: right;
            strong{
                position: relative;
                display: inline-block;
                line-height: 2rem;
                background: #0fa0e9; 
                color: #fff;
                padding-left: 1rem;
                padding-right: 0.5rem;
                &::before{
                    content: "";
                    position: absolute;
                    left: -1px;
                    top: 0;
                    width: 0;
                    height: 0;
                    border-top: 12px solid transparent;
                    border-left: 7px solid white;
                    border-bottom: 12px solid transparent;
                }
            }
            span{
                display: block;
                color: #666;
                line-height: 2rem;
            }
        }
        .tag-list{
            border-top: 1px solid #f1f1f1;
            margin: 1.5rem 1rem 0 1rem;
            padding-top: 1rem;
            position: relative;
            span{
                margin-right: 0.5rem;
                &::before{
                    content: "";
                    display: inline-block;
                    width: 1.2rem;
                    height: 1.2rem;
                    background: url(../img/icon_fa.png) no-repeat left center;
                    background-size: contain;
                    vertical-align: middle;
                    margin-right: 0.5rem;
                }
                &.qian{
                    &:before{
                        background: url(../img/icon_qian.png) no-repeat left center;
                        background-size: contain;
                    }
                }
            }
            .right-sign{
                position: absolute;
                right: 0;
                top: 0.7rem;
                display: inline-block;
                text-align: center;
                line-height: 1.5rem;
                color: #eb090a;
                border: 1px solid #eb090a;
                padding: 0 0.3rem;
            }
        }
    }
}
</style>


