import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";
import { chartData } from "../data/data";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineGraphProps {
  data: number[];
  label: string;
  backgroundColor?: string;
  borderColor: string;
  labels?: string[];
}
const LineGraph = () =>
  // {
  // data,
  // label,
  // backgroundColor,
  // borderColor,

  // }: LineChartProps
  {
    // const options = (ChartOptions<"line"> = {
    //   responsive: true,
    //   plugins: {
    //     legend: {
    //       display: false,
    //     },
    //     title: {
    //       display: false,
    //     },
    //   },

    //   scales: {
    //     y: {
    //       beginAtZero: true,
    //       grid: {
    //         display: false,
    //       },
    //     },
    //     x: {
    //       grid: {
    //         display: false,
    //       },
    //     },
    //   },
    // });
    // const lineChartData: ChartData<"line", number[], string> = {
    //   labels,
    //   datasets: [
    //     {
    //       fill: true,
    //       label,
    //       data,
    //       backgroundColor,
    //       borderColor,
    //     },
    //   ],
    // };
    const options: ChartOptions<"line"> = {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
        },
      },

      scales: {
        y: {
          beginAtZero: true,
          grid: {
            display: true,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
    };
    return <Line options={options} data={chartData} />;
  };

export default LineGraph;
