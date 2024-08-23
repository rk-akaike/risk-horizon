"use client";

import { FC } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import GaugeChart from "react-gauge-chart";

import PlotGraph from "@/app/Plot";

interface ScoreIndicatorProps {
  score: number;
  label: string;
}

const response = {
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
    nba: ["Export", "Supplier of Services", "Recipient of Goods or Services"],
  },
  gstn_figs: [
    {
      data: [
        {
          hovertemplate: "start_date=%{x}<br>delay_days=%{y}<extra></extra>",
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
          hovertemplate: "start_date=%{x}<br>delay_days=%{y}<extra></extra>",
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
          hovertemplate: "wage_month=%{x}<br>delay_days=%{y}<extra></extra>",
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
          hovertemplate: "start_date=%{x}<br>delay_days=%{y}<extra></extra>",
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
          hovertemplate: "start_date=%{x}<br>delay_days=%{y}<extra></extra>",
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
          hovertemplate: "wage_month=%{x}<br>delay_days=%{y}<extra></extra>",
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
      faetures: [],
      movement: [],
      values: [],
    },
    credit_indicator: {
      faetures: [],
      movement: [],
      values: [],
    },
  },
};

const ScoreIndicator: FC<ScoreIndicatorProps> = ({ score, label }) => {
  const normalizedScore = score / 1.0;

  return (
    <div className="w-48 flex flex-col items-center">
      <GaugeChart
        id="score-gauge"
        nrOfLevels={20}
        colors={["#FF5F6D", "#FFC371", "#00FF00"]}
        arcWidth={0.3}
        percent={normalizedScore}
        needleColor="#464A4F"
        textColor="#000000"
        hideText={true}
      />
      <h3 className="text-lg font-semibold text-gray-700 mt-4">{label}</h3>
      <p className="text-2xl font-bold text-gray-800 mt-2">{score * 100}</p>
    </div>
  );
};

const Report = () => {
  const companyInfo = response.company_info;
  const {
    features: bsFeatures,
    movement: bsMovement,
    values: bsValues,
  } = response.indicators.gstn_indicator;
  const {
    features: gstFeatures,
    movement: gstMovement,
    values: gstValues,
  } = response.indicators.gstn_indicator;
  const {
    features: epfFeatures,
    movement: epfMovement,
    values: epfValues,
  } = response.indicators.gstn_indicator;

  const scores = response.scores;
  return (
    <div className="flex justify-center min-h-screen bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 p-4 flex-col items-center">
      <div>
        <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
          RISK HORIZON REPORT
        </h1>
        <div className="w-full max-w-4xl bg-gray-100 p-8 rounded-lg shadow-lg h-fit">
          <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            {companyInfo.tradeNam}
          </h1>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 bg-gray-200 p-4 rounded-md">
              <h3 className="font-semibold text-gray-700">
                Legal Name of Business
              </h3>
              <p className="text-gray-900">{companyInfo.lgnm}</p>
            </div>
            <div className="col-span-1 bg-gray-200 p-4 rounded-md">
              <h3 className="font-semibold text-gray-700">Trade Name</h3>
              <p className="text-gray-900">{companyInfo.tradeNam}</p>
            </div>
            <div className="col-span-1 bg-gray-200 p-4 rounded-md">
              <h3 className="font-semibold text-gray-700">
                Effective Date of Registration
              </h3>
              <p className="text-gray-900">{companyInfo.registration_date}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="col-span-1 bg-gray-200 p-4 rounded-md">
              <h3 className="font-semibold text-gray-700">
                Constitution of Business
              </h3>
              <p className="text-gray-900">{companyInfo.ctb}</p>
            </div>
            <div className="col-span-1 bg-gray-200 p-4 rounded-md">
              <h3 className="font-semibold text-gray-700">
                GSTIN / UIN Status
              </h3>
              <p className="text-gray-900">{companyInfo.status}</p>
            </div>
            <div className="col-span-1 bg-gray-200 p-4 rounded-md">
              <h3 className="font-semibold text-gray-700">Taxpayer Type</h3>
              <p className="text-gray-900">{companyInfo.taxpayer_type}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-gray-200 p-4 rounded-md">
              <h3 className="font-semibold text-gray-700">
                Principal Place of Business
              </h3>
              <p className="text-gray-900">{companyInfo.pradr}</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-md">
              <h3 className="font-semibold text-gray-700">
                Nature of Business Activities
              </h3>
              <ul className="list-disc pl-5 text-gray-900">
                {companyInfo.nba.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="m-8">
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md flex justify-center items-center">
            <ScoreIndicator score={scores.bs_score} label="BS Score" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex justify-center items-center">
            <ScoreIndicator score={scores.gstn_score} label="GSTN Score" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex justify-center items-center">
            <ScoreIndicator score={scores.epfo_score} label="EPFO Score" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex justify-center items-center">
            <ScoreIndicator score={scores.final} label="Final Score" />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center mt-4">
          Bank Statement Analysis
        </h2>
        <div className="my-4 flex flex-wrap justify-center">
          <div className="">
            <PlotGraph
              //   @ts-ignore
              data={response.bs_fig[0].data}
              //   @ts-ignore
              layout={response.bs_fig[0].layout}
            />
          </div>
          <div className="mx-8">
            <PlotGraph
              //   @ts-ignore
              data={response.bs_fig[1].data}
              //   @ts-ignore
              layout={response.bs_fig[1].layout}
            />
          </div>
          <div className="">
            <PlotGraph
              //   @ts-ignore
              data={response.bs_fig[2].data}
              //   @ts-ignore
              layout={response.bs_fig[2].layout}
            />
          </div>
        </div>
        <div>
          <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-gray-700">
                  Feature
                </th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700">
                  Movement
                </th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {bsFeatures.map((feature, index) => (
                <tr
                  key={index}
                  className={`text-center hover:bg-gray-100 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="py-3 px-4 text-left text-gray-700">
                    {feature}
                  </td>
                  <td className="py-3 px-4 text-left pl-12">
                    {bsMovement[index] === 1 ? (
                      <FaChevronUp className="text-green-500 inline-block" />
                    ) : (
                      <FaChevronDown className="text-red-500 inline-block" />
                    )}
                  </td>
                  <td className="py-3 px-4 text-left text-gray-700">
                    {bsValues[index]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center mt-4">
          GST Analysis
        </h2>
        <div className="my-4 flex  justify-around">
          <div className="mx-4">
            <PlotGraph
              //   @ts-ignore
              data={response.gstn_figs[0].data}
              //   @ts-ignore
              layout={response.gstn_figs[0].layout}
            />
          </div>
          <div className="mx-4">
            <PlotGraph
              //   @ts-ignore
              data={response.gstn_figs[1].data}
              //   @ts-ignore
              layout={response.gstn_figs[1].layout}
            />
          </div>
        </div>
        <div>
          <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-gray-700">
                  Feature
                </th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700">
                  Movement
                </th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {gstFeatures.map((feature, index) => (
                <tr
                  key={index}
                  className={`text-center hover:bg-gray-100 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="py-3 px-4 text-left text-gray-700">
                    {feature}
                  </td>
                  <td className="py-3 px-4 text-left pl-12">
                    {gstMovement[index] === 1 ? (
                      <FaChevronUp className="text-green-500 inline-block" />
                    ) : (
                      <FaChevronDown className="text-red-500 inline-block" />
                    )}
                  </td>
                  <td className="py-3 px-4 text-left text-gray-700">
                    {gstValues[index]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center mt-4">
          EPFO Analysis
        </h2>
        <div className="my-4 flex justify-around">
          <div className="mx-4">
            <PlotGraph
              //   @ts-ignore
              data={response.epfo_figs[0].data}
              //   @ts-ignore
              layout={response.epfo_figs[0].layout}
            />
          </div>
          <div className="mx-4">
            <PlotGraph
              //   @ts-ignore
              data={response.epfo_figs[1].data}
              //   @ts-ignore
              layout={response.epfo_figs[1].layout}
            />
          </div>
        </div>
        <div>
          <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-gray-700">
                  Feature
                </th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700">
                  Movement
                </th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {epfFeatures.map((feature, index) => (
                <tr
                  key={index}
                  className={`text-center hover:bg-gray-100 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="py-3 px-4 text-left text-gray-700">
                    {feature}
                  </td>
                  <td className="py-3 px-4 text-left pl-12">
                    {epfMovement[index] === 1 ? (
                      <FaChevronUp className="text-green-500 inline-block" />
                    ) : (
                      <FaChevronDown className="text-red-500 inline-block" />
                    )}
                  </td>
                  <td className="py-3 px-4 text-left text-gray-700">
                    {epfValues[index]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Report;
