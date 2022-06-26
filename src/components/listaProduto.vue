<template>
  <div class="div">
      <slot></slot>
  </div>
</template>

<style scoped>
  .div{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	  grid-gap: 20px;
	  padding-inline-start: 0;
    margin: 20px;
  }
</style>




