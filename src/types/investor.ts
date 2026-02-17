type Investor = {
  account: {
    profile: {
      username: string;
      id: string;
    };
  };

  cash: number;
  xp: number;
  prestige: number;
  stocks: Record<string, number | undefined>;

  admin: boolean;
  created: number;
};

export default Investor;
