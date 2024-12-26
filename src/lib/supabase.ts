import { createClient } from '@supabase/supabase-js';

// Get environment variables with more detailed error messages
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Log detailed information about missing environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(`
    Environment variables missing:
    VITE_SUPABASE_URL: ${supabaseUrl ? '✓' : '✗'}
    VITE_SUPABASE_ANON_KEY: ${supabaseAnonKey ? '✓' : '✗'}
    
    Please ensure you have:
    1. Created a .env file in your project root
    2. Added the required Supabase credentials
    3. Restarted your development server
  `);
}

// Create a singleton instance with better error handling
export const supabase = createClient(
  supabaseUrl || 'http://placeholder-url.com',
  supabaseAnonKey || 'placeholder-key',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  }
);

// Helper to get current session
export const getCurrentSession = async () => {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();
    if (error) {
      console.error('Error getting session:', error.message);
      return null;
    }
    return session;
  } catch (error) {
    console.error('Error getting session:', error);
    return null;
  }
};

// Helper to get current user role
export const getCurrentUserRole = async () => {
  try {
    const session = await getCurrentSession();
    if (!session) return null;

    const { data, error } = await supabase
      .from('user_profiles')
      .select('role')
      .eq('id', session.user.id)
      .single();

    if (error) {
      console.error('Error getting user role:', error.message);
      return null;
    }
    return data?.role;
  } catch (error) {
    console.error('Error getting user role:', error);
    return null;
  }
};