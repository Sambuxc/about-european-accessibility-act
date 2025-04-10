
import React from "react";
import { Card } from "@/components/ui/card";
import { NavigationBar } from "@/components/NavigationBar";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Footer } from "@/components/Footer";
import { ContentSection } from "@/components/ContentSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">
      <NavigationBar />
      <main className="flex-grow flex flex-col items-center justify-center p-4 md:p-8 mt-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-gradient">
          European Accessibility Act
        </h1>
        <h2 className="text-xl md:text-2xl text-blue-400 mb-12 text-center">
          Countdown to Implementation Deadline
        </h2>
        
        <CountdownTimer deadline={new Date('June 28, 2025')} />
        
        <Card className="w-full max-w-4xl mt-12 bg-gray-900/50 border-gray-800">
          <ContentSection />
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
