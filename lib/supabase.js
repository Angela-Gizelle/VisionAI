import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://cwsqjowtkkwrotoqgacd.supabase.co/";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3c3Fqb3d0a2t3cm90b3FnYWNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxMDI4MDcsImV4cCI6MjA5NzY3ODgwN30.XQVDapWmBnlCI8d5lNoIujv-mh7aFqmdId1zc6zPAlU";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
