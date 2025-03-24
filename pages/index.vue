<script setup>
const { loggedIn, user, clear } = useUserSession();

const handleLogout = async () => {
  await clear();
  navigateTo('/login');
};  
</script>

<template>
  <div v-if="loggedIn">
    <h1>Welcome {{ user.name }}!</h1>
    <p>Email {{ user.email }}</p>
    <button class="bg-red-800 text-white cursor-pointer" @click="handleLogout">Logout</button>
  </div>
</template>