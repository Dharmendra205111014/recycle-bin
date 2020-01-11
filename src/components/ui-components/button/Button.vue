<template>
    <button @click="e => $emit('click', e)" class="button" v-bind:class="
        [
            `is-button-${type}`,
            `has-text-${textColor}`,
            {disabled: disabled},
            {grouped: grouped}
        ]">
        <slot/>
    </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

type ButtonType = 'primary' | 'success' | 'danger' | 'link'

@Component({})
export default class Button extends Vue {
    @Prop({ type: String, default: 'primary' }) private readonly type!: ButtonType;
    @Prop({ type: String, default: 'white' }) private readonly textColor!: string;
    @Prop({ type: Boolean, default: false }) private readonly disabled!: boolean;
    @Prop({ type: Boolean, default: false }) private readonly grouped!: boolean;
}
</script>

<style lang="scss">
@mixin gen-button-props($prefix) {
    @each $color-name,
        $color in $baseColors {
            &.#{$prefix}-#{$color-name} {
                background-color: $color;
                // color: invert($color, 80%);
                border-color: lighten($color, 30%);
                &:hover {
                    background-color: lighten($color, 20%);
                }
            }
    }
}

.button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    margin: 0 0 1rem 0;
    border-radius: 0.2rem;
    border: 1px solid;
    cursor: pointer;
    outline: none;
    &.grouped {
        margin-left: 1rem;
    }
    &.disabled {
        @include disabled();
    }
    @include gen-button-props('is-button');
}

</style>
