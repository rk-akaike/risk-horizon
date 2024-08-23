"use client";

import { FC } from "react";
import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), {
  ssr: false,
  loading: () => <>Loading...</>,
});

interface PlotProps {
  data: Plotly.Data[];
  layout: Plotly.Layout;
}

const PlotGraph: FC<PlotProps> = ({ data, layout }) => {
  return <Plot data={data} layout={layout} className="h-[450px] w-[450px]" />;
};

export default PlotGraph;
