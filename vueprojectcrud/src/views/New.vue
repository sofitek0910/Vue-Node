<template>
  <div>
    <h1>New user</h1>
    <user-form @createOrUpdate="createOrUpdate"></user-form>
  </div>
</template>

<script>
import userForm from '../components/UserForm.vue';
import { api } from '../helpers/helpers';
export default {
  name: 'new-user',
  components: {
    'user-form': userForm
  },
  methods: {
    createOrUpdate: async function(user) {
      await api.createuser(user);
      this.flash('user created', 'success');
      this.$router.push(`/users/`);
    }
  }
};
</script>