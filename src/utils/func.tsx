import {IcExpenses, IcIncome} from '@icons';

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const moment = require('moment-timezone');

const func = {
  timeZone(date: any, format?: any) {
    if (date === undefined || date === null || date === '') return '';
    let dates = null;

    switch (format) {
      case 'time':
        dates = moment.tz(date, timezone).format('HH:MM');
        break;
      case 'date':
        dates = moment.tz(date, timezone).format('DD MMM');
        break;
      case 'dateyear':
        dates = moment.tz(date, timezone).format('DD MMM YYYY');
        break;
      case 'datetimea':
        dates = moment.tz(date, timezone).format('DD MMM YYYY HH:MM');
        break;
      case 'datetimep':
        dates = moment.tz(date, timezone).format('DD MMM YYYY hh:mm a');
        break;
      default:
        break;
    }
    return dates;
  },
  transactionStatus(key: any) {
    switch (key) {
      case 'Food':
        break;
      case 'Tokopedia':
        break;
      case 'Shoopee':
        break;
      case 'Tarik':
        break;
      case 'Salary':
        break;

      default:
        break;
    }
  },
  types(key: any) {
    switch (key) {
      case 'Income':
        return {
          color: '#00A86B',
          shadow: 'hsl(158, 100%, 85%)',
          icon: <IcIncome />,
        };
      case 'Expenses':
        return {
          color: '#FD3C4A',
          shadow: 'hsl(356, 76%, 91%)',
          icon: <IcExpenses />,
        };

      default:
        break;
    }
  },
  budget(a: any, b: any) {
    const persen = parseFloat(a) / parseFloat(b) || 0;
    const remain = b - a;
    let result = {
      persen,
      remain: remain > b || remain < 0 ? 0 : this.numbToRupiah(remain),
      minus: remain < 0 ? true : false,
    };
    return result;
  },
  rupiahToNumb(num: any) {
    if (typeof num === 'string') {
      return parseInt(num.replace(/[^0-9]/g, ''), 10);
    }
    return num;
  },
  numbToRupiah(num: any, format = false) {
    if (typeof num !== 'number') return '0';

    // Deteksi jika angkanya negatif
    const isNegative = num < 0;
    num = Math.abs(num); // Ubah ke positif sementara untuk format

    if (!format) {
      if (num >= 1000) {
        const formatted = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        return isNegative ? `-${formatted}` : formatted; // Tambahkan minus jika negatif
      } else {
        return isNegative ? `-${num.toString()}` : num.toString() || '0';
      }
    } else {
      let suffix = '';
      if (num >= 1_000_000_000) {
        // Handle billions (B)
        num = num / 1_000_000_000;
        suffix = 'B';
      } else if (num >= 1_000_000) {
        // Handle millions (M)
        num = num / 1_000_000;
        suffix = 'M';
      } else if (num >= 1_000) {
        // Handle thousands (K) with three decimal places
        num = num / 1_000;
        suffix = 'K';
      }

      const formatted = num
        .toFixed(3) // Keep three decimal places
        .replace(/\.000$/, '') // Remove trailing ".000" for whole numbers
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.');

      // Tambahkan tanda minus jika negatif
      return isNegative ? `-${formatted}${suffix}` : `${formatted}${suffix}`;
    }
  },
  balances(totalIncomes: any, totalExpenses: any) {
    const result = parseInt(totalIncomes || 0) - parseInt(totalExpenses || 0);
    return result;
  },
  queryString(params: any) {
    const queryString = Object.entries(params)
      .filter(([key, value]) => value !== undefined && value !== '')
      // .map(([key, value]) => `${key}=${encodeURIComponent(value as any)}`)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    return queryString;
  },
};
export default func;
