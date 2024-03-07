// @ts-nocheck
import React from "react";
import Chart from "react-apexcharts";

interface PieChartProps {
  labels: string[];
  series: number[];
  colors?: string[];
  legend?: boolean;
}

//const PieChart: React.FC<PieChartProps> = ({ dataID, labels, series }) => {
const PieChart = (props: { dataId: number; labels: any; series: any }) => {
  const { dataId, labels, series } = props;

  console.log("dataID", dataId);
  console.log("labels", labels);
  console.log("series", series);

  let options = {};

  if (dataId === 1) {
    options = {
      labels: [
        "Blastin",
        "Macitentan",
        "MACITENTAN [ROUTE CODE IM]",
        "Nasal Nicotine solution",
        "ROFLUMILAST",
        "Selxipag",
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      colors: [
        "#2caffe",
        "#544fc5",
        "#00e272",
        "#fe6a35",
        "#6b8abc",
        "#d568fb",
        "#2ee0ca",
        "#fa4b42",
        "#feb56a",
        "#91e8e1",
      ],
      legend: {
        show: true,
      },
      series: [2, 8, 1, 2, 1, 2],
      type: "pie",
      title: {
        text: "Products",
        align: "center",
      },
    };
  } else if (dataId === 2) {
    options = {
      series: [
        {
          name: "Count",
          data: [3, 3, 3, 6, 1, 2, 1],
        },
      ],
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Argentina",
          "Canada",
          "Australia",
          "Russia",
          "Sweden",
          "USA",
          "India",
        ],
      },
      yaxis: {
        title: {
          text: "Countries (Count)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " units";
          },
        },
      },
      type: "bar",
    };
  } else {
    options = {
      series: [
        {
          name: "Count",
          data: [6, 6, 2, 1],
        },
      ],
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: ["ANDA", "BLA", "IND", "NDA"],
      },
      yaxis: {
        title: {
          text: "Type of Application",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " units";
          },
        },
      },
      type: "bar",
    };
  }

  return (
    <div className="mx-auto w-full">
      <Chart
        options={options}
        series={options.series}
        type={options.type}
        height="400"
      />
    </div>
  );
};

export default PieChart;
