import { ProUserWhereInput } from "./ProUserWhereInput";
import { ProUserOrderByInput } from "./ProUserOrderByInput";

export type ProUserFindManyArgs = {
  where?: ProUserWhereInput;
  orderBy?: Array<ProUserOrderByInput>;
  skip?: number;
  take?: number;
};
