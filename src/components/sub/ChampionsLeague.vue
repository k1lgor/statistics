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
        <td @mouseenter="hover = true" @mouseleave="hover = false">
          {{ data.result }} <br />
          <span
            v-if="
              hover &&
              data.team === 'Young Boys' &&
              data.side.split(' / ')[0] === 'Away'
            "
          >
            13' Cristiano Ronaldo 0-1 <br />
            66' Nicolas Moumie Ngamaleu 1-1 <br />
            95' Jordan Siebatcheu 2-1
          </span>
          <span
            v-else-if="
              hover &&
              data.team === 'Young Boys' &&
              data.side.split(' / ')[0] === 'Home'
            "
          >
            9' Mason Greenwood 1-0 <br />
            42' Fabian Rieder 1-1
          </span>
          <span
            v-if="
              hover &&
              data.team === 'Atalanta' &&
              data.side.split(' / ')[0] === 'Away'
            "
          >
            12' Josip Ilicic 1-0 <br />
            46' Cristiano Ronaldo 1-1 <br />
            56' Duvan Zapata 2-1 <br />
            91' Cristiano Ronaldo 2-2
          </span>
          <span
            v-else-if="
              hover &&
              data.team === 'Atalanta' &&
              data.side.split(' / ')[0] === 'Home'
            "
          >
            15' Mario Pasalic 0-1 <br />
            28' Merih Demiral 0-2 <br />
            53' Marcus Rashford 1-2 <br />
            75' Harry Maguire 2-2 <br />
            81' Cristiano Ronaldo 3-2
          </span>
          <span
            v-if="
              hover &&
              data.team === 'Villarreal' &&
              data.side.split(' / ')[0] === 'Away'
            "
          >
            78' Cristiano Ronaldo 0-1 <br />
            90' Jadon Sancho 0-2
          </span>
          <span
            v-else-if="
              hover &&
              data.team === 'Villarreal' &&
              data.side.split(' / ')[0] === 'Home'
            "
          >
            53' Paco Alcacer 0-1 <br />
            60' Alex Telles 1-1 <br />
            95' Cristiano Ronaldo 2-1
          </span>
          <span
            v-if="
              hover &&
              data.team === 'Atletico Madrid' &&
              data.side.split(' / ')[0] === 'Away'
            "
          >
            7' Joao Felix 1-0 <br />
            80' Anthony Elanga 1-1
          </span>
          <span
            v-else-if="
              hover &&
              data.team === 'Atletico Madrid' &&
              data.side.split(' / ')[0] === 'Home'
            "
          >
            41' Renan Lodi 0-1
          </span>
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
import CL from "../../modules/CL";
export default {
  data() {
    return {
      stats: CL,
      hover: false,
    };
  },
};
</script>