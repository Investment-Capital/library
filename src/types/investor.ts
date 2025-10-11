type Investor = {
  account: {
    profile: {
      username: string;
      id: string;
    };
  };

  cash: number;
  prestige: number;
  stocks: Record<string, number>;

  admin: boolean;
  created: number;
};

export default Investor;
