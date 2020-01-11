<template>
    <div class="nav-bar" v-bind:class="[{shadow: shadow}, {fixed: fixed}]">
        <div class="is-left">
            <div class="logo-container"><slot name="logo"></slot></div>
            <div class="heading-container"><slot name="heading"></slot></div>
        </div>
        <div class="nav-items is-right">
            <ul><slot name="nav-bar-items"></slot></ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class NavBar extends Vue {
    @Prop({ type: Boolean, default: true }) private readonly shadow!: boolean;
    @Prop({ type: Boolean, default: true }) private readonly fixed!: boolean;
}
</script>

<style lang="scss">
.nav-bar {
    padding: 1rem;
    position: relative;
    width: 100%;
    background: white;
    &.shadow {
        // box-shadow: 5px 10px #888888;
        border-bottom: 5px solid;
    }
    &.fixed {
        position: fixed;
        top:0;
        left: 0;
    }
    .nav-items {
        ul {
            list-style: none;
        }
    }
}
</style>
