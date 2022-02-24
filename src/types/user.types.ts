export interface IUser {
  username: string;
  authData: AuthData;
  createdAt: string;
  updatedAt: string;
  accounts: string[];
  ethAddress: string;
  ACL: ACL;
  sessionToken: string;
  objectId: string;
}

export interface ACL {
  "0B8bhMd8Snx5aDjV6jidlIOB": The0B8BhMd8Snx5ADjV6JidlIOB;
}

export interface The0B8BhMd8Snx5ADjV6JidlIOB {
  read: boolean;
  write: boolean;
}

export interface AuthData {
  moralisEth: MoralisEth;
}

export interface MoralisEth {
  id: string;
  signature: string;
  data: string;
}
