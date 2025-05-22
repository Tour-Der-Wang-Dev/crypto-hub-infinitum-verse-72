
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

interface Profile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  website: string | null;
  user_id: string;
}

export function useProfile() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    async function loadProfile() {
      try {
        setLoading(true);
        
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', user.id)
          .single();
        
        if (error) {
          throw error;
        }
        
        setProfile(data);
      } catch (error: any) {
        console.error('Error loading profile: ', error);
        toast({
          title: 'Error loading profile',
          description: error.message,
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, [user]);

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user) return { error: new Error('User not authenticated') };

    try {
      const { error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('user_id', user.id);

      if (error) throw error;
      
      setProfile(prev => prev ? { ...prev, ...updates } : null);
      
      toast({
        title: 'Profile updated',
        description: 'Your profile has been updated successfully.',
      });
      
      return { error: null };
    } catch (error: any) {
      console.error('Error updating profile: ', error);
      toast({
        title: 'Error updating profile',
        description: error.message,
        variant: 'destructive',
      });
      return { error };
    }
  };

  const uploadAvatar = async (file: File) => {
    if (!user) return { error: new Error('User not authenticated'), url: null };

    try {
      const fileExt = file.name.split('.').pop();
      const filePath = `${user.id}/avatar.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from('profile_images')
        .upload(filePath, file, { upsert: true });

      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from('profile_images').getPublicUrl(filePath);
      
      // Update profile with new avatar URL
      await updateProfile({ avatar_url: data.publicUrl });
      
      toast({
        title: 'Avatar uploaded',
        description: 'Your avatar has been updated successfully.',
      });
      
      return { error: null, url: data.publicUrl };
    } catch (error: any) {
      console.error('Error uploading avatar: ', error);
      toast({
        title: 'Error uploading avatar',
        description: error.message,
        variant: 'destructive',
      });
      return { error, url: null };
    }
  };

  return {
    profile,
    loading,
    updateProfile,
    uploadAvatar,
  };
}
