<template>
    <li class="nav-bar-item">
        <slot/>
    </li>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class NavBarItem extends Vue {

}
</script>

<style lang="scss">
    .nav-bar-item {
        list-style: none;
        display: inline;
    }
</style>
