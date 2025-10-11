import constructUrl from "../constructUrl";
import fetchUrl from "../fetchUrl";
import Investor from "../types/investor";

class Investors {
  static lookup = (id: string) => fetchUrl<Investor>(`investors/lookup/${id}`);
  static search = (search: string, page: number) =>
    fetchUrl<Investor["account"]["profile"][]>(
      `investors/search?search=${search}&page=${page}`
    );
  static icon = (id: string) => constructUrl("http", `investors/icon/${id}`);
}

export default Investors;
