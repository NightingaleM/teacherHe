<template>
<div id="essay">
  <router-view></router-view>
</div>
</template>
<script>
import essays from './essays.vue'
import essayPage from './essayPage.vue'
export default {
  name:"essay",
  components: {
    'essays': essays,
		'essayPage':essayPage,
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
