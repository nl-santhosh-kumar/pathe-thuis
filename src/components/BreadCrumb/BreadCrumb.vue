<template>
  <main class="main">
    <ul class="breadcrumb">
      <li><a href="/">Home</a></li>
      <li>Show Information</li>
    </ul>
  </main>
</template>
<style scoped lang="scss">
.main {
  background-color: #eee;
  width: 100%;
  height: 100%;
}

ul.breadcrumb {
  padding: 10px 16px;
  list-style: none;
  background-color: #eee;
}

ul.breadcrumb li {
  display: inline;
  font-size: 14px;
}

ul.breadcrumb li + li:before {
  padding: 8px;
  color: var( --vt-c-black);
  content: "/\00a0";
}

ul.breadcrumb li a {
  color: var(--vt-c-yellow);
  text-decoration: none;
}

ul.breadcrumb li a:hover {
  color: var(--vt-c-yellow);
  text-decoration: underline;
  cursor: pointer;
}
</style>
