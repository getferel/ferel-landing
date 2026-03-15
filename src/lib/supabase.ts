import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gdrdvcmboowuwwdeexow.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkcmR2Y21ib293dXd3ZGVleG93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0NzY0MTksImV4cCI6MjA4OTA1MjQxOX0.j8cYcR5nf8zjs9ejE-ZKdBLJ5ne-4TeIafuLfM02mTY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
