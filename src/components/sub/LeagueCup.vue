<template>
  <table
    class="table table-dark table-hover table-bordered table-striped opacity-75"
  >
    <thead>
      <tr class="text-center">
        <th scope="col">Home / Away</th>
        <th scope="col">Against</th>
        <th scope="col">Result</th>
        <th scope="col">Possession</th>
        <th scope="col">Total shots</th>
        <th scope="col">Shots on target</th>
        <th scope="col">Total passes</th>
        <th scope="col">Passes completed</th>
        <th scope="col">Tackles won</th>
        <th scope="col">Aerial duels won</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(data, id) in stats" :key="id" class="text-center">
        <td>{{ data.side }}</td>
        <td>{{ data.team }}</td>
        <td @mouseover="hover = true" @mouseleave="hover = false">
          {{ data.result }}
          <br />
          <span v-if="hover">9' Manuel Lanzini 0-1</span>
        </td>
        <td>{{ data.possession }}</td>
        <td>{{ data.shots }}</td>
        <td>{{ data.onTarget }}</td>
        <td>{{ data.passes }}</td>
        <td>{{ data.passesCompleted }}</td>
        <td>{{ data.tackles }}</td>
        <td>{{ data.aerial }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import league from "../../modules/league";
export default {
  data() {
    return {
      stats: league,
      hover: false,
    };
  },
};
</script>