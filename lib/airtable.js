import Airtable from "airtable";
import { env } from "../env/client.mjs";

const base = new Airtable({ apiKey: env.NEXT_PUBLIC_AIRTABLE_API_KEY }).base(
  env.NEXT_PUBLIC_AIRTABLE_BASE_ID
);

const table = base(env.NEXT_PUBLIC_AIRTABLE_TABLE_ID);

export const getRecords = async () => {
  const records = await table.select({}).all();
  return records;
}

export const getRecord = async (id) => {
  const record = await table.find(id);
  return record;
}

export const createRecord = async (fields) => {
  const record = await table.create(fields);
  return record;
}