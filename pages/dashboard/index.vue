<template>
    <DashboardOverview />
  </template>
  
  <script setup lang="ts">
 definePageMeta({
    layout: 'dashboard',
    middleware: 'auth'
 })
  </script>