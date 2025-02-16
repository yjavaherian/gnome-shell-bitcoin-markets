import * as BaseProvider from './BaseProvider';

export class Api extends BaseProvider.Api {
  apiName = 'Bitkub';

  apiDocs = [['API Docs', 'https://github.com/bitkub/bitkub-official-api-docs/blob/master/restful-api.md#get-apimarketbids']];

  interval = 60; // unclear, should be safe

  getUrl({ base, quote }) {
    return 'https://api.bitkub.com/api/market/bids?lmt=1&sym=' + `${quote}_${base}`.toLowerCase();
  }

  getLast(data) {
    return data.result[0][3]; // rate
  }

  getDefaultTicker(): BaseProvider.Ticker {
    return { base: 'BTC', quote: 'THB' };
  }
}
