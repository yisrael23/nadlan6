// src/sanity/client.ts
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: 'ivnm6gv5', // חייב להיות זהה ל-ID שלך ב-Sanity
  dataset: 'production',
  apiVersion: '2024-05-01',
  useCdn: false,
});