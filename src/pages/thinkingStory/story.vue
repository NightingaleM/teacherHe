<template>
<div id="story">
  <router-view></router-view>
</div>
</template>
<script>
import storys from './storys.vue'
import storyPage from './storyPage.vue'
export default {
  name:"story",
  components: {
    'storys': storys,
		'storyPage':storyPage,
	},
  data: function(){
    return {

    }
  },
  methods:{
  },
};
</script>

<style scoped lang="less">

</style>
