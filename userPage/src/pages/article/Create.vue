<style lang="less" scoped>
@import '../../components/common/color.less';

</style>

<template>
<div>
	<mavon-editor v-model="value" :style="{height: '100%'}" @save="saveArticle"></mavon-editor>
	<div id="article-content"></div>
</div>
</template>

<script>
export default {
	data () {
		return {
				value: '',
				render: ''
		}
	},
	methods: {
		saveArticle (value, render) {
			console.log(value, render)
			document.getElementById('article-content').innerHTML = render
		}
	}
}
</script>
