<script setup lang="ts">
</script>
<template>
  <div style="margin: 20px;">
    <h3>Roles</h3>
    <div>
      <!-- 指定指令参数: 传入rs时只判断roles -->
      <button v-auth-if:rs="['admin-menu']" type="button">Download</button>
      <button v-auth-if:rs="['admin-menu']" type="button">Upload</button>
      <button v-auth-if:rs="['admin-menu']" type="button">Export</button>
      <button v-auth-if:rs="['admin-menu']" type="button">Import</button>
      <button v-auth-if:rs="['admin']" type="button">Delete</button>
      <p></p>
      <!-- 不指定指令参数: 为了方便指令使用未传入指令参数时混合roles和permissions作为判断依据 -->
      <button v-auth-if="['admin-menu']" type="button">Download</button>
      <button v-auth-if="['admin-menu']" type="button">Upload</button>
      <button v-auth-if="['admin-menu']" type="button">Export</button>
      <button v-auth-if="['admin-menu']" type="button">Import</button>
      <button v-auth-if="['admin']" type="button">Delete</button>
    </div>
  </div>
  <hr>
  <div style="margin: 20px;">
    <h3>Permissions</h3>
    <div>
      <!-- 指定指令参数: 传入ps时只判断permissions -->
      <button v-auth-if:ps="['setting:menu:download']" type="button">Download</button>
      <button v-auth-if:ps="['setting:menu:upload']" type="button">Upload</button>
      <button v-auth-if:ps="['setting:menu:export']" type="button">Export</button>
      <button v-auth-if:ps="['setting:menu:import']" type="button">Import</button>
      <button v-auth-if:ps="['setting:menu:delete']" type="button">Delete</button>
      <p></p>
      <!-- 不指定指令参数: 为了方便指令使用未传入指令参数时混合roles和permissions作为判断依据 -->
      <button v-auth-if="['setting:menu:download']" type="button">Download</button>
      <button v-auth-if="['setting:menu:upload']" type="button">Upload</button>
      <button v-auth-if="['setting:menu:export']" type="button">Export</button>
      <button v-auth-if="['setting:menu:import']" type="button">Import</button>
      <button v-auth-if="['setting:menu:delete']" type="button">Delete</button>
    </div>
  </div>
</template>

<style scoped>
button {
  margin: 8px;
}
</style>