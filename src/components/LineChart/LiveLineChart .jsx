// import React, { useState, useEffect, useRef } from "react";
// import { Chart as ChartJS, registerables } from "chart.js";
// import "chartjs-adapter-moment"; // Import date adapter
// import { Line } from "react-chartjs-2";

// ChartJS.register(...registerables);
// ChartJS.register(require("chartjs-adapter-moment")); // Register adapter

// function LiveChart() {
//   const [data, setData] = useState({
//     labels: Array.from({ length: 12 }, (_, i) => new Date().setHours(i) - 12),
//     datasets: [
//       {
//         label: "Revenue",
//         data: Array(12).fill(0),
//         backgroundColor: "#0c71ed60",
//         borderColor: "#0c71ed",
//         borderWidth: 1,
//       },
//     ],
//   });

//   const options = {
//     responsive: true,
//     scales: {
//       x: {
//         type: "time",
//         time: {
//           unit: "hour",
//           displayFormats: {
//             hour: "h:mma",
//           },
//         },
//       },
//       y: {
//         beginAtZero: true,
//         ticks: {
//           stepSize: 5000,
//           callback: (value) => `${value / 1000}k`,
//         },
//       },
//     },
//   };

//   const chartRef = useRef(null);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       // Simulate fetching new revenue data (replace with your actual data source)
//       const newRevenue = Math.floor(Math.random() * 32621.72);
//       setData((prevData) => ({
//         ...prevData,
//         datasets: [
//           {
//             ...prevData.datasets[0],
//             data: [...prevData.datasets[0].data.slice(1), newRevenue],
//           },
//         ],
//         labels: [...prevData.labels.slice(1), new Date()],
//       }));
//     }, 5 * 1000); // Update every 5 seconds

//     return () => {
//       console.log(chartRef.current);
//       clearInterval(intervalId);
//       if (chartRef.current) {
//         //This Destroying chart before re-rendering
//         chartRef.current.destroy();
//       }
//     };
//   }, []);

//   return <Line ref={chartRef} data={data} options={options} />;
// }

// export default LiveChart;
// import React, { useState, useEffect, useRef } from "react";
// import { Chart as ChartJS, registerables } from "chart.js";
// import "chartjs-adapter-moment"; // Import date adapter
// import { Line } from "react-chartjs-2";

// ChartJS.register(...registerables);
// ChartJS.register(require("chartjs-adapter-moment")); // Register adapter

// function LiveChart() {
//   const [data, setData] = useState({
//     labels: Array.from({ length: 12 }, (_, i) => new Date().setHours(i) - 12),
//     datasets: [
//       {
//         label: "Revenue",
//         data: Array(12).fill(0),
//         backgroundColor: "#0c71ed60",
//         borderColor: "#0c71ed",
//         borderWidth: 1,
//       },
//     ],
//   });

//   const options = {
//     responsive: true,
//     scales: {
//       x: {
//         type: "time",
//         time: {
//           unit: "hour",
//           displayFormats: {
//             hour: "h:mma",
//           },
//         },
//       },
//       y: {
//         beginAtZero: true,
//         ticks: {
//           stepSize: 5000,
//           callback: (value) => `${value / 1000}k`,
//         },
//       },
//     },
//   };

//   const chartRef = useRef(null);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       // Simulate fetching new revenue data (replace with your actual data source)
//       const newRevenue = Math.floor(Math.random() * 32621.72);
//       setData((prevData) => ({
//         ...prevData,
//         datasets: [
//           {
//             ...prevData.datasets[0],
//             data: [...prevData.datasets[0].data.slice(1), newRevenue],
//           },
//         ],
//         labels: [...prevData.labels.slice(1), new Date()],
//       }));
//     }, 5 * 1000); // Update every 5 seconds

//     return () => {
//       console.log(chartRef.current);
//       clearInterval(intervalId);
//       if (chartRef.current) {
//         //This Destroying chart before re-rendering
//         chartRef.current.destroy();
//       }
//     };
//   }, []);

//   return <Line ref={chartRef} data={data} options={options} />;
// }

// export default LiveChart;
import React, { useState, useEffect, useRef } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import "chartjs-adapter-moment"; // Import date adapter
import { Line } from "react-chartjs-2";

ChartJS.register(...registerables);
ChartJS.register(require("chartjs-adapter-moment")); // Register adapter

function LiveChart() {
  const [data, setData] = useState(() => {
    const currentDate = new Date();
    const labels = Array.from({ length: 12 }, (_, i) => {
      const date = new Date(currentDate);
      date.setHours(currentDate.getHours() - 12 + i);
      return date;
    });

    const datasets = [
      {
        label: "Revenue",
        data: Array(12)
          .fill(0)
          .map((_, i) => generateRandomRevenue(i)),
        backgroundColor: "rgba(0,10, 132,0.2)",
        borderColor: "rgba(0,10, 132, 1)",
        borderWidth: 1,
      },
    ];

    return { labels, datasets };
  });

  const options = {
    responsive: true,
    scales: {
      x: {
        type: "time",
        time: {
          unit: "hour",
          displayFormats: {
            hour: "h:mma",
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 2000,
          callback: (value) => `${value / 1000}k`,
        },
      },
    },
  };

  const chartRef = useRef(null);

  useEffect(() => {
    // Simulate fetching initial revenue data (replace with your actual data source)
    const initialData = Array(12)
      .fill(0)
      .map((_, i) => generateRandomRevenue(i));

    setData((prevData) => ({
      ...prevData,
      datasets: [
        {
          ...prevData.datasets[0],
          data: initialData,
        },
      ],
    }));

    // Render the chart with the initial data
    if (chartRef.current) {
      chartRef.current.render();
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return <Line ref={chartRef} data={data} options={options} />;
}

export default LiveChart;

function generateRandomRevenue(index) {
  // Simulate generating random revenue data based on index
  return Math.floor(Math.random() * 10000) + index * 1000;
}
