
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useProfile } from '@/hooks/use-profile';
import { Loader2 } from 'lucide-react';

const ProfilePage = () => {
  const { user } = useAuth();
  const { profile, loading, updateProfile, uploadAvatar } = useProfile();
  
  const [fullName, setFullName] = useState(profile?.full_name || '');
  const [website, setWebsite] = useState(profile?.website || '');
  const [updating, setUpdating] = useState(false);
  
  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) return;
    
    setUpdating(true);
    
    await updateProfile({
      full_name: fullName,
      website,
    });
    
    setUpdating(false);
  };
  
  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    await uploadAvatar(file);
  };
  
  if (loading) {
    return (
      <Layout>
        <div className="container max-w-4xl mx-auto py-8">
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-infi-gold" />
          </div>
        </div>
      </Layout>
    );
  }
  
  if (!user) {
    return (
      <Layout>
        <div className="container max-w-4xl mx-auto py-8">
          <Card className="card-glass">
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Sign in to view and update your profile</CardDescription>
            </CardHeader>
            <CardContent className="text-center py-10">
              <Button className="gold-gradient">Connect Wallet</Button>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container max-w-4xl mx-auto py-8">
        <Card className="card-glass">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Update your profile information</CardDescription>
          </CardHeader>
          <form onSubmit={handleUpdateProfile}>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-infi-dark-blue border border-infi-gold/30">
                    {profile?.avatar_url ? (
                      <img
                        src={profile.avatar_url}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-infi-dark text-infi-gold text-2xl font-bold">
                        {fullName ? fullName.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase() || '?'}
                      </div>
                    )}
                  </div>
                  <div>
                    <Input
                      id="avatar"
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarUpload}
                      className="hidden"
                    />
                    <Label
                      htmlFor="avatar"
                      className="inline-block cursor-pointer text-xs text-infi-gold hover:text-infi-gold-light"
                    >
                      Change Avatar
                    </Label>
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      value={user.email || ''}
                      disabled
                      className="bg-infi-dark-blue/50"
                    />
                    <p className="text-xs text-gray-500">
                      Email cannot be changed
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="bg-infi-dark border-infi-gold/30 focus:border-infi-gold"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      value={website || ''}
                      onChange={(e) => setWebsite(e.target.value)}
                      className="bg-infi-dark border-infi-gold/30 focus:border-infi-gold"
                      placeholder="https://"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                type="submit" 
                className="gold-gradient ml-auto"
                disabled={updating}
              >
                {updating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...
                  </>
                ) : 'Save Changes'}
              </Button>
            </CardFooter>
          </form>
        </Card>
        
        <Card className="card-glass mt-6">
          <CardHeader>
            <CardTitle>Account Security</CardTitle>
            <CardDescription>Manage your account security settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Password</Label>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">••••••••</span>
                <Button variant="outline" className="border-infi-gold/30 text-infi-gold">
                  Change Password
                </Button>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Two-Factor Authentication</Label>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Not enabled</span>
                <Button variant="outline" className="border-infi-gold/30 text-infi-gold">
                  Enable 2FA
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ProfilePage;
