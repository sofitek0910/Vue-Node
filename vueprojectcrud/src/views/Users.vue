<template>
  <div>
    <h1>Users</h1>
    <table id="users" class="ui celled compact table">
      <thead>
        <tr>
         <th> Firstname</th>
         <th> Lastname</th>
         <th> Username</th>
         <th> Identification</th>
         <th> Password</th>
         <th> Photo</th>
         <th> Active</th>
         <th> <i class="lock open icon"></i></th>
         <th> <i class="edit icon"></i></th>
         <th> <i class="trash icon"></i></th>
         <th colspan="3"></th>
        </tr>
      </thead>
      <tr v-for="(user, i) in users" :key="i">
        
        <td>{{ user.firstname }}</td>
        <td>{{ user.lastname }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.identification }}</td>
        <td>{{ user.password }}</td>
        <td>{{ user.photo }}</td>
        <td>{{ user.active }}</td>
        
        
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'show', params: { id: user._id }}">Show</router-link>
        </td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'edit', params: { id: user._id }}">Edit</router-link>
        </td>
        <td width="75" class="center aligned" @click.prevent="onDestroy(user._id)">
          <a :href="`/users/${user._id}`">Delete</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
export default {
  name: 'users',
  data() {
    return {
      users: []
    };
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm('Are you sure?');
      if (!sure) return;
      await api.deleteuser(id);
      this.flash('user deleted sucessfully!', 'success');
      const newUsers = this.users.filter(user => user._id !== id);
      this.users = newUsers;
    }
  },
  async mounted() {
    this.users = await api.getusers();
  }
};
</script>