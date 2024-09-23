import { ProUser as TProUser } from "../api/proUser/ProUser";

export const PROUSER_TITLE_FIELD = "id";

export const ProUserTitle = (record: TProUser): string => {
  return record.id?.toString() || String(record.id);
};
