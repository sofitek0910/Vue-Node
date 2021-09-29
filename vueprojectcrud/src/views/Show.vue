<template>
  <div>
    <h1>Show user</h1>
    <div class="ui labeled input fluid">
      <div class="ui label">
       Name
      </div>
      <input type="text" readonly  :value="user.name"/>
    </div>

     <div class="ui labeled input fluid">
      <div class="ui label">
       Fistname
      </div>
      <input type="text" readonly  :value="user.firstname"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
       Lastname
      </div>
      <input type="text" readonly :value="user.lastname" />
    </div>
    
    <div class="ui labeled input fluid">
      <div class="ui label">
       Username
      </div>
      <input type="text" readonly :value="user.username" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
       Identification
      </div>
      <input type="text" readonly :value="user.identification" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
       Password
      </div>
      <input type="text" readonly :value="user.password" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
       Photo
      </div>
      <input type="text" readonly :value="user.photo" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
       Active
      </div>
      <input type="checkbox" :value="user.active" />
    </div>


    <div class="actions">
      <router-link :to="{ name: 'edit', params: { id: this.$route.params.id }}">
        Edit user
      </router-link>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
export default {
  name: 'show',
  data() {
    return {
      user: ''
    };
  },
  async mounted() {
    this.user = await api.getuser(this.$route.params.id);
  }
};
</script>

<style scoped>
.actions a {
  display: block;
  text-decoration: underline;
  margin: 20px 10px;
}
</style>