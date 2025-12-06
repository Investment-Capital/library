import fetchUrl from "../fetchUrl";

class Auth {
  static login = (username: string, password: string) =>
    fetchUrl<{
      authorization: string;
    }>("auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

  static signup = (username: string, password: string) =>
    fetchUrl<{
      authorization: string;
    }>("auth/signup", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

  static investorId = (authorization: string) => authorization.split(" ")[0];
}

export default Auth;
