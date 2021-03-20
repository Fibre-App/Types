export type ICredential = IUserPassCredential | ISSHCredential;

interface IUserPassCredential {
  type: "userpass";
  username: string;
  password: string;
}

interface ISSHCredential {
  type: "ssh";
  sshKey: string;
}
