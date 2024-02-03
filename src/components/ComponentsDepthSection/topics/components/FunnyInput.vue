<script setup>
  const firstName = defineModel('firstName', {
    required: true,
  })
  const lastName = defineModel('lastName');
</script>

<template>
  <input type="text" v-model="firstName" placeholder="First Name" />
  <input type="text" v-model="lastName" placeholder="Last Name" />
</template>