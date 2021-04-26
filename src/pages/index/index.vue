<template>
  <div>
    <search-bar
      :disabled="false"
      @click="onSearchBarClick"
    />
    <image-view
      src="https://www.youbaobao.xyz/mpvue-res/big.jpg"
      height="200px"
      mode="scaleToFill"
    />
  </div>
  
</template>

<script>
import ImageView from '../../components/base/imageView.vue'
import SearchBar from '../../components/home/SearchBar.vue'

export default {
  components: { SearchBar, ImageView },
  methods:{
    onSearchBarClick(){
      //跳转搜索页
    }
  }

}
</script>

<style lang="scss" scoped>
</style>
