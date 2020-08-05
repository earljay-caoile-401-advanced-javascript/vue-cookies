let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm',
'3pm', '4pm', '5pm', '6pm', '7pm'];

<script>
export default {
  name: 'TheBasics',
  data: () => ({
    users: [],
    hours: [
      'Location',
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
    ],
  }),
};
</script>

<template>
  <v-table :data="users">
    <thead slot="head">
      <span v-for="item in hours" v-bind:key="item">
        <th>{{ item }}</th>
      </span>
    </thead>

    <tbody slot="body" slot-scope="{ displayData }">
      <tr v-for="row in displayData" :key="row.id">
        <td>td1</td>
        <td>td2</td>
        <td>td3</td>
        <td>
          {{ row.address.street }},
          {{ row.address.city }}
          {{ row.address.state }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
