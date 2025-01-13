import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MarketplacePage: React.FC = () => {
  return (
    <div className="bg-green-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-8">
        <h1 className="text-4xl font-bold text-green-700 text-center mb-8">
          Marketplace for Healthy Living
        </h1>
        <p className="text-green-700 mb-6 text-center">
          Explore a variety of products to support your journey towards a healthier lifestyle.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold text-green-600">Healthy Snacks</h3>
            <p className="text-green-700">Delicious and nutritious snacks to keep you energized.</p>
          </div>
          <div className="bg-white p-4 rounded shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold text-green-600">Fitness Equipment</h3>
            <p className="text-green-700">High-quality gear to keep your workouts effective.</p>
          </div>
          <div className="bg-white p-4 rounded shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold text-green-600">Diet Plans</h3>
            <p className="text-green-700">Personalized meal plans to fit your health goals.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MarketplacePage;