<template>
  <div>
    <div id="header" class="text-center mt-4 p-lg-4 row-cols-5">
      <router-link
        tag="li"
        active-class="active"
        exact
        class="btn btn-danger"
        :to="{ name: 'home' }"
      >
        Home
      </router-link>
      <router-link
        tag="li"
        active-class="active"
        class="btn btn-danger"
        :to="{ name: 'PL' }"
      >
        Premier League
      </router-link>
      <router-link
        tag="li"
        active-class="active"
        class="btn btn-danger"
        :to="{ name: 'FA' }"
      >
        FA Cup
      </router-link>
      <router-link
        tag="li"
        active-class="active"
        class="btn btn-danger"
        :to="{ name: 'LC' }"
      >
        League Cup
      </router-link>
      <router-link
        tag="li"
        active-class="active"
        class="btn btn-danger"
        :to="{ name: 'CL' }"
      >
        Champions League
      </router-link>
    </div>
  </div>
</template>