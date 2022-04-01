import { faker } from "@faker-js/faker";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  maintainAspectRatio: false,
  scales: {
    y: {
      ticks: {
        display: false,
      },
    },
  },
};

export const labels = [
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
];

export const data = {
  labels,
  tooltips: {
    callbacks: {
      label: function (tooltipItem: any) {
        return tooltipItem.yLabel;
      },
    },
  },
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: 1, max: 10 })),
      borderColor: "#8FE9D0",
      backgroundColor: "#8FE9D0",
    },
    {
      data: labels.map(() => faker.datatype.number({ min: 1, max: 10 })),
      borderColor: "#FFCC21",
      backgroundColor: "#FFCC21",
    },
  ],
};
