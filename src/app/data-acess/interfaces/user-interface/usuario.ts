export class User {
  public email: string;
  public password: string;
  // public role: Role;

  constructor(email: string, password: string) {
    (this.email = email), (this.password = password);
  }
}

// export enum Role {
//   Admin = 'admin',
//   Regular = 'regular',
// }
