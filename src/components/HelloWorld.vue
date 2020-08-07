<script>
let headers = [
  "location",
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "total",
];

let getRandome = function (min, max) {
  return Math.ceil(Math.random() * (max - min + 1)) + min;
};

const cities = ["seattle", "tokyo", "dubai", "paris", "lima"];

const getHourlySales = (min = 0, max = 100) => {
  const res = [];

  for (let i = 0; i < headers.length - 2; i++) {
    res.push(getRandome(min, max));
  }

  return res;
};

const allCitySales = [];

for (let i = 0; i < cities.length; i++) {
  const cityInfo = { id: i, cityName: cities[i], sales: getHourlySales() };
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  cityInfo.totalSales = cityInfo.sales.reduce(reducer);
  allCitySales.push(cityInfo);
}

const allTotal = [];
let grandTotal = 0;
for (let i = 0; i < headers.length - 2; i++) {
  let hourlySum = 0;

  for (let j = 0; j < allCitySales.length; j++) {
    const cityInfo = allCitySales[j];
    hourlySum += cityInfo.sales[i];
  }
  grandTotal += hourlySum;
  allTotal.push(hourlySum);
}
allTotal.push(grandTotal);

const notApp = {
  name: "TheBasics",
  data: () => ({
    cities,
    headers,
    getRandome,
    allCitySales,
    allTotal,
    location: "",
    minHourlyCustomers: "",
    maxHourlyCustomers: "",
    avgCookiesSale: "",
  }),
  methods: {
    submit: function (e) {
      console.log(
        this.location,
        this.minHourlyCustomers,
        this.maxHourlyCustomers,
        this.avgCookiesSale
      );
      this.cities = [...this.cities, this.location];
      console.log(this.cities);
      e.target.reset();
    },
  },
};
export default notApp;
</script>

<template>
  <fragment>
    <form v-on:submit.prevent="submit">
      <label for="Location">Location</label>
      <input v-model="location" id="location" type="text" />
      <label for="min">Min Hourly Customers</label>
      <input v-model.number="minHourlyCustomers" id="min" type="number" />
      <label for="max">Max Hourly Customers</label>
      <input v-model.number="maxHourlyCustomers" id="max" type="number" />
      <label for="avg">Average Cookies Per Sale</label>
      <input v-model.number="avgCookiesSale" id="avg" type="number" />
      <button type="submit">Submit</button>
    </form>
    <v-table :data="cities">
      <thead slot="head">
        <fragment v-for="item in headers" v-bind:key="item">
          <th>{{ item }}</th>
        </fragment>
      </thead>

      <tbody slot="body">
        <tr v-for="cityInfo in allCitySales" v-bind:key="cityInfo.cityName">
          <th>{{ cityInfo.cityName }}</th>
          <fragment v-for="sale in cityInfo.sales" v-bind:key="sale">
            <td>{{ sale }}</td>
          </fragment>
          <td>{{ cityInfo.totalSales }}</td>
        </tr>
        <tr>
          <th>HourlyTotal</th>
          <fragment v-for="subtotal in allTotal" v-bind:key="subtotal">
            <td>{{ subtotal }}</td>
          </fragment>
        </tr>
      </tbody>
    </v-table>
  </fragment>
</template>
