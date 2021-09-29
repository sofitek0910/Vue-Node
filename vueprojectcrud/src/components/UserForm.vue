<template>
 <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">{{errorMs}}</p>

    

    <div class="ui labeled input fluid">
      <div class="ui label">
        Firstname
      </div>
      <input type="text" placeholder="Enter firstname" v-model="user.firstname" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        Lastname
      </div>
      <input type="text" placeholder="Enter lastname" v-model="user.lastname" />
    </div>
    
    <div class="ui labeled input fluid">
      <div class="ui label">
        Username
      </div>
      <input type="text" placeholder="Enter username" v-model="user.username"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        Identification
      </div>
      <input type="number" placeholder="Enter identification" v-model="user.identification" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        Password
      </div>
      <input type="text" placeholder="Enter password" v-model="user.password"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
         Photo
      </div>
      <input type="text" placeholder="Enter the url" v-model="user.photo" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        Active
      </div>
      <input type="checkbox" v-model="user.active" />
    </div>


    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'user-form',
  props: {
    user: {
      type: Object,
      required: false,
      default: () => {
        return {
          name: 'test',
          firstname: '',
          lastname: '',
          username: '',
          identification: '',
          password: '',
          photo: '',
          active: true,
        };
      }
    }
  },
  data() {
    return {
      errorMs: '',
      errorsPresent: false,
    };
  },

  methods: {
    onSubmit: function() {
      if ( this.user.firstname === '' || this.user.lastname === '' || this.user.username === '' || this.user.identification === '' || this.user.password === '' || this.user.photo === '') {
        this.errorsPresent = true;
        this.errorMs = "Please fill out all fields!"
      } else if (this.user.username.length<8) {
        this.errorsPresent = true;
        this.errorMs = "Username has to get 8 letters"
      } else if (this.user.password.length<8) {
        this.errorsPresent = true;
        this.errorMs = "Password has to get 8 letters"
      } else {
        this.$emit('createOrUpdate', this.user);
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>