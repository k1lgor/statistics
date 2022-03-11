<template>
  <div id="home">
    <h1 class="text-center text-danger">
      Manchester United Football Club is a professional football club based in
      Old Trafford, Greater Manchester, England, that competes in the Premier
      League, the top flight of English football. Nicknamed the Red Devils, the
      club was founded as Newton Heath LYR Football Club in 1878, but changed
      its name to Manchester United in 1902. The club moved from Newton Heath to
      its current stadium, Old Trafford, in 1910.
    </h1>
    <table
      class="
        table table-dark table-hover table-bordered table-striped
        opacity-75
      "
    >
      <thead class="text-center">
        <tr>
          <th scope="col">Pos</th>
          <th scope="col">Team</th>
          <th scope="col">P</th>
          <th scope="col">W</th>
          <th scope="col">D</th>
          <th scope="col">L</th>
          <th scope="col">F</th>
          <th scope="col">A</th>
          <th scope="col">GD</th>
          <th scope="col">Points</th>
          <th scope="col">Last 5 games</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in table" :key="data" class="text-center">
          <td v-for="item in data" :key="item">
            {{ item }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import table from "../modules/teams/table";
export default {
  data() {
    return {
      table,
    };
  },
};
</script>

