interface User {
  username: string;
  classe: string;
  level: number;
  password: string;
}

interface UserdWithId extends User {
  id: number;
}

export { User, UserdWithId };
