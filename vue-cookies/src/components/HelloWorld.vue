<script>
let headers = [
  'location',
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  'total',
];
let getRandome = function(min, max) {
  return Math.ceil(Math.random() * (max - min + 1)) + min;
};

export default {
  name: 'TheBasics',
  data: () => ({
    users: ['seattle', 'tokyo', 'dubai', 'paris', 'lima'],
    headers,
    getRandome,
  }),
};
</script>

<template>
  <v-table :data="users">
    <thead slot="head">
      <span v-for="item in headers" v-bind:key="item">
        <th>{{ item }}</th>
      </span>
    </thead>

    <tbody slot="body">
      <tr v-for="row in users" :key="row.id">
        <th>{{ row }}</th>

        <td>{{ getRandome(0, 100) }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
