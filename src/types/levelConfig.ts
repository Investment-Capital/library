type LevelConfig = {
  level: number;
  xpRequired: number;
  rewards: {
    cash?: number;
    stocks?: Record<string, number | undefined>;
  };
};

export default LevelConfig;
