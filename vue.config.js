module.exports = {
	css: {
		loaderOptions: {
			scss: {
                prependData: `@import "~@/components/ui-components/scss/base/variable.scss";
                @import "~@/components/ui-components/scss/base/mixins.scss";
                @import "~@/components/ui-components/scss/base/util.scss";
                `
			},
		}
	}
}