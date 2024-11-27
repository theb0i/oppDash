<template>
  <div class="content">
    <div class="row">
      <div class="col-md-8">
        <edit-profile-form :model="model"> </edit-profile-form>
      </div>
      <div class="col-md-4">
        <user-card :user="user"></user-card>
      </div>
    </div>
  </div>
</template>
<script>
import EditProfileForm from "./Profile/EditProfileForm.vue";
import UserCard from "./Profile/UserCard.vue";

export default {
  components: {
    EditProfileForm,
    UserCard,
  },
  data() {
    return {
      model: {
        company: "H&G EDV",
        email: "Stefan@hundg.de",
        username: "Stefano",
        firstName: "Stefan",
        lastName: "Gajduk",
        address: "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09",
        city: "Melbourne",
        country: "Australia",
        about:
          "Wenn der BVB gewinnt, gebe ich 'ne Runde Bier aus!",
      },
      user: {
        fullName: "Stefan Gajduk",
        title: "IT-Spezialist",
        description: `Ich schlafe selten, ich bin immer wach und liebe meinen Job! Ausschreibungen bis 9Uhr morgen in der Nacht fertig zu machen ist meine Spezialität!`,
      },
    };
  },
};
</script>
<style></style>
