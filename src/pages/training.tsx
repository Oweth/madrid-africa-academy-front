import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Training = () => {
  return (
    <div className="min-h-screen bg-gradient-card py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-madrid-navy mb-8">Our Training Philosophy</h1>
        <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
          We implement the same training methods used by Real Madrid players worldwide. Our sessions are built to
          nurture talent and shape youngsters into professionals — just like true Madridistas.
        </p>

        <Card className="max-w-3xl mx-auto shadow-card hover:shadow-elegant transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-3xl text-madrid-navy">Train Like a Pro</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground">
            <ul className="list-disc list-inside text-left">
              <li>Authentic Real Madrid training modules</li>
              <li>Individual and team-based drills</li>
              <li>Focus on physical, tactical, and mental development</li>
              <li>Professional coaching staff with global experience</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Training;
