<template>

<div class="m-product-categroy">
    <dl class="classic">
        <dt>分类</dt>
        <dt>全部</dt>
        <dd v-for="(item) in classicList" :key="item.type">
            <m-select :name="item.title" :list="item.subList" />
        </dd>
    </dl>
    <dl class="classic">
        <dt>区域</dt>
        <dt>全部</dt>
        <dd v-for="(item) in areaList" :key="item.type">
            <m-select :name="item.title" :list="item.subList" />
        </dd>
    </dl>
</div>
</template>

<script>
import MSelect from './select.vue'
export default {
    data(){
        return {
            classicList:[{
                "title": "美食",
                "type": "food",
                "subList": [{
                    "name": "日本菜",
                    "id": "Japan"
                    },{
                    "name": "饮品店",
                    "id": "drink"
                    }]
                }, {
                "title": "酒店住宿",
                "type": "hotal",
                "subList": [{
                    "name": "温泉酒店",
                    "id": "hot_spring"
                    },{
                    "name": "经济型酒店",
                    "id": "economy"
                    }]
            }],
            areaList:[{
                "title": "推荐商圈",
                "subList": [{
                    "name": "望京",
                    "id": 120000
                    }, {
                    "name": "昌平",
                    "id": 12222
                    }]

            }]

        }
    },
    components:{
        MSelect
    }
}
</script>

<style scoped>

</style>