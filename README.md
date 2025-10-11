# Investment Capital API Library

- Investment capital is a market/economy style simulation website
- This is the library that anyone can use to easily access the web API in typescript or javascript

# Other Repos

- [Backend](https://github.com/Investment-Capital/backend)
- [Website](https://github.com/Investment-Capital/website)

# Setup

## Local

```ts
import { setApiData } from "investmentcapital.js";

setApiData({
  baseUrl: "localhost:3000", // the url running the data
  secure: false, // Does the test build use HTTPs or HTTP
});
```
