<template>
    <div class="category">
        <dl class="m-categroy">
            <dt>按拼音首字母选择：</dt>
            <dd v-for="(item,index) in list" :key="index">
                <a :href="'#city-'+item">{{item}}</a>
            </dd>
        </dl>
        <dl class="m-categroy-section" v-for="(item,index) in cityGroup" :key="index" :id="'city-'+index">
            <dt>{{index}}</dt>
            <dd>
                <span v-for="city in item" :key="city.id">{{city.name}}</span>
            </dd>
        </dl>
    </div>

</template>

<script>
export default {
    data(){
        return {
            list:"ABCDEFGHGKLMNPQRSTWXYZ".split(''),
            cityList:[],
            cityGroup:{}
        }

    },
    created(){
        var data = [{
                "id":1,
                "name":"北京",
                "pinyin":"beijing",
                "acronym":"bj",
                "rank":"S",
                "firstChar":"b"
            },
            {
                "id":10,
                "name":"上海",
                "pinyin":"shanghai",
                "acronym":"sh",
                "rank":"S",
                "firstChar":"s"
            },
            {
                "id":20,
                "name":"广州",
                "pinyin":"guangzhou",
                "acronym":"gz",
                "rank":"S",
                "firstChar":"g"
            }]
            var obj = {}
            data.forEach((item,index)=>{
                if(!obj[item.firstChar.toUpperCase()]){
                    obj[item.firstChar.toUpperCase()] = [];
                }
                obj[item.firstChar.toUpperCase()].push(item)
            })
            this.cityGroup = obj
    },
    methods:{

    }
}
</script>

<style lang="scss">
    @import "@/assets/css/changecity/categroy.scss";
</style>