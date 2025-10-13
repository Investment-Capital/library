import fetchUrl from "../fetchUrl";
import StockConfig from "../types/stockConfig";
import StockMarketHistory from "../types/stockMarketHistory";
import webSocket from "../webSocket";

class Stocks {
  static config = () => fetchUrl<StockConfig[]>("stocks/config");
  static configEdit = (
    name: string,
    config: Omit<StockConfig, "name">,
    authorization: string
  ) =>
    fetchUrl<StockConfig>(`stocks/config/${name}`, {
      method: "POST",
      headers: { authorization },
      body: JSON.stringify(config),
    });

  static market = () => fetchUrl<StockMarketHistory[]>("stocks/market");
  static marketHistory = (stock: string, time: number) =>
    fetchUrl<Omit<StockMarketHistory, "stock">[]>(
      `stocks/market/${stock}?time=${time}`
    );

  static buy = (stock: string, amount: number, authorization: string) =>
    fetchUrl<{ cost: number }>("stocks/buy", {
      method: "POST",
      body: JSON.stringify({
        stock,
        amount,
      }),
      headers: {
        authorization,
      },
    });
  static sell = (stock: string, amount: number, authorization: string) =>
    fetchUrl<{ salesPrice: number }>("stocks/sell", {
      method: "POST",
      body: JSON.stringify({
        stock,
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
