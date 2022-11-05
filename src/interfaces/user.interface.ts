interface User {
  username: string;
  classe: string;
  level: number;
  password: string;
}

interface UserdWithId extends User {
  id: number;
}

interface Login {
  username: string;
  password: string;
}

export { User, UserdWithId, Login };
