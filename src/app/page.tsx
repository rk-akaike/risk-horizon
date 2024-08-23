"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/store/useStore";

const Home = () => {
  const [companyName, setCompanyName] = useState<string>("");
  const [panNumber, setPanNumber] = useState<string>("");
  const [gstNumber, setGstNumber] = useState<string>("");
  const [epfoNumber, setEpfoNumber] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();
  const { setResponse } = useStore();

  const updateStore = () => {
    setResponse({
      company_info: {
        lgnm: "AKAIKE TECHNOLOGIES PRIVATE LIMITED",
        tradeNam: "AKAIKE TECHNOLOGIES PRIVATE LIMITED",
        taxpayer_type: "Regular",
        registration_date: "25/05/2019",
        ctb: "Private Limited Company",
        status: "Active",
        pradr:
          "1ST FLOOR, 1340, 10 A MAIN INDIRANAGAR, BANGALORE, Bengaluru Urban, Karnataka, 560038",
        ntcrbs: "SPO",
        nba: [
          "Export",
          "Supplier of Services",
          "Recipient of Goods or Services",
        ],
      },
      gstn_figs: [
        {
          data: [
            {
              hovertemplate:
                "start_date=%{x}<br>delay_days=%{y}<extra></extra>",
              legendgroup: "",
              line: { color: "#636efa", dash: "solid" },
              marker: { symbol: "circle" },
              mode: "lines",
              name: "",
              orientation: "v",
              showlegend: false,
              x: [
                "2024-03-20 00:00:00",
                "2024-04-20 00:00:00",
                "2024-05-20 00:00:00",
                "2024-06-20 00:00:00",
                "2024-07-20 00:00:00",
                "2024-08-20 00:00:00",
              ],
              xaxis: "x",
              y: [0, 0, 0, 0, 0, 0],
              yaxis: "y",
              type: "scatter",
            },
          ],
          layout: {
            template: {
              data: {
                histogram2dcontour: [
                  {
                    type: "histogram2dcontour",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                choropleth: [
                  {
                    type: "choropleth",
                    colorbar: { outlinewidth: 0, ticks: "" },
                  },
                ],
                histogram2d: [
                  {
                    type: "histogram2d",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                heatmap: [
                  {
                    type: "heatmap",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                heatmapgl: [
                  {
                    type: "heatmapgl",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                contourcarpet: [
                  {
                    type: "contourcarpet",
                    colorbar: { outlinewidth: 0, ticks: "" },
                  },
                ],
                contour: [
                  {
                    type: "contour",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                surface: [
                  {
                    type: "surface",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                mesh3d: [
                  {
                    type: "mesh3d",
                    colorbar: { outlinewidth: 0, ticks: "" },
                  },
                ],
                scatter: [
                  {
                    fillpattern: {
                      fillmode: "overlay",
                      size: 10,
                      solidity: 0.2,
                    },
                    type: "scatter",
                  },
                ],
                parcoords: [
                  {
                    type: "parcoords",
                    line: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scatterpolargl: [
                  {
                    type: "scatterpolargl",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                bar: [
                  {
                    error_x: { color: "#2a3f5f" },
                    error_y: { color: "#2a3f5f" },
                    marker: {
                      line: { color: "#E5ECF6", width: 0.5 },
                      pattern: {
                        fillmode: "overlay",
                        size: 10,
                        solidity: 0.2,
                      },
                    },
                    type: "bar",
                  },
                ],
                scattergeo: [
                  {
                    type: "scattergeo",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scatterpolar: [
                  {
                    type: "scatterpolar",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                histogram: [
                  {
                    marker: {
                      pattern: {
                        fillmode: "overlay",
                        size: 10,
                        solidity: 0.2,
                      },
                    },
                    type: "histogram",
                  },
                ],
                scattergl: [
                  {
                    type: "scattergl",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scatter3d: [
                  {
                    type: "scatter3d",
                    line: { colorbar: { outlinewidth: 0, ticks: "" } },
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scattermapbox: [
                  {
                    type: "scattermapbox",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scatterternary: [
                  {
                    type: "scatterternary",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scattercarpet: [
                  {
                    type: "scattercarpet",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                carpet: [
                  {
                    aaxis: {
                      endlinecolor: "#2a3f5f",
                      gridcolor: "white",
                      linecolor: "white",
                      minorgridcolor: "white",
                      startlinecolor: "#2a3f5f",
                    },
                    baxis: {
                      endlinecolor: "#2a3f5f",
                      gridcolor: "white",
                      linecolor: "white",
                      minorgridcolor: "white",
                      startlinecolor: "#2a3f5f",
                    },
                    type: "carpet",
                  },
                ],
                table: [
                  {
                    cells: {
                      fill: { color: "#EBF0F8" },
                      line: { color: "white" },
                    },
                    header: {
                      fill: { color: "#C8D4E3" },
                      line: { color: "white" },
                    },
                    type: "table",
                  },
                ],
                barpolar: [
                  {
                    marker: {
                      line: { color: "#E5ECF6", width: 0.5 },
                      pattern: {
                        fillmode: "overlay",
                        size: 10,
                        solidity: 0.2,
                      },
                    },
                    type: "barpolar",
                  },
                ],
                pie: [{ automargin: true, type: "pie" }],
              },
              layout: {
                autotypenumbers: "strict",
                colorway: [
                  "#636efa",
                  "#EF553B",
                  "#00cc96",
                  "#ab63fa",
                  "#FFA15A",
                  "#19d3f3",
                  "#FF6692",
                  "#B6E880",
                  "#FF97FF",
                  "#FECB52",
                ],
                font: { color: "#2a3f5f" },
                hovermode: "closest",
                hoverlabel: { align: "left" },
                paper_bgcolor: "white",
                plot_bgcolor: "#E5ECF6",
                polar: {
                  bgcolor: "#E5ECF6",
                  angularaxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                  radialaxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                },
                ternary: {
                  bgcolor: "#E5ECF6",
                  aaxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                  baxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                  caxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                },
                coloraxis: { colorbar: { outlinewidth: 0, ticks: "" } },
                colorscale: {
                  sequential: [
                    [0.0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1.0, "#f0f921"],
                  ],
                  sequentialminus: [
                    [0.0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1.0, "#f0f921"],
                  ],
                  diverging: [
                    [0, "#8e0152"],
                    [0.1, "#c51b7d"],
                    [0.2, "#de77ae"],
                    [0.3, "#f1b6da"],
                    [0.4, "#fde0ef"],
                    [0.5, "#f7f7f7"],
                    [0.6, "#e6f5d0"],
                    [0.7, "#b8e186"],
                    [0.8, "#7fbc41"],
                    [0.9, "#4d9221"],
                    [1, "#276419"],
                  ],
                },
                xaxis: {
                  gridcolor: "white",
                  linecolor: "white",
                  ticks: "",
                  title: { standoff: 15 },
                  zerolinecolor: "white",
                  automargin: true,
                  zerolinewidth: 2,
                },
                yaxis: {
                  gridcolor: "white",
                  linecolor: "white",
                  ticks: "",
                  title: { standoff: 15 },
                  zerolinecolor: "white",
                  automargin: true,
                  zerolinewidth: 2,
                },
                scene: {
                  xaxis: {
                    backgroundcolor: "#E5ECF6",
                    gridcolor: "white",
                    linecolor: "white",
                    showbackground: true,
                    ticks: "",
                    zerolinecolor: "white",
                    gridwidth: 2,
                  },
                  yaxis: {
                    backgroundcolor: "#E5ECF6",
                    gridcolor: "white",
                    linecolor: "white",
                    showbackground: true,
                    ticks: "",
                    zerolinecolor: "white",
                    gridwidth: 2,
                  },
                  zaxis: {
                    backgroundcolor: "#E5ECF6",
                    gridcolor: "white",
                    linecolor: "white",
                    showbackground: true,
                    ticks: "",
                    zerolinecolor: "white",
                    gridwidth: 2,
                  },
                },
                shapedefaults: { line: { color: "#2a3f5f" } },
                annotationdefaults: {
                  arrowcolor: "#2a3f5f",
                  arrowhead: 0,
                  arrowwidth: 1,
                },
                geo: {
                  bgcolor: "white",
                  landcolor: "#E5ECF6",
                  subunitcolor: "white",
                  showland: true,
                  showlakes: true,
                  lakecolor: "white",
                },
                title: { x: 0.05 },
                mapbox: { style: "light" },
              },
            },
            xaxis: {
              anchor: "y",
              domain: [0.0, 1.0],
              title: { text: "start_date" },
            },
            yaxis: {
              anchor: "x",
              domain: [0.0, 1.0],
              title: { text: "delay_days" },
              range: [0, 1],
              tickmode: "linear",
              tick0: 0,
              dtick: 1,
            },
            legend: { tracegroupgap: 0 },
            title: { text: "GSTR1 Filings Delayed" },
          },
        },
        {
          data: [
            {
              hovertemplate:
                "start_date=%{x}<br>delay_days=%{y}<extra></extra>",
              legendgroup: "",
              line: { color: "#636efa", dash: "solid" },
              marker: { symbol: "circle" },
              mode: "lines",
              name: "",
              orientation: "v",
              showlegend: false,
              x: [
                "2024-03-20 00:00:00",
                "2024-04-20 00:00:00",
                "2024-05-20 00:00:00",
                "2024-06-20 00:00:00",
                "2024-07-20 00:00:00",
                "2024-08-20 00:00:00",
              ],
              xaxis: "x",
              y: [0, 2, 0, 0, 0, 0],
              yaxis: "y",
              type: "scatter",
            },
          ],
          layout: {
            template: {
              data: {
                histogram2dcontour: [
                  {
                    type: "histogram2dcontour",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                choropleth: [
                  {
                    type: "choropleth",
                    colorbar: { outlinewidth: 0, ticks: "" },
                  },
                ],
                histogram2d: [
                  {
                    type: "histogram2d",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                heatmap: [
                  {
                    type: "heatmap",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                heatmapgl: [
                  {
                    type: "heatmapgl",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                contourcarpet: [
                  {
                    type: "contourcarpet",
                    colorbar: { outlinewidth: 0, ticks: "" },
                  },
                ],
                contour: [
                  {
                    type: "contour",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                surface: [
                  {
                    type: "surface",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                mesh3d: [
                  {
                    type: "mesh3d",
                    colorbar: { outlinewidth: 0, ticks: "" },
                  },
                ],
                scatter: [
                  {
                    fillpattern: {
                      fillmode: "overlay",
                      size: 10,
                      solidity: 0.2,
                    },
                    type: "scatter",
                  },
                ],
                parcoords: [
                  {
                    type: "parcoords",
                    line: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scatterpolargl: [
                  {
                    type: "scatterpolargl",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                bar: [
                  {
                    error_x: { color: "#2a3f5f" },
                    error_y: { color: "#2a3f5f" },
                    marker: {
                      line: { color: "#E5ECF6", width: 0.5 },
                      pattern: {
                        fillmode: "overlay",
                        size: 10,
                        solidity: 0.2,
                      },
                    },
                    type: "bar",
                  },
                ],
                scattergeo: [
                  {
                    type: "scattergeo",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scatterpolar: [
                  {
                    type: "scatterpolar",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                histogram: [
                  {
                    marker: {
                      pattern: {
                        fillmode: "overlay",
                        size: 10,
                        solidity: 0.2,
                      },
                    },
                    type: "histogram",
                  },
                ],
                scattergl: [
                  {
                    type: "scattergl",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scatter3d: [
                  {
                    type: "scatter3d",
                    line: { colorbar: { outlinewidth: 0, ticks: "" } },
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scattermapbox: [
                  {
                    type: "scattermapbox",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scatterternary: [
                  {
                    type: "scatterternary",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scattercarpet: [
                  {
                    type: "scattercarpet",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                carpet: [
                  {
                    aaxis: {
                      endlinecolor: "#2a3f5f",
                      gridcolor: "white",
                      linecolor: "white",
                      minorgridcolor: "white",
                      startlinecolor: "#2a3f5f",
                    },
                    baxis: {
                      endlinecolor: "#2a3f5f",
                      gridcolor: "white",
                      linecolor: "white",
                      minorgridcolor: "white",
                      startlinecolor: "#2a3f5f",
                    },
                    type: "carpet",
                  },
                ],
                table: [
                  {
                    cells: {
                      fill: { color: "#EBF0F8" },
                      line: { color: "white" },
                    },
                    header: {
                      fill: { color: "#C8D4E3" },
                      line: { color: "white" },
                    },
                    type: "table",
                  },
                ],
                barpolar: [
                  {
                    marker: {
                      line: { color: "#E5ECF6", width: 0.5 },
                      pattern: {
                        fillmode: "overlay",
                        size: 10,
                        solidity: 0.2,
                      },
                    },
                    type: "barpolar",
                  },
                ],
                pie: [{ automargin: true, type: "pie" }],
              },
              layout: {
                autotypenumbers: "strict",
                colorway: [
                  "#636efa",
                  "#EF553B",
                  "#00cc96",
                  "#ab63fa",
                  "#FFA15A",
                  "#19d3f3",
                  "#FF6692",
                  "#B6E880",
                  "#FF97FF",
                  "#FECB52",
                ],
                font: { color: "#2a3f5f" },
                hovermode: "closest",
                hoverlabel: { align: "left" },
                paper_bgcolor: "white",
                plot_bgcolor: "#E5ECF6",
                polar: {
                  bgcolor: "#E5ECF6",
                  angularaxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                  radialaxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                },
                ternary: {
                  bgcolor: "#E5ECF6",
                  aaxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                  baxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                  caxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                },
                coloraxis: { colorbar: { outlinewidth: 0, ticks: "" } },
                colorscale: {
                  sequential: [
                    [0.0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1.0, "#f0f921"],
                  ],
                  sequentialminus: [
                    [0.0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1.0, "#f0f921"],
                  ],
                  diverging: [
                    [0, "#8e0152"],
                    [0.1, "#c51b7d"],
                    [0.2, "#de77ae"],
                    [0.3, "#f1b6da"],
                    [0.4, "#fde0ef"],
                    [0.5, "#f7f7f7"],
                    [0.6, "#e6f5d0"],
                    [0.7, "#b8e186"],
                    [0.8, "#7fbc41"],
                    [0.9, "#4d9221"],
                    [1, "#276419"],
                  ],
                },
                xaxis: {
                  gridcolor: "white",
                  linecolor: "white",
                  ticks: "",
                  title: { standoff: 15 },
                  zerolinecolor: "white",
                  automargin: true,
                  zerolinewidth: 2,
                },
                yaxis: {
                  gridcolor: "white",
                  linecolor: "white",
                  ticks: "",
                  title: { standoff: 15 },
                  zerolinecolor: "white",
                  automargin: true,
                  zerolinewidth: 2,
                },
                scene: {
                  xaxis: {
                    backgroundcolor: "#E5ECF6",
                    gridcolor: "white",
                    linecolor: "white",
                    showbackground: true,
                    ticks: "",
                    zerolinecolor: "white",
                    gridwidth: 2,
                  },
                  yaxis: {
                    backgroundcolor: "#E5ECF6",
                    gridcolor: "white",
                    linecolor: "white",
                    showbackground: true,
                    ticks: "",
                    zerolinecolor: "white",
                    gridwidth: 2,
                  },
                  zaxis: {
                    backgroundcolor: "#E5ECF6",
                    gridcolor: "white",
                    linecolor: "white",
                    showbackground: true,
                    ticks: "",
                    zerolinecolor: "white",
                    gridwidth: 2,
                  },
                },
                shapedefaults: { line: { color: "#2a3f5f" } },
                annotationdefaults: {
                  arrowcolor: "#2a3f5f",
                  arrowhead: 0,
                  arrowwidth: 1,
                },
                geo: {
                  bgcolor: "white",
                  landcolor: "#E5ECF6",
                  subunitcolor: "white",
                  showland: true,
                  showlakes: true,
                  lakecolor: "white",
                },
                title: { x: 0.05 },
                mapbox: { style: "light" },
              },
            },
            xaxis: {
              anchor: "y",
              domain: [0.0, 1.0],
              title: { text: "start_date" },
            },
            yaxis: {
              anchor: "x",
              domain: [0.0, 1.0],
              title: { text: "delay_days" },
              range: [0, 3],
              tickmode: "linear",
              tick0: 0,
              dtick: 1,
            },
            legend: { tracegroupgap: 0 },
            title: { text: "GSTR3B Filings Delayed" },
          },
        },
      ],
      epfo_figs: [
        {
          data: [
            {
              hovertemplate:
                "wage_month=%{x}<br>no_of_employees=%{y}<extra></extra>",
              legendgroup: "",
              line: { color: "#636efa", dash: "solid" },
              marker: { symbol: "circle" },
              mode: "lines",
              name: "",
              orientation: "v",
              showlegend: false,
              x: [
                "2024-02-15 00:00:00",
                "2024-03-15 00:00:00",
                "2024-04-15 00:00:00",
                "2024-05-15 00:00:00",
                "2024-06-15 00:00:00",
                "2024-07-15 00:00:00",
              ],
              xaxis: "x",
              y: [78, 79, 83, 85, 87, 90],
              yaxis: "y",
              type: "scatter",
            },
          ],
          layout: {
            template: {
              data: {
                histogram2dcontour: [
                  {
                    type: "histogram2dcontour",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                choropleth: [
                  {
                    type: "choropleth",
                    colorbar: { outlinewidth: 0, ticks: "" },
                  },
                ],
                histogram2d: [
                  {
                    type: "histogram2d",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                heatmap: [
                  {
                    type: "heatmap",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                heatmapgl: [
                  {
                    type: "heatmapgl",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                contourcarpet: [
                  {
                    type: "contourcarpet",
                    colorbar: { outlinewidth: 0, ticks: "" },
                  },
                ],
                contour: [
                  {
                    type: "contour",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                surface: [
                  {
                    type: "surface",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                mesh3d: [
                  {
                    type: "mesh3d",
                    colorbar: { outlinewidth: 0, ticks: "" },
                  },
                ],
                scatter: [
                  {
                    fillpattern: {
                      fillmode: "overlay",
                      size: 10,
                      solidity: 0.2,
                    },
                    type: "scatter",
                  },
                ],
                parcoords: [
                  {
                    type: "parcoords",
                    line: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scatterpolargl: [
                  {
                    type: "scatterpolargl",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                bar: [
                  {
                    error_x: { color: "#2a3f5f" },
                    error_y: { color: "#2a3f5f" },
                    marker: {
                      line: { color: "#E5ECF6", width: 0.5 },
                      pattern: {
                        fillmode: "overlay",
                        size: 10,
                        solidity: 0.2,
                      },
                    },
                    type: "bar",
                  },
                ],
                scattergeo: [
                  {
                    type: "scattergeo",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scatterpolar: [
                  {
                    type: "scatterpolar",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                histogram: [
                  {
                    marker: {
                      pattern: {
                        fillmode: "overlay",
                        size: 10,
                        solidity: 0.2,
                      },
                    },
                    type: "histogram",
                  },
                ],
                scattergl: [
                  {
                    type: "scattergl",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scatter3d: [
                  {
                    type: "scatter3d",
                    line: { colorbar: { outlinewidth: 0, ticks: "" } },
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scattermapbox: [
                  {
                    type: "scattermapbox",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scatterternary: [
                  {
                    type: "scatterternary",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scattercarpet: [
                  {
                    type: "scattercarpet",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                carpet: [
                  {
                    aaxis: {
                      endlinecolor: "#2a3f5f",
                      gridcolor: "white",
                      linecolor: "white",
                      minorgridcolor: "white",
                      startlinecolor: "#2a3f5f",
                    },
                    baxis: {
                      endlinecolor: "#2a3f5f",
                      gridcolor: "white",
                      linecolor: "white",
                      minorgridcolor: "white",
                      startlinecolor: "#2a3f5f",
                    },
                    type: "carpet",
                  },
                ],
                table: [
                  {
                    cells: {
                      fill: { color: "#EBF0F8" },
                      line: { color: "white" },
                    },
                    header: {
                      fill: { color: "#C8D4E3" },
                      line: { color: "white" },
                    },
                    type: "table",
                  },
                ],
                barpolar: [
                  {
                    marker: {
                      line: { color: "#E5ECF6", width: 0.5 },
                      pattern: {
                        fillmode: "overlay",
                        size: 10,
                        solidity: 0.2,
                      },
                    },
                    type: "barpolar",
                  },
                ],
                pie: [{ automargin: true, type: "pie" }],
              },
              layout: {
                autotypenumbers: "strict",
                colorway: [
                  "#636efa",
                  "#EF553B",
                  "#00cc96",
                  "#ab63fa",
                  "#FFA15A",
                  "#19d3f3",
                  "#FF6692",
                  "#B6E880",
                  "#FF97FF",
                  "#FECB52",
                ],
                font: { color: "#2a3f5f" },
                hovermode: "closest",
                hoverlabel: { align: "left" },
                paper_bgcolor: "white",
                plot_bgcolor: "#E5ECF6",
                polar: {
                  bgcolor: "#E5ECF6",
                  angularaxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                  radialaxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                },
                ternary: {
                  bgcolor: "#E5ECF6",
                  aaxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                  baxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                  caxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                },
                coloraxis: { colorbar: { outlinewidth: 0, ticks: "" } },
                colorscale: {
                  sequential: [
                    [0.0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1.0, "#f0f921"],
                  ],
                  sequentialminus: [
                    [0.0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1.0, "#f0f921"],
                  ],
                  diverging: [
                    [0, "#8e0152"],
                    [0.1, "#c51b7d"],
                    [0.2, "#de77ae"],
                    [0.3, "#f1b6da"],
                    [0.4, "#fde0ef"],
                    [0.5, "#f7f7f7"],
                    [0.6, "#e6f5d0"],
                    [0.7, "#b8e186"],
                    [0.8, "#7fbc41"],
                    [0.9, "#4d9221"],
                    [1, "#276419"],
                  ],
                },
                xaxis: {
                  gridcolor: "white",
                  linecolor: "white",
                  ticks: "",
                  title: { standoff: 15 },
                  zerolinecolor: "white",
                  automargin: true,
                  zerolinewidth: 2,
                },
                yaxis: {
                  gridcolor: "white",
                  linecolor: "white",
                  ticks: "",
                  title: { standoff: 15 },
                  zerolinecolor: "white",
                  automargin: true,
                  zerolinewidth: 2,
                },
                scene: {
                  xaxis: {
                    backgroundcolor: "#E5ECF6",
                    gridcolor: "white",
                    linecolor: "white",
                    showbackground: true,
                    ticks: "",
                    zerolinecolor: "white",
                    gridwidth: 2,
                  },
                  yaxis: {
                    backgroundcolor: "#E5ECF6",
                    gridcolor: "white",
                    linecolor: "white",
                    showbackground: true,
                    ticks: "",
                    zerolinecolor: "white",
                    gridwidth: 2,
                  },
                  zaxis: {
                    backgroundcolor: "#E5ECF6",
                    gridcolor: "white",
                    linecolor: "white",
                    showbackground: true,
                    ticks: "",
                    zerolinecolor: "white",
                    gridwidth: 2,
                  },
                },
                shapedefaults: { line: { color: "#2a3f5f" } },
                annotationdefaults: {
                  arrowcolor: "#2a3f5f",
                  arrowhead: 0,
                  arrowwidth: 1,
                },
                geo: {
                  bgcolor: "white",
                  landcolor: "#E5ECF6",
                  subunitcolor: "white",
                  showland: true,
                  showlakes: true,
                  lakecolor: "white",
                },
                title: { x: 0.05 },
                mapbox: { style: "light" },
              },
            },
            xaxis: {
              anchor: "y",
              domain: [0.0, 1.0],
              title: { text: "wage_month" },
            },
            yaxis: {
              anchor: "x",
              domain: [0.0, 1.0],
              title: { text: "no_of_employees" },
              range: [0, 91],
            },
            legend: { tracegroupgap: 0 },
            title: { text: "EPFO Employees" },
          },
        },
        {
          data: [
            {
              hovertemplate:
                "wage_month=%{x}<br>delay_days=%{y}<extra></extra>",
              legendgroup: "",
              line: { color: "#636efa", dash: "solid" },
              marker: { symbol: "circle" },
              mode: "lines",
              name: "",
              orientation: "v",
              showlegend: false,
              x: [
                "2024-02-15 00:00:00",
                "2024-03-15 00:00:00",
                "2024-04-15 00:00:00",
                "2024-05-15 00:00:00",
                "2024-06-15 00:00:00",
                "2024-07-15 00:00:00",
              ],
              xaxis: "x",
              y: [0, 0, 0, 30, 0, 0],
              yaxis: "y",
              type: "scatter",
            },
          ],
          layout: {
            template: {
              data: {
                histogram2dcontour: [
                  {
                    type: "histogram2dcontour",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                choropleth: [
                  {
                    type: "choropleth",
                    colorbar: { outlinewidth: 0, ticks: "" },
                  },
                ],
                histogram2d: [
                  {
                    type: "histogram2d",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                heatmap: [
                  {
                    type: "heatmap",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                heatmapgl: [
                  {
                    type: "heatmapgl",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                contourcarpet: [
                  {
                    type: "contourcarpet",
                    colorbar: { outlinewidth: 0, ticks: "" },
                  },
                ],
                contour: [
                  {
                    type: "contour",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                surface: [
                  {
                    type: "surface",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                mesh3d: [
                  {
                    type: "mesh3d",
                    colorbar: { outlinewidth: 0, ticks: "" },
                  },
                ],
                scatter: [
                  {
                    fillpattern: {
                      fillmode: "overlay",
                      size: 10,
                      solidity: 0.2,
                    },
                    type: "scatter",
                  },
                ],
                parcoords: [
                  {
                    type: "parcoords",
                    line: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scatterpolargl: [
                  {
                    type: "scatterpolargl",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                bar: [
                  {
                    error_x: { color: "#2a3f5f" },
                    error_y: { color: "#2a3f5f" },
                    marker: {
                      line: { color: "#E5ECF6", width: 0.5 },
                      pattern: {
                        fillmode: "overlay",
                        size: 10,
                        solidity: 0.2,
                      },
                    },
                    type: "bar",
                  },
                ],
                scattergeo: [
                  {
                    type: "scattergeo",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scatterpolar: [
                  {
                    type: "scatterpolar",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                histogram: [
                  {
                    marker: {
                      pattern: {
                        fillmode: "overlay",
                        size: 10,
                        solidity: 0.2,
                      },
                    },
                    type: "histogram",
                  },
                ],
                scattergl: [
                  {
                    type: "scattergl",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scatter3d: [
                  {
                    type: "scatter3d",
                    line: { colorbar: { outlinewidth: 0, ticks: "" } },
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scattermapbox: [
                  {
                    type: "scattermapbox",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scatterternary: [
                  {
                    type: "scatterternary",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scattercarpet: [
                  {
                    type: "scattercarpet",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                carpet: [
                  {
                    aaxis: {
                      endlinecolor: "#2a3f5f",
                      gridcolor: "white",
                      linecolor: "white",
                      minorgridcolor: "white",
                      startlinecolor: "#2a3f5f",
                    },
                    baxis: {
                      endlinecolor: "#2a3f5f",
                      gridcolor: "white",
                      linecolor: "white",
                      minorgridcolor: "white",
                      startlinecolor: "#2a3f5f",
                    },
                    type: "carpet",
                  },
                ],
                table: [
                  {
                    cells: {
                      fill: { color: "#EBF0F8" },
                      line: { color: "white" },
                    },
                    header: {
                      fill: { color: "#C8D4E3" },
                      line: { color: "white" },
                    },
                    type: "table",
                  },
                ],
                barpolar: [
                  {
                    marker: {
                      line: { color: "#E5ECF6", width: 0.5 },
                      pattern: {
                        fillmode: "overlay",
                        size: 10,
                        solidity: 0.2,
                      },
                    },
                    type: "barpolar",
                  },
                ],
                pie: [{ automargin: true, type: "pie" }],
              },
              layout: {
                autotypenumbers: "strict",
                colorway: [
                  "#636efa",
                  "#EF553B",
                  "#00cc96",
                  "#ab63fa",
                  "#FFA15A",
                  "#19d3f3",
                  "#FF6692",
                  "#B6E880",
                  "#FF97FF",
                  "#FECB52",
                ],
                font: { color: "#2a3f5f" },
                hovermode: "closest",
                hoverlabel: { align: "left" },
                paper_bgcolor: "white",
                plot_bgcolor: "#E5ECF6",
                polar: {
                  bgcolor: "#E5ECF6",
                  angularaxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                  radialaxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                },
                ternary: {
                  bgcolor: "#E5ECF6",
                  aaxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                  baxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                  caxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                },
                coloraxis: { colorbar: { outlinewidth: 0, ticks: "" } },
                colorscale: {
                  sequential: [
                    [0.0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1.0, "#f0f921"],
                  ],
                  sequentialminus: [
                    [0.0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1.0, "#f0f921"],
                  ],
                  diverging: [
                    [0, "#8e0152"],
                    [0.1, "#c51b7d"],
                    [0.2, "#de77ae"],
                    [0.3, "#f1b6da"],
                    [0.4, "#fde0ef"],
                    [0.5, "#f7f7f7"],
                    [0.6, "#e6f5d0"],
                    [0.7, "#b8e186"],
                    [0.8, "#7fbc41"],
                    [0.9, "#4d9221"],
                    [1, "#276419"],
                  ],
                },
                xaxis: {
                  gridcolor: "white",
                  linecolor: "white",
                  ticks: "",
                  title: { standoff: 15 },
                  zerolinecolor: "white",
                  automargin: true,
                  zerolinewidth: 2,
                },
                yaxis: {
                  gridcolor: "white",
                  linecolor: "white",
                  ticks: "",
                  title: { standoff: 15 },
                  zerolinecolor: "white",
                  automargin: true,
                  zerolinewidth: 2,
                },
                scene: {
                  xaxis: {
                    backgroundcolor: "#E5ECF6",
                    gridcolor: "white",
                    linecolor: "white",
                    showbackground: true,
                    ticks: "",
                    zerolinecolor: "white",
                    gridwidth: 2,
                  },
                  yaxis: {
                    backgroundcolor: "#E5ECF6",
                    gridcolor: "white",
                    linecolor: "white",
                    showbackground: true,
                    ticks: "",
                    zerolinecolor: "white",
                    gridwidth: 2,
                  },
                  zaxis: {
                    backgroundcolor: "#E5ECF6",
                    gridcolor: "white",
                    linecolor: "white",
                    showbackground: true,
                    ticks: "",
                    zerolinecolor: "white",
                    gridwidth: 2,
                  },
                },
                shapedefaults: { line: { color: "#2a3f5f" } },
                annotationdefaults: {
                  arrowcolor: "#2a3f5f",
                  arrowhead: 0,
                  arrowwidth: 1,
                },
                geo: {
                  bgcolor: "white",
                  landcolor: "#E5ECF6",
                  subunitcolor: "white",
                  showland: true,
                  showlakes: true,
                  lakecolor: "white",
                },
                title: { x: 0.05 },
                mapbox: { style: "light" },
              },
            },
            xaxis: {
              anchor: "y",
              domain: [0.0, 1.0],
              title: { text: "wage_month" },
            },
            yaxis: {
              anchor: "x",
              domain: [0.0, 1.0],
              title: { text: "delay_days" },
              range: [0, 31],
            },
            legend: { tracegroupgap: 0 },
            title: { text: "EPFO Filing Delay" },
          },
        },
      ],
      bs_fig: [
        {
          data: [
            {
              hovertemplate:
                "start_date=%{x}<br>delay_days=%{y}<extra></extra>",
              legendgroup: "",
              line: { color: "#636efa", dash: "solid" },
              marker: { symbol: "circle" },
              mode: "lines",
              name: "",
              orientation: "v",
              showlegend: false,
              x: [
                "2024-03-20 00:00:00",
                "2024-04-20 00:00:00",
                "2024-05-20 00:00:00",
                "2024-06-20 00:00:00",
                "2024-07-20 00:00:00",
                "2024-08-20 00:00:00",
              ],
              xaxis: "x",
              y: [0, 0, 0, 0, 0, 0],
              yaxis: "y",
              type: "scatter",
            },
          ],
          layout: {
            template: {
              data: {
                histogram2dcontour: [
                  {
                    type: "histogram2dcontour",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                choropleth: [
                  {
                    type: "choropleth",
                    colorbar: { outlinewidth: 0, ticks: "" },
                  },
                ],
                histogram2d: [
                  {
                    type: "histogram2d",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                heatmap: [
                  {
                    type: "heatmap",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                heatmapgl: [
                  {
                    type: "heatmapgl",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                contourcarpet: [
                  {
                    type: "contourcarpet",
                    colorbar: { outlinewidth: 0, ticks: "" },
                  },
                ],
                contour: [
                  {
                    type: "contour",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                surface: [
                  {
                    type: "surface",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                mesh3d: [
                  {
                    type: "mesh3d",
                    colorbar: { outlinewidth: 0, ticks: "" },
                  },
                ],
                scatter: [
                  {
                    fillpattern: {
                      fillmode: "overlay",
                      size: 10,
                      solidity: 0.2,
                    },
                    type: "scatter",
                  },
                ],
                parcoords: [
                  {
                    type: "parcoords",
                    line: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scatterpolargl: [
                  {
                    type: "scatterpolargl",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                bar: [
                  {
                    error_x: { color: "#2a3f5f" },
                    error_y: { color: "#2a3f5f" },
                    marker: {
                      line: { color: "#E5ECF6", width: 0.5 },
                      pattern: {
                        fillmode: "overlay",
                        size: 10,
                        solidity: 0.2,
                      },
                    },
                    type: "bar",
                  },
                ],
                scattergeo: [
                  {
                    type: "scattergeo",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scatterpolar: [
                  {
                    type: "scatterpolar",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                histogram: [
                  {
                    marker: {
                      pattern: {
                        fillmode: "overlay",
                        size: 10,
                        solidity: 0.2,
                      },
                    },
                    type: "histogram",
                  },
                ],
                scattergl: [
                  {
                    type: "scattergl",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scatter3d: [
                  {
                    type: "scatter3d",
                    line: { colorbar: { outlinewidth: 0, ticks: "" } },
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scattermapbox: [
                  {
                    type: "scattermapbox",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scatterternary: [
                  {
                    type: "scatterternary",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scattercarpet: [
                  {
                    type: "scattercarpet",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                carpet: [
                  {
                    aaxis: {
                      endlinecolor: "#2a3f5f",
                      gridcolor: "white",
                      linecolor: "white",
                      minorgridcolor: "white",
                      startlinecolor: "#2a3f5f",
                    },
                    baxis: {
                      endlinecolor: "#2a3f5f",
                      gridcolor: "white",
                      linecolor: "white",
                      minorgridcolor: "white",
                      startlinecolor: "#2a3f5f",
                    },
                    type: "carpet",
                  },
                ],
                table: [
                  {
                    cells: {
                      fill: { color: "#EBF0F8" },
                      line: { color: "white" },
                    },
                    header: {
                      fill: { color: "#C8D4E3" },
                      line: { color: "white" },
                    },
                    type: "table",
                  },
                ],
                barpolar: [
                  {
                    marker: {
                      line: { color: "#E5ECF6", width: 0.5 },
                      pattern: {
                        fillmode: "overlay",
                        size: 10,
                        solidity: 0.2,
                      },
                    },
                    type: "barpolar",
                  },
                ],
                pie: [{ automargin: true, type: "pie" }],
              },
              layout: {
                autotypenumbers: "strict",
                colorway: [
                  "#636efa",
                  "#EF553B",
                  "#00cc96",
                  "#ab63fa",
                  "#FFA15A",
                  "#19d3f3",
                  "#FF6692",
                  "#B6E880",
                  "#FF97FF",
                  "#FECB52",
                ],
                font: { color: "#2a3f5f" },
                hovermode: "closest",
                hoverlabel: { align: "left" },
                paper_bgcolor: "white",
                plot_bgcolor: "#E5ECF6",
                polar: {
                  bgcolor: "#E5ECF6",
                  angularaxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                  radialaxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                },
                ternary: {
                  bgcolor: "#E5ECF6",
                  aaxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                  baxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                  caxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                },
                coloraxis: { colorbar: { outlinewidth: 0, ticks: "" } },
                colorscale: {
                  sequential: [
                    [0.0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1.0, "#f0f921"],
                  ],
                  sequentialminus: [
                    [0.0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1.0, "#f0f921"],
                  ],
                  diverging: [
                    [0, "#8e0152"],
                    [0.1, "#c51b7d"],
                    [0.2, "#de77ae"],
                    [0.3, "#f1b6da"],
                    [0.4, "#fde0ef"],
                    [0.5, "#f7f7f7"],
                    [0.6, "#e6f5d0"],
                    [0.7, "#b8e186"],
                    [0.8, "#7fbc41"],
                    [0.9, "#4d9221"],
                    [1, "#276419"],
                  ],
                },
                xaxis: {
                  gridcolor: "white",
                  linecolor: "white",
                  ticks: "",
                  title: { standoff: 15 },
                  zerolinecolor: "white",
                  automargin: true,
                  zerolinewidth: 2,
                },
                yaxis: {
                  gridcolor: "white",
                  linecolor: "white",
                  ticks: "",
                  title: { standoff: 15 },
                  zerolinecolor: "white",
                  automargin: true,
                  zerolinewidth: 2,
                },
                scene: {
                  xaxis: {
                    backgroundcolor: "#E5ECF6",
                    gridcolor: "white",
                    linecolor: "white",
                    showbackground: true,
                    ticks: "",
                    zerolinecolor: "white",
                    gridwidth: 2,
                  },
                  yaxis: {
                    backgroundcolor: "#E5ECF6",
                    gridcolor: "white",
                    linecolor: "white",
                    showbackground: true,
                    ticks: "",
                    zerolinecolor: "white",
                    gridwidth: 2,
                  },
                  zaxis: {
                    backgroundcolor: "#E5ECF6",
                    gridcolor: "white",
                    linecolor: "white",
                    showbackground: true,
                    ticks: "",
                    zerolinecolor: "white",
                    gridwidth: 2,
                  },
                },
                shapedefaults: { line: { color: "#2a3f5f" } },
                annotationdefaults: {
                  arrowcolor: "#2a3f5f",
                  arrowhead: 0,
                  arrowwidth: 1,
                },
                geo: {
                  bgcolor: "white",
                  landcolor: "#E5ECF6",
                  subunitcolor: "white",
                  showland: true,
                  showlakes: true,
                  lakecolor: "white",
                },
                title: { x: 0.05 },
                mapbox: { style: "light" },
              },
            },
            xaxis: {
              anchor: "y",
              domain: [0.0, 1.0],
              title: { text: "start_date" },
            },
            yaxis: {
              anchor: "x",
              domain: [0.0, 1.0],
              title: { text: "delay_days" },
              range: [0, 1],
              tickmode: "linear",
              tick0: 0,
              dtick: 1,
            },
            legend: { tracegroupgap: 0 },
            title: { text: "GSTR1 Filings Delayed" },
          },
        },
        {
          data: [
            {
              hovertemplate:
                "start_date=%{x}<br>delay_days=%{y}<extra></extra>",
              legendgroup: "",
              line: { color: "#636efa", dash: "solid" },
              marker: { symbol: "circle" },
              mode: "lines",
              name: "",
              orientation: "v",
              showlegend: false,
              x: [
                "2024-03-20 00:00:00",
                "2024-04-20 00:00:00",
                "2024-05-20 00:00:00",
                "2024-06-20 00:00:00",
                "2024-07-20 00:00:00",
                "2024-08-20 00:00:00",
              ],
              xaxis: "x",
              y: [0, 2, 0, 0, 0, 0],
              yaxis: "y",
              type: "scatter",
            },
          ],
          layout: {
            template: {
              data: {
                histogram2dcontour: [
                  {
                    type: "histogram2dcontour",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                choropleth: [
                  {
                    type: "choropleth",
                    colorbar: { outlinewidth: 0, ticks: "" },
                  },
                ],
                histogram2d: [
                  {
                    type: "histogram2d",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                heatmap: [
                  {
                    type: "heatmap",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                heatmapgl: [
                  {
                    type: "heatmapgl",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                contourcarpet: [
                  {
                    type: "contourcarpet",
                    colorbar: { outlinewidth: 0, ticks: "" },
                  },
                ],
                contour: [
                  {
                    type: "contour",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                surface: [
                  {
                    type: "surface",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                mesh3d: [
                  {
                    type: "mesh3d",
                    colorbar: { outlinewidth: 0, ticks: "" },
                  },
                ],
                scatter: [
                  {
                    fillpattern: {
                      fillmode: "overlay",
                      size: 10,
                      solidity: 0.2,
                    },
                    type: "scatter",
                  },
                ],
                parcoords: [
                  {
                    type: "parcoords",
                    line: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scatterpolargl: [
                  {
                    type: "scatterpolargl",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                bar: [
                  {
                    error_x: { color: "#2a3f5f" },
                    error_y: { color: "#2a3f5f" },
                    marker: {
                      line: { color: "#E5ECF6", width: 0.5 },
                      pattern: {
                        fillmode: "overlay",
                        size: 10,
                        solidity: 0.2,
                      },
                    },
                    type: "bar",
                  },
                ],
                scattergeo: [
                  {
                    type: "scattergeo",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scatterpolar: [
                  {
                    type: "scatterpolar",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                histogram: [
                  {
                    marker: {
                      pattern: {
                        fillmode: "overlay",
                        size: 10,
                        solidity: 0.2,
                      },
                    },
                    type: "histogram",
                  },
                ],
                scattergl: [
                  {
                    type: "scattergl",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scatter3d: [
                  {
                    type: "scatter3d",
                    line: { colorbar: { outlinewidth: 0, ticks: "" } },
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scattermapbox: [
                  {
                    type: "scattermapbox",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scatterternary: [
                  {
                    type: "scatterternary",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scattercarpet: [
                  {
                    type: "scattercarpet",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                carpet: [
                  {
                    aaxis: {
                      endlinecolor: "#2a3f5f",
                      gridcolor: "white",
                      linecolor: "white",
                      minorgridcolor: "white",
                      startlinecolor: "#2a3f5f",
                    },
                    baxis: {
                      endlinecolor: "#2a3f5f",
                      gridcolor: "white",
                      linecolor: "white",
                      minorgridcolor: "white",
                      startlinecolor: "#2a3f5f",
                    },
                    type: "carpet",
                  },
                ],
                table: [
                  {
                    cells: {
                      fill: { color: "#EBF0F8" },
                      line: { color: "white" },
                    },
                    header: {
                      fill: { color: "#C8D4E3" },
                      line: { color: "white" },
                    },
                    type: "table",
                  },
                ],
                barpolar: [
                  {
                    marker: {
                      line: { color: "#E5ECF6", width: 0.5 },
                      pattern: {
                        fillmode: "overlay",
                        size: 10,
                        solidity: 0.2,
                      },
                    },
                    type: "barpolar",
                  },
                ],
                pie: [{ automargin: true, type: "pie" }],
              },
              layout: {
                autotypenumbers: "strict",
                colorway: [
                  "#636efa",
                  "#EF553B",
                  "#00cc96",
                  "#ab63fa",
                  "#FFA15A",
                  "#19d3f3",
                  "#FF6692",
                  "#B6E880",
                  "#FF97FF",
                  "#FECB52",
                ],
                font: { color: "#2a3f5f" },
                hovermode: "closest",
                hoverlabel: { align: "left" },
                paper_bgcolor: "white",
                plot_bgcolor: "#E5ECF6",
                polar: {
                  bgcolor: "#E5ECF6",
                  angularaxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                  radialaxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                },
                ternary: {
                  bgcolor: "#E5ECF6",
                  aaxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                  baxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                  caxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                },
                coloraxis: { colorbar: { outlinewidth: 0, ticks: "" } },
                colorscale: {
                  sequential: [
                    [0.0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1.0, "#f0f921"],
                  ],
                  sequentialminus: [
                    [0.0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1.0, "#f0f921"],
                  ],
                  diverging: [
                    [0, "#8e0152"],
                    [0.1, "#c51b7d"],
                    [0.2, "#de77ae"],
                    [0.3, "#f1b6da"],
                    [0.4, "#fde0ef"],
                    [0.5, "#f7f7f7"],
                    [0.6, "#e6f5d0"],
                    [0.7, "#b8e186"],
                    [0.8, "#7fbc41"],
                    [0.9, "#4d9221"],
                    [1, "#276419"],
                  ],
                },
                xaxis: {
                  gridcolor: "white",
                  linecolor: "white",
                  ticks: "",
                  title: { standoff: 15 },
                  zerolinecolor: "white",
                  automargin: true,
                  zerolinewidth: 2,
                },
                yaxis: {
                  gridcolor: "white",
                  linecolor: "white",
                  ticks: "",
                  title: { standoff: 15 },
                  zerolinecolor: "white",
                  automargin: true,
                  zerolinewidth: 2,
                },
                scene: {
                  xaxis: {
                    backgroundcolor: "#E5ECF6",
                    gridcolor: "white",
                    linecolor: "white",
                    showbackground: true,
                    ticks: "",
                    zerolinecolor: "white",
                    gridwidth: 2,
                  },
                  yaxis: {
                    backgroundcolor: "#E5ECF6",
                    gridcolor: "white",
                    linecolor: "white",
                    showbackground: true,
                    ticks: "",
                    zerolinecolor: "white",
                    gridwidth: 2,
                  },
                  zaxis: {
                    backgroundcolor: "#E5ECF6",
                    gridcolor: "white",
                    linecolor: "white",
                    showbackground: true,
                    ticks: "",
                    zerolinecolor: "white",
                    gridwidth: 2,
                  },
                },
                shapedefaults: { line: { color: "#2a3f5f" } },
                annotationdefaults: {
                  arrowcolor: "#2a3f5f",
                  arrowhead: 0,
                  arrowwidth: 1,
                },
                geo: {
                  bgcolor: "white",
                  landcolor: "#E5ECF6",
                  subunitcolor: "white",
                  showland: true,
                  showlakes: true,
                  lakecolor: "white",
                },
                title: { x: 0.05 },
                mapbox: { style: "light" },
              },
            },
            xaxis: {
              anchor: "y",
              domain: [0.0, 1.0],
              title: { text: "start_date" },
            },
            yaxis: {
              anchor: "x",
              domain: [0.0, 1.0],
              title: { text: "delay_days" },
              range: [0, 3],
              tickmode: "linear",
              tick0: 0,
              dtick: 1,
            },
            legend: { tracegroupgap: 0 },
            title: { text: "GSTR3B Filings Delayed" },
          },
        },
        {
          data: [
            {
              hovertemplate:
                "wage_month=%{x}<br>delay_days=%{y}<extra></extra>",
              legendgroup: "",
              line: { color: "#636efa", dash: "solid" },
              marker: { symbol: "circle" },
              mode: "lines",
              name: "",
              orientation: "v",
              showlegend: false,
              x: [
                "2024-02-15 00:00:00",
                "2024-03-15 00:00:00",
                "2024-04-15 00:00:00",
                "2024-05-15 00:00:00",
                "2024-06-15 00:00:00",
                "2024-07-15 00:00:00",
              ],
              xaxis: "x",
              y: [0, 0, 0, 30, 0, 0],
              yaxis: "y",
              type: "scatter",
            },
          ],
          layout: {
            template: {
              data: {
                histogram2dcontour: [
                  {
                    type: "histogram2dcontour",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                choropleth: [
                  {
                    type: "choropleth",
                    colorbar: { outlinewidth: 0, ticks: "" },
                  },
                ],
                histogram2d: [
                  {
                    type: "histogram2d",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                heatmap: [
                  {
                    type: "heatmap",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                heatmapgl: [
                  {
                    type: "heatmapgl",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                contourcarpet: [
                  {
                    type: "contourcarpet",
                    colorbar: { outlinewidth: 0, ticks: "" },
                  },
                ],
                contour: [
                  {
                    type: "contour",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                surface: [
                  {
                    type: "surface",
                    colorbar: { outlinewidth: 0, ticks: "" },
                    colorscale: [
                      [0.0, "#0d0887"],
                      [0.1111111111111111, "#46039f"],
                      [0.2222222222222222, "#7201a8"],
                      [0.3333333333333333, "#9c179e"],
                      [0.4444444444444444, "#bd3786"],
                      [0.5555555555555556, "#d8576b"],
                      [0.6666666666666666, "#ed7953"],
                      [0.7777777777777778, "#fb9f3a"],
                      [0.8888888888888888, "#fdca26"],
                      [1.0, "#f0f921"],
                    ],
                  },
                ],
                mesh3d: [
                  {
                    type: "mesh3d",
                    colorbar: { outlinewidth: 0, ticks: "" },
                  },
                ],
                scatter: [
                  {
                    fillpattern: {
                      fillmode: "overlay",
                      size: 10,
                      solidity: 0.2,
                    },
                    type: "scatter",
                  },
                ],
                parcoords: [
                  {
                    type: "parcoords",
                    line: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scatterpolargl: [
                  {
                    type: "scatterpolargl",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                bar: [
                  {
                    error_x: { color: "#2a3f5f" },
                    error_y: { color: "#2a3f5f" },
                    marker: {
                      line: { color: "#E5ECF6", width: 0.5 },
                      pattern: {
                        fillmode: "overlay",
                        size: 10,
                        solidity: 0.2,
                      },
                    },
                    type: "bar",
                  },
                ],
                scattergeo: [
                  {
                    type: "scattergeo",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scatterpolar: [
                  {
                    type: "scatterpolar",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                histogram: [
                  {
                    marker: {
                      pattern: {
                        fillmode: "overlay",
                        size: 10,
                        solidity: 0.2,
                      },
                    },
                    type: "histogram",
                  },
                ],
                scattergl: [
                  {
                    type: "scattergl",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scatter3d: [
                  {
                    type: "scatter3d",
                    line: { colorbar: { outlinewidth: 0, ticks: "" } },
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scattermapbox: [
                  {
                    type: "scattermapbox",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scatterternary: [
                  {
                    type: "scatterternary",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                scattercarpet: [
                  {
                    type: "scattercarpet",
                    marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                  },
                ],
                carpet: [
                  {
                    aaxis: {
                      endlinecolor: "#2a3f5f",
                      gridcolor: "white",
                      linecolor: "white",
                      minorgridcolor: "white",
                      startlinecolor: "#2a3f5f",
                    },
                    baxis: {
                      endlinecolor: "#2a3f5f",
                      gridcolor: "white",
                      linecolor: "white",
                      minorgridcolor: "white",
                      startlinecolor: "#2a3f5f",
                    },
                    type: "carpet",
                  },
                ],
                table: [
                  {
                    cells: {
                      fill: { color: "#EBF0F8" },
                      line: { color: "white" },
                    },
                    header: {
                      fill: { color: "#C8D4E3" },
                      line: { color: "white" },
                    },
                    type: "table",
                  },
                ],
                barpolar: [
                  {
                    marker: {
                      line: { color: "#E5ECF6", width: 0.5 },
                      pattern: {
                        fillmode: "overlay",
                        size: 10,
                        solidity: 0.2,
                      },
                    },
                    type: "barpolar",
                  },
                ],
                pie: [{ automargin: true, type: "pie" }],
              },
              layout: {
                autotypenumbers: "strict",
                colorway: [
                  "#636efa",
                  "#EF553B",
                  "#00cc96",
                  "#ab63fa",
                  "#FFA15A",
                  "#19d3f3",
                  "#FF6692",
                  "#B6E880",
                  "#FF97FF",
                  "#FECB52",
                ],
                font: { color: "#2a3f5f" },
                hovermode: "closest",
                hoverlabel: { align: "left" },
                paper_bgcolor: "white",
                plot_bgcolor: "#E5ECF6",
                polar: {
                  bgcolor: "#E5ECF6",
                  angularaxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                  radialaxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                },
                ternary: {
                  bgcolor: "#E5ECF6",
                  aaxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                  baxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                  caxis: {
                    gridcolor: "white",
                    linecolor: "white",
                    ticks: "",
                  },
                },
                coloraxis: { colorbar: { outlinewidth: 0, ticks: "" } },
                colorscale: {
                  sequential: [
                    [0.0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1.0, "#f0f921"],
                  ],
                  sequentialminus: [
                    [0.0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1.0, "#f0f921"],
                  ],
                  diverging: [
                    [0, "#8e0152"],
                    [0.1, "#c51b7d"],
                    [0.2, "#de77ae"],
                    [0.3, "#f1b6da"],
                    [0.4, "#fde0ef"],
                    [0.5, "#f7f7f7"],
                    [0.6, "#e6f5d0"],
                    [0.7, "#b8e186"],
                    [0.8, "#7fbc41"],
                    [0.9, "#4d9221"],
                    [1, "#276419"],
                  ],
                },
                xaxis: {
                  gridcolor: "white",
                  linecolor: "white",
                  ticks: "",
                  title: { standoff: 15 },
                  zerolinecolor: "white",
                  automargin: true,
                  zerolinewidth: 2,
                },
                yaxis: {
                  gridcolor: "white",
                  linecolor: "white",
                  ticks: "",
                  title: { standoff: 15 },
                  zerolinecolor: "white",
                  automargin: true,
                  zerolinewidth: 2,
                },
                scene: {
                  xaxis: {
                    backgroundcolor: "#E5ECF6",
                    gridcolor: "white",
                    linecolor: "white",
                    showbackground: true,
                    ticks: "",
                    zerolinecolor: "white",
                    gridwidth: 2,
                  },
                  yaxis: {
                    backgroundcolor: "#E5ECF6",
                    gridcolor: "white",
                    linecolor: "white",
                    showbackground: true,
                    ticks: "",
                    zerolinecolor: "white",
                    gridwidth: 2,
                  },
                  zaxis: {
                    backgroundcolor: "#E5ECF6",
                    gridcolor: "white",
                    linecolor: "white",
                    showbackground: true,
                    ticks: "",
                    zerolinecolor: "white",
                    gridwidth: 2,
                  },
                },
                shapedefaults: { line: { color: "#2a3f5f" } },
                annotationdefaults: {
                  arrowcolor: "#2a3f5f",
                  arrowhead: 0,
                  arrowwidth: 1,
                },
                geo: {
                  bgcolor: "white",
                  landcolor: "#E5ECF6",
                  subunitcolor: "white",
                  showland: true,
                  showlakes: true,
                  lakecolor: "white",
                },
                title: { x: 0.05 },
                mapbox: { style: "light" },
              },
            },
            xaxis: {
              anchor: "y",
              domain: [0.0, 1.0],
              title: { text: "wage_month" },
            },
            yaxis: {
              anchor: "x",
              domain: [0.0, 1.0],
              title: { text: "delay_days" },
              range: [0, 31],
            },
            legend: { tracegroupgap: 0 },
            title: { text: "EPFO Filing Delay" },
          },
        },
      ],
      scores: {
        bs_score: 0.4,
        gstn_score: 0.8,
        epfo_score: 0.7,
        final: 0.4,
      },
      indicators: {
        gstn_indicator: {
          features: ["kweugf", "kaudcisku", "aslcjl"],
          movement: [0, 1, 0],
          values: [0.5, 0.2, 0.6],
        },
        epfo_indicator: {
          features: [],
          movement: [],
          values: [],
        },
        credit_indicator: {
          features: [],
          movement: [],
          values: [],
        },
      },
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("companyName", companyName);
    formData.append("panNumber", panNumber);
    formData.append("gstNumber", gstNumber);
    formData.append("epfoNumber", epfoNumber);
    if (file) formData.append("file", file);
    // const response = await fetch("/api/report", {
    //   method: "POST",
    //   body: formData,
    // });
    updateStore();
    router.push("/report");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Credit Assesment
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Name <span> (as per PAN)</span>
            </label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your company name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              PAN Number
            </label>
            <input
              type="text"
              value={panNumber}
              onChange={(e) => setPanNumber(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your PAN number"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              GST Number
            </label>
            <input
              type="text"
              value={gstNumber}
              onChange={(e) => setGstNumber(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your GST number"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              EPFO Number
            </label>
            <input
              type="text"
              value={epfoNumber}
              onChange={(e) => setEpfoNumber(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your EPFO number"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload Excel Sheet
            </label>
            <input
              type="file"
              accept=".xlsx, .xls"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md bg-gray-50 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-indigo-700 file:bg-indigo-100 hover:file:bg-indigo-200"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
