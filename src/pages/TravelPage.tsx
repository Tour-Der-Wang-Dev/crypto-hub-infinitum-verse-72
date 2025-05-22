
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { travelJobs } from '@/data/travel-data';
import HotelsTab from '@/components/travel/HotelsTab';
import FlightsTab from '@/components/travel/FlightsTab';
import ExperiencesTab from '@/components/travel/ExperiencesTab';
import JobsTab from '@/components/travel/JobsTab';
import FeaturedDestinations from '@/components/travel/FeaturedDestinations';

const TravelPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Travel Reservations</h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Book flights, hotels, and experiences using cryptocurrency. Travel the world with blockchain.
          </p>
        </div>

        <Tabs defaultValue="hotels" className="mb-10">
          <TabsList className="grid w-full grid-cols-4 bg-infi-dark-blue/60">
            <TabsTrigger value="hotels">Hotels</TabsTrigger>
            <TabsTrigger value="flights">Flights</TabsTrigger>
            <TabsTrigger value="experiences">Experiences</TabsTrigger>
            <TabsTrigger value="jobs">Jobs</TabsTrigger>
          </TabsList>
          
          <TabsContent value="hotels" className="mt-6">
            <HotelsTab />
          </TabsContent>
          
          <TabsContent value="flights" className="mt-6">
            <FlightsTab />
          </TabsContent>
          
          <TabsContent value="experiences" className="mt-6">
            <ExperiencesTab />
          </TabsContent>

          <TabsContent value="jobs" className="mt-6">
            <JobsTab jobs={travelJobs} />
          </TabsContent>
        </Tabs>

        <FeaturedDestinations />
      </div>
    </Layout>
  );
};

export default TravelPage;
