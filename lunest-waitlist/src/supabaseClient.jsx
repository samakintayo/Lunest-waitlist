import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://evhbkzcuvryfbauwlnff.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2aGJremN1dnJ5ZmJhdXdsbmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2NzU2MjYsImV4cCI6MjA2NjI1MTYyNn0.Q-OiDPfxQfzMFwGXPtGgWYTQtyoC2vaQux9pXOFmGF8';


export const supabase = createClient(supabaseUrl, supabaseKey);
