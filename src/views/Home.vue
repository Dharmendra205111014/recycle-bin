<template>
  <div class="home">
    <bnavbar>
      <template v-slot:heading>
        <h1>Heading</h1>
      </template>
      <template v-slot:nav-bar-items>
        <bnavbaritem>Item 1</bnavbaritem>
        <bnavbaritem>Item 2</bnavbaritem>
      </template>
    </bnavbar>
    <bbutton type="success" disabled>Button</bbutton>
    <bbutton @click="clicked" type="danger" grouped>Danger</bbutton>
    <bbutton type="warning" grouped>Warning</bbutton>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { bbutton, bnavbar, bnavbaritem } from '@/components/ui-components/lib'

@Component({
  components: {
    bbutton, bnavbar, bnavbaritem
  }
})
export default class Home extends Vue {
  private clicked (d: any) {
    console.log(d)
  }
}
</script>
