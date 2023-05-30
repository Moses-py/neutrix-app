import { AlertColor } from "@mui/material";

export type UserData = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  confirm_password?: string;
  phonenumber: string;
  username?: string;
};

export type AlertType = {
  open: boolean;
  condition: AlertColor | undefined;
  message: string;
};

export type LoginData = {
  email?: string;
  password: string;
  phonenumber?: string;
};