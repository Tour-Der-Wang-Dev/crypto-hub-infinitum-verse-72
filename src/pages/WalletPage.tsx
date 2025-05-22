
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { Bitcoin, PlusCircle } from 'lucide-react';

const WalletPage = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <Layout>
        <div className="container max-w-4xl mx-auto py-8">
          <Card className="card-glass">
            <CardHeader>
              <CardTitle>Crypto Wallet</CardTitle>
              <CardDescription>Sign in to access your wallet</CardDescription>
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
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-2/3">
            <Card className="card-glass h-full">
              <CardHeader>
                <CardTitle>Crypto Wallet</CardTitle>
                <CardDescription>Manage your crypto assets</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="assets">
                  <TabsList className="mb-6">
                    <TabsTrigger value="assets">Assets</TabsTrigger>
                    <TabsTrigger value="activity">Activity</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="assets" className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="text-xl font-semibold">Total Balance</div>
                      <div className="text-xl font-bold text-infi-gold">$0.00</div>
                    </div>
                    
                    <div className="mt-6 space-y-4">
                      <div className="text-gray-400 text-sm">No assets found</div>
                      <Button 
                        variant="outline" 
                        className="w-full border-infi-gold/30 text-infi-gold flex items-center justify-center gap-2"
                      >
                        <PlusCircle size={16} /> Add Crypto
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="activity" className="min-h-[200px]">
                    <div className="text-gray-400 text-sm">No recent activity</div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          
          <div className="w-full md:w-1/3">
            <Card className="card-glass mb-6">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="border-infi-gold/30 text-infi-gold">
                    Send
                  </Button>
                  <Button variant="outline" size="sm" className="border-infi-gold/30 text-infi-gold">
                    Receive
                  </Button>
                  <Button variant="outline" size="sm" className="border-infi-gold/30 text-infi-gold">
                    Buy
                  </Button>
                  <Button variant="outline" size="sm" className="border-infi-gold/30 text-infi-gold">
                    Swap
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-glass">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Market Trends</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bitcoin size={20} className="text-[#F7931A]" />
                    <span>Bitcoin</span>
                  </div>
                  <div className="text-green-500">+2.4%</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-[#627EEA] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">Ξ</span>
                    </div>
                    <span>Ethereum</span>
                  </div>
                  <div className="text-green-500">+1.8%</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WalletPage;
