import { createClient } from '@supabase/supabase-js';

// Check for environment variables with console warnings for debugging
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  console.warn('VITE_SUPABASE_URL is not set');
}

if (!supabaseAnonKey) {
  console.warn('VITE_SUPABASE_ANON_KEY is not set');
}

// Create a singleton instance with fallback empty strings to prevent immediate crashes
export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '', {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

// Helper to get current session
export const getCurrentSession = async () => {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();
    if (error) throw error;
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

    if (error) throw error;
    return data?.role;
  } catch (error) {
    console.error('Error getting user role:', error);
    return null;
  }
};