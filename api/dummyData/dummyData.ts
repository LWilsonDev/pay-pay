import {balanceChartDataByYear, MONTH} from './types';

export const dummyBalance = 6378.32;

export const dummyYears = [2021, 2022];

const dummyMonthData2021 = [
  {
    month: MONTH.JAN,
    income: 1023,
    outgoing: 2000,
    balance: 2000,
  },
  {
    month: MONTH.FEB,
    income: 823,
    outgoing: 300,
    balance: 2450,
  },
  {
    month: MONTH.MAR,
    income: 1023,
    outgoing: 2000,
    balance: 1800,
  },
  {
    month: MONTH.APR,
    income: 345,
    outgoing: 788,
    balance: 700,
  },
  {
    month: MONTH.MAY,
    income: 1023,
    outgoing: 2000,
    balance: 300,
  },
  {
    month: MONTH.JUN,
    income: 1023,
    outgoing: 344,
    balance: 2000,
  },
  {
    month: MONTH.JUL,
    income: 1023,
    outgoing: 2400,
    balance: 3555,
  },
  {
    month: MONTH.AUG,
    income: 1023,
    outgoing: 2000,
    balance: 2000,
  },
  {
    month: MONTH.SEP,
    income: 1023,
    outgoing: 2000,
    balance: 2000,
  },
  {
    month: MONTH.OCT,
    income: 1023,
    outgoing: 566,
    balance: 1567,
  },
  {
    month: MONTH.NOV,
    income: 3000,
    outgoing: 1000,
    balance: 3567,
  },
  {
    month: MONTH.DEC,
    income: 23,
    outgoing: 2000,
    balance: 1000,
  },
];

const dummyMonthData2022 = [
  {
    month: MONTH.JAN,
    income: 1023,
    outgoing: 2000,
    balance: 2000,
  },
  {
    month: MONTH.FEB,
    income: 823,
    outgoing: 300,
    balance: 2450,
  },
  {
    month: MONTH.MAR,
    income: 1023,
    outgoing: 2000,
    balance: 1800,
  },
  {
    month: MONTH.APR,
    income: 145,
    outgoing: 1088,
    balance: 700,
  },
  {
    month: MONTH.MAY,
    income: 1023,
    outgoing: 2000,
    balance: 300,
  },
  {
    month: MONTH.JUN,
    income: 1023,
    outgoing: 344,
    balance: 2000,
  },
  {
    month: MONTH.JUL,
    income: 1023,
    outgoing: 2000,
    balance: 3555,
  },
  {
    month: MONTH.AUG,
    income: 1023,
    outgoing: 2000,
    balance: 2000,
  },
  {
    month: MONTH.SEP,
    income: 1023,
    outgoing: 2000,
    balance: 2000,
  },
  {
    month: MONTH.OCT,
    income: 1023,
    outgoing: 566,
    balance: 1567,
  },
  {
    month: MONTH.NOV,
    income: 3000,
    outgoing: 1000,
    balance: 3567,
  },
  {
    month: MONTH.DEC,
    income: 1023,
    outgoing: 2000,
    balance: 2000,
  },
];

export const dummyBalanceDataByYear: balanceChartDataByYear = {
  2021: {
    maxBalance: 3567,
    minBalance: 2013,
    monthlyData: dummyMonthData2021,
  },
  2022: {
    maxBalance: 10152,
    minBalance: 3013,
    monthlyData: dummyMonthData2022,
  },
};
