import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const EventPage: React.FC = () => {
  return (
    <div className="bg-green-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-8">
        <h1 className="text-4xl font-bold text-green-700 text-center mb-8">
          Upcoming Health Events
        </h1>
        <p className="text-green-700 mb-6 text-center">
          Join events that inspire and guide your health journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold text-green-600">Fun Run Challenge</h3>
            <p className="text-green-700">Participate in a fun run to boost your fitness.</p>
          </div>
          <div className="bg-white p-4 rounded shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold text-green-600">Nutrition Workshop</h3>
            <p className="text-green-700">Learn about balanced nutrition and meal planning.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventPage;