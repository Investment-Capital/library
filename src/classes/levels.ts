import fetchUrl from "../fetchUrl";
import LevelConfig from "../types/levelConfig";
import webSocket from "../webSocket";

class Levels {
  static config = () => fetchUrl<LevelConfig[]>("levels/config");

  static edit = (
    level: number,
    config: Partial<Omit<LevelConfig, "level">>,
    authorization: string,
  ) =>
    fetchUrl<{ success: string }>(`levels/edit/${level}`, {
      method: "POST",
      headers: { authorization },
      body: JSON.stringify(config),
    });

  static create = (data: Omit<LevelConfig, "level">, authorization: string) =>
    fetchUrl<{ success: string }>(`levels/create`, {
      method: "POST",
      headers: { authorization },
      body: JSON.stringify(data),
    });

  static webSocket = () => webSocket<LevelConfig>("levels/updates");
}

export default Levels;
