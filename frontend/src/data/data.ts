interface SalesData {
  label: string;
  data: number[];
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
}

const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
];
const salesData: number[] = [1000, 800, 1200, 1500, 1300, 1800];

export const chartData: {
  labels: string[];
  datasets: SalesData[];
} = {
  labels: months,
  datasets: [
    {
      label: "Sales",
      data: salesData,
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

// This is just an example usage, you'll need a charting library to render the chart
console.log(chartData);
