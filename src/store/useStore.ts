import create from "zustand";

interface Indicator {
  features: string[];
  movement: number[];
  values: number[];
}

interface Scores {
  bs_score: number;
  gstn_score: number;
  epfo_score: number;
  final: number;
}

interface CompanyInfo {
  lgnm: string;
  tradeNam: string;
  taxpayer_type: string;
  registration_date: string;
  ctb: string;
  status: string;
  pradr: string;
  ntcrbs: string;
  nba: string[];
}

interface GstnFig {
  data: Plotly.Data[];
  layout: Plotly.Layout;
}

interface ResponseState {
  company_info: CompanyInfo;
  gstn_figs: GstnFig[];
  epfo_figs: GstnFig[];
  bs_fig: GstnFig[];
  scores: Scores;
  indicators: {
    gstn_indicator: Indicator;
    epfo_indicator: Indicator;
    credit_indicator: Indicator;
  };
  setResponse: (response: ResponseState) => void;
}

export const useStore = create<ResponseState>((set) => ({
  company_info: {
    lgnm: "",
    tradeNam: "",
    taxpayer_type: "",
    registration_date: "",
    ctb: "",
    status: "",
    pradr: "",
    ntcrbs: "",
    nba: [],
  },
  gstn_figs: [],
  epfo_figs: [],
  bs_fig: [],
  scores: {
    bs_score: 0,
    gstn_score: 0,
    epfo_score: 0,
    final: 0,
  },
  indicators: {
    gstn_indicator: {
      features: [],
      movement: [],
      values: [],
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
  setResponse: (response: ResponseState) => set(response),
}));
