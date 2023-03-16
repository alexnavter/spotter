import { JwtPayload } from "jwt-decode";

export interface CustomTokenPayload extends JwtPayload {
  sub: string;
  email: string;
}
