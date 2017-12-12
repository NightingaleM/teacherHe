<template>
<div id="essay">
  <router-view></router-view>
</div>
</template>
<script>
import topics from './topics.vue'
import topicPage from './topicPage.vue'
export default {
  name:"topic",
  components: {
    'topics': topics,
		'topicPage':topicPage,
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
