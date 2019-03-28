<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-location" />
            {{$store.state.position.name}}
            <router-link class="changeCity" :to="{name:'changeCity'}">
                切换城市
            </router-link>
            [
                <a href="#">大厂回族自治县</a>
                <a href="#">廊坊</a>
                <a href="#">固安县</a>
            ]
        </div>
        <div class="m-user">
            <router-link class="login" :to="{name:'login'}">
                立即登录
            </router-link>
            <router-link class="register" :to="{name:'register'}">
                注册
            </router-link>
        </div>
    </div>
</template>

<script>
import api from '@/api/index.js'
export default {
    created(){
        // api.getCurPosition().then(res=>{
        //     this.$store.dispatch('setPosition',res.data.data)
            // this.nearCity = res.data.data.nearCity
        // })
    }
}
</script>

<style scoped>

</style>
