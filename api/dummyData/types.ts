export enum MONTH {
  JAN = 'Jan',
  FEB = 'Feb',
  MAR = 'Mar',
  APR = 'Apr',
  MAY = 'May',
  JUN = 'Jun',
  JUL = 'Jul',
  AUG = 'Aug',
  SEP = 'Sep',
  OCT = 'Oct',
  NOV = 'Nov',
  DEC = 'Dec',
}

// data to mock what would come back from an api.
// We assume all the heavy-lifting in terms of calculations would be done on the backend
export type balanceMonth = {
  month: MONTH;
  income: number;
  outgoing: number;
  balance: number;
};

export type balanceYear = {
  maxBalance: number;
  minBalance: number;
  monthlyData: balanceMonth[];
};

export type balanceChartDataByYear = {
  [year: number]: balanceYear;
};

export type balanceByYearDataSelector = {
  year: number;
  months: 'first' | 'last';
  label: string;
};
