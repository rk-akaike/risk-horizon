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
  return (
    <div className="flex flex-wrap">
      <Plot data={data} layout={layout} />
    </div>
  );
};

export default PlotGraph;
