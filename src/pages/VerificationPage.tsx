
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const VerificationPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Identity Verification</h1>
          <p className="text-gray-300">
            Complete your verification process to unlock all features of InfiWorld Crypto Hub. Your data is
            securely encrypted and handled with the highest privacy standards.
          </p>
        </div>

        <div className="card-glass p-6 rounded-lg mb-8">
          <div className="flex justify-between items-center p-4 mb-4 border-b border-infi-gold/20">
            <div className="font-semibold">Verification</div>
            <div className="text-sm text-gray-400">Status</div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your legal full name"
                  className="w-full px-4 py-3 rounded-md bg-infi-dark-blue/80 border border-infi-gold/20 focus:border-infi-gold focus:ring-1 focus:ring-infi-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Country of Residence</label>
                <input
                  type="text"
                  placeholder="Enter your country"
                  className="w-full px-4 py-3 rounded-md bg-infi-dark-blue/80 border border-infi-gold/20 focus:border-infi-gold focus:ring-1 focus:ring-infi-gold focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Document Type</label>
                <select
                  className="w-full px-4 py-3 rounded-md bg-infi-dark-blue/80 border border-infi-gold/20 focus:border-infi-gold focus:ring-1 focus:ring-infi-gold focus:outline-none"
                >
                  <option>Passport</option>
                  <option>Driver's License</option>
                  <option>ID Card</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Document Number</label>
                <input
                  type="text"
                  placeholder="Enter document number"
                  className="w-full px-4 py-3 rounded-md bg-infi-dark-blue/80 border border-infi-gold/20 focus:border-infi-gold focus:ring-1 focus:ring-infi-gold focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 mb-4">Document Upload</label>
              <p className="text-sm text-gray-400 mb-4">
                Please upload clear, high-resolution images of your documents
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border-2 border-dashed border-infi-gold/30 rounded-lg p-4 text-center">
                  <div className="mb-2">Front Side</div>
                  <div className="text-xs text-gray-400">Required</div>
                  <div className="mt-4 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                      <path d="m21 15-9-9-9 9" />
                      <path d="M3 15v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4" />
                      <path d="M9 2v9" />
                    </svg>
                  </div>
                  <div className="mt-2 text-xs">Upload front side</div>
                </div>

                <div className="border-2 border-dashed border-infi-gold/30 rounded-lg p-4 text-center">
                  <div className="mb-2">Back Side</div>
                  <div className="text-xs text-gray-400">If applicable</div>
                  <div className="mt-4 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                      <path d="m21 15-9-9-9 9" />
                      <path d="M3 15v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4" />
                      <path d="M9 2v9" />
                    </svg>
                  </div>
                  <div className="mt-2 text-xs">Upload back side</div>
                </div>

                <div className="border-2 border-dashed border-infi-gold/30 rounded-lg p-4 text-center">
                  <div className="mb-2">Selfie with ID</div>
                  <div className="text-xs text-gray-400">Required</div>
                  <div className="mt-4 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                      <path d="m21 15-9-9-9 9" />
                      <path d="M3 15v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4" />
                      <path d="M9 2v9" />
                    </svg>
                  </div>
                  <div className="mt-2 text-xs">Upload selfie with ID</div>
                </div>
              </div>
            </div>

            <Button className="w-full gold-gradient">
              Submit Verification
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VerificationPage;
