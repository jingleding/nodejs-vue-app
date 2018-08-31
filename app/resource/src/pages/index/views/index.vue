<template>
    <div id="index-box">
        <mt-header fixed title="我的签约">
            <i slot="left" @click="$store.commit('getIsVisible')"></i>
        </mt-header>
        <div class="content">
            <h3 class="title">发起签署</h3>
            <div class="contract-list">
                <a href="/">
                    <img src="../img/ind_icon_1.jpg" alt="">
                    <span>借款合同</span>
                </a>
                <a href="/">
                    <img src="../img/ind_icon_2.jpg" alt="">
                    <span>买卖合同</span>
                </a>
                <a href="/">
                    <img src="../img/ind_icon_4.jpg" alt="">
                    <span>租赁合同</span>
                </a>
                <a href="/">
                    <img src="../img/ind_icon_3.jpg" alt="">
                    <span>系统模板</span>
                </a>
                <a href="/">
                    <img src="../img/ind_icon_5.jpg" alt="">
                    <span>文件发起</span>
                </a>
                <a href="/">
                    <img src="../img/ind_icon_6.jpg" alt="">
                    <span>自定义模板</span>
                </a>
            </div>
            <h3 class="title">我的文件</h3>
            <div class="contract-list">
                <a href="/">
                    <mt-badge type="error">10</mt-badge>
                    <img src="../img/ind_icon_7.jpg" alt="">
                    <span>未完成</span>
                </a>
                <a href="/">
                    <img src="../img/ind_icon_8.jpg" alt="">
                    <span>已完成</span>
                </a>
                <a href="/">
                    <img src="../img/ind_icon_9.jpg" alt="">
                    <span>我发起</span>
                </a>
            </div>
            <h3 class="title">
                待签文件
                <router-link to="/signInfo">
                    更多文件>>
                </router-link>
            </h3>
            <div class="file-list">
                <a href="">
                    <h4>123</h4>
                    <div class="right-info">
                        <strong class="for-him">待他签</strong>
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
                        <strong class="right-sign">再催</strong>
                    </div>
                </a>
            </div>
        </div>
        <userCenter></userCenter>
    </div>
</template>
<script>
import axios from 'axios'
// import { Header, Button } from 'mint-ui'
import userCenter from '../../../components/user-center.vue'
export default {
    components: {
        userCenter
    },
    data () {
        return {
            title: "aaaa",
            listData: []
        }
    },
    mounted () {
    },
    methods: {
        getData () {
            axios.get('/api/httpData',{
                params: {
                    pageSize: 1,
                    pageNum: 5,
                    treeId: 16,
                    recommend: 1
                }
            }).then(rs => {
                this.listData = Object.assign([], rs.data.data.data.list)
            })
        },
        visibleShow () {
            this.visible = true
        }
    }
}
</script>
<style lang="less">
#index-box{
    .mint-header{
        background: #464c5c;
    }
    .mint-header.is-fixed{
        height: 45px;
        line-height: 45px;
    }
    .mint-header-button.is-left{
        margin-left: 0.5rem;
        i{
            cursor: pointer;
            display: inline-block;
            width: 22px;
            height: 22px;
            vertical-align: middle;
            background: url(../img/personal_icon.png) no-repeat center;
            background-size: contain !important;
        }
    }
    .mint-header-button{
        flex: 0.1;
    }
    .mint-header-title{
        font-size: 1.8rem;
        font-weight: bold;
    }
    .content{
        padding: 1% 2%;
    }
    .title{
        position: relative;
        font-size: 1.6rem;
        line-height: 2.5rem;
        font-weight: bold;
        text-align: left;
        a{
            position: absolute;
            right: 1rem;
            top: 0.5rem;
            color: red;
            font-size: 1.2rem;
        }
    }
    .contract-list{
        display: flex;
        // justify-content: space-evenly;
        flex-wrap: wrap;
        width: 98%;
        margin: 0 auto 3rem;
        border-bottom: 1px solid #ccc;
        padding-bottom: 3rem;
        a{
            position: relative;
            display: inline-block;
            width: 19%;
            margin: 0.5rem 3%;
            flex-shrink: 0;
            height: auto;
            text-align: center;
        }
        .mint-badge.is-error{
            position: absolute;
            right: -1rem;
            top: -0.8rem;
            display: inline-block;
            padding: 0 0.5rem;
            line-height: 1.6rem;
        }
        img{
            display: block;
            width: 100%;
            border-radius: 1rem;
            box-shadow:0rem 0rem 1rem rgba(0,0,0,0.2);
        }
        span{
            font-size: 1.2rem;
            line-height: 2.5rem;
        }
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
                &.for-him{
                    background: #eb090a;
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
                top: 0.8rem;
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

