<template>
  <div class="h-100 vh-100">
    <div class="card-deck mx-auto my-auto">
      <div v-for="(item, index) in form.item_list" v-bind:class="[selectable ? 'pointer' : '', item.bg, 'card']" v-on:click="select($event, item.id)" style="max-width: 15rem;">
        <div class="card-body">
          <h5 class="card-title">{{item.title}}</h5>
          <p v-if="item.description !== null" class="card-text">{{item.description}}</p>
          <div v-if="item.button_path !== null && typeof(item.button_path) !== 'undefined'" class="text-center">
              <a v-if="item.button_path !== null && typeof(item.button_path) !== 'undefined'" v-bind:href="base_url + '/' + item.button_path" class="btn btn-primary mx-auto">{{item.button_text}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PickBoxes",
        data() {
          return {
            base_url: process.env.OWN_URL,
            selectable: true,
            form: {
              item_id: '',
              item_list: []
            }
          }
        },
        beforeMount(){
          this.loadList();
        },
        methods: {
          loadList(){
            this.form.item_list = [{id:"1231fjdkfsd", title: "Test", description: "desc", action_path: "logo", bg: ''},{id:"1231fjdkfsd", title: "Test 2", description: "desc 2", action_path: "logo", bg: ''}];
            let el = this;
            this.form.item_list.forEach(function(item){
              item['bg'] = el.get_bg();
            });
          },
          get_bg(){
            return this.pickRandomBackground();
          },
          select(evt, id){
            evt.preventDefault();
            let item = this.form.item_list.filter(function(item) {
              return item.id === id;
            })[0];
            if(typeof(item.action_path) !== "undefined" && item.action_path !== null ) {
              this.$router.push({
                name: item.action_path//item.action_path
              });
            }
          }
        }
    }
</script>

<style scoped>

</style>
