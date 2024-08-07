import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ehhvakzpwvsinyvnlifp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoaHZha3pwd3ZzaW55dm5saWZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUwMjM0MTEsImV4cCI6MjAzMDU5OTQxMX0.dwwJ419AVoviublG5WyeD8s3CcmoRejpI5CbTd1o5lo";

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
