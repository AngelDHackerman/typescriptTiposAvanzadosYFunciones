// * Los enum de preferencia tienen que ir en MAYUSCULAS

export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export type User = {
  username: string;
  role: ROLES;
}

    // ? Usando los enum:

const angelUser: User = {
  username: 'Angel_Hackerman',
  role: ROLES.ADMIN,
}
