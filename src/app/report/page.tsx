"use client";

import { FC } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import GaugeChart from "react-gauge-chart";
import { useStore } from "@/store/useStore";

import PlotGraph from "@/app/Plot";

interface ScoreIndicatorProps {
  score: number;
  label: string;
}

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
  const { company_info, gstn_figs, bs_fig, epfo_figs, indicators, scores } =
    useStore();

  const {
    features: bsFeatures,
    movement: bsMovement,
    values: bsValues,
  } = indicators.gstn_indicator;
  const {
    features: gstFeatures,
    movement: gstMovement,
    values: gstValues,
  } = indicators.gstn_indicator;
  const {
    features: epfFeatures,
    movement: epfMovement,
    values: epfValues,
  } = indicators.gstn_indicator;

  return (
    <div className="flex justify-center min-h-screen bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 p-4 flex-col items-center">
      <div>
        <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
          RISK HORIZON REPORT
        </h1>
        <div className="w-full max-w-4xl bg-gray-100 p-8 rounded-lg shadow-lg h-fit">
          <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            {company_info.tradeNam}
          </h1>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 bg-gray-200 p-4 rounded-md">
              <h3 className="font-semibold text-gray-700">
                Legal Name of Business
              </h3>
              <p className="text-gray-900">{company_info.lgnm}</p>
            </div>
            <div className="col-span-1 bg-gray-200 p-4 rounded-md">
              <h3 className="font-semibold text-gray-700">Trade Name</h3>
              <p className="text-gray-900">{company_info.tradeNam}</p>
            </div>
            <div className="col-span-1 bg-gray-200 p-4 rounded-md">
              <h3 className="font-semibold text-gray-700">
                Effective Date of Registration
              </h3>
              <p className="text-gray-900">{company_info.registration_date}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="col-span-1 bg-gray-200 p-4 rounded-md">
              <h3 className="font-semibold text-gray-700">
                Constitution of Business
              </h3>
              <p className="text-gray-900">{company_info.ctb}</p>
            </div>
            <div className="col-span-1 bg-gray-200 p-4 rounded-md">
              <h3 className="font-semibold text-gray-700">
                GSTIN / UIN Status
              </h3>
              <p className="text-gray-900">{company_info.status}</p>
            </div>
            <div className="col-span-1 bg-gray-200 p-4 rounded-md">
              <h3 className="font-semibold text-gray-700">Taxpayer Type</h3>
              <p className="text-gray-900">{company_info.taxpayer_type}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-gray-200 p-4 rounded-md">
              <h3 className="font-semibold text-gray-700">
                Principal Place of Business
              </h3>
              <p className="text-gray-900">{company_info.pradr}</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-md">
              <h3 className="font-semibold text-gray-700">
                Nature of Business Activities
              </h3>
              <ul className="list-disc pl-5 text-gray-900">
                {company_info.nba.map((activity, index) => (
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
              data={bs_fig[0].data}
              //   @ts-ignore
              layout={bs_fig[0].layout}
            />
          </div>
          <div className="mx-8">
            <PlotGraph
              //   @ts-ignore
              data={bs_fig[1].data}
              //   @ts-ignore
              layout={bs_fig[1].layout}
            />
          </div>
          <div className="">
            <PlotGraph
              //   @ts-ignore
              data={bs_fig[2].data}
              //   @ts-ignore
              layout={bs_fig[2].layout}
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
              data={gstn_figs[0].data}
              //   @ts-ignore
              layout={gstn_figs[0].layout}
            />
          </div>
          <div className="mx-4">
            <PlotGraph
              //   @ts-ignore
              data={gstn_figs[1].data}
              //   @ts-ignore
              layout={gstn_figs[1].layout}
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
              data={epfo_figs[0].data}
              //   @ts-ignore
              layout={epfo_figs[0].layout}
            />
          </div>
          <div className="mx-4">
            <PlotGraph
              //   @ts-ignore
              data={epfo_figs[1].data}
              //   @ts-ignore
              layout={epfo_figs[1].layout}
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
