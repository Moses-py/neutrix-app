import axios from "axios";

export type RecoveryDataPayload = {
  email?: string;
  code?: string;
  password?: string;
};

export const checkRecoveryData = async (payload: RecoveryDataPayload) => {
  const response = await axios({
    method: "POST",
    data: payload,
    url: "/api/verification/passwordRecover",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res: { status: number; data: { message: string } }) => {
      return res;
    })
    .catch((err) => {
      return err;
    });

  return response;
};
