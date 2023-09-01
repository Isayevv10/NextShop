import { ClientConfig, createClient } from "next-sanity";

export const clientConfig: ClientConfig = {
  projectId: "4ctrd9d6",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-08-28",
};

export const client = createClient(clientConfig);
