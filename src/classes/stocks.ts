import fetchUrl from "../fetchUrl";
import StockConfig from "../types/stockConfig";
import StockMarketHistory from "../types/stockMarketHistory";
import webSocket from "../webSocket";

class Stocks {
  static config = () => fetchUrl<StockConfig[]>("stocks/config");

  static edit = (
    id: string,
    config: Partial<Omit<StockConfig, "id">>,
    authorization: string
  ) =>
    fetchUrl<{ id: string }>(`stocks/edit/${id}`, {
      method: "POST",
      headers: { authorization },
      body: JSON.stringify(config),
    });

  static delete = (id: string, authorization: string) =>
    fetchUrl<{ id: string }>(`stocks/delete/${id}`, {
      method: "POST",
      headers: { authorization },
    });

  static create = (
    data: Omit<StockConfig, "id"> & {
      startingPrice: number;
    },
    authorization: string
  ) =>
    fetchUrl<StockConfig>(`stocks/create`, {
      method: "POST",
      headers: { authorization },
      body: JSON.stringify(data),
    });

  static market = () => fetchUrl<StockMarketHistory[]>("stocks/market");
  static marketHistory = (id: string, time: number) =>
    fetchUrl<Omit<StockMarketHistory, "id">[]>(
      `stocks/market/${id}?time=${time}`
    );

  static buy = (id: string, amount: number, authorization: string) =>
    fetchUrl<{ cost: number }>("stocks/buy", {
      method: "POST",
      body: JSON.stringify({
        id,
        amount,
      }),
      headers: {
        authorization,
      },
    });
  static sell = (id: string, amount: number, authorization: string) =>
    fetchUrl<{ salesPrice: number }>("stocks/sell", {
      method: "POST",
      body: JSON.stringify({
        id,
        amount,
      }),
      headers: {
        authorization,
      },
    });

  static webSocket = () =>
    webSocket<
      | {
          type: "config";
          data: StockConfig;
        }
      | {
          type: "market";
          data: StockMarketHistory;
        }
    >("stocks/updates");
}

export default Stocks;
