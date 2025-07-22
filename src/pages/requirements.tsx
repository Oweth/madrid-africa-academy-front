import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import logoImage from "@/assets/logoRealMadrid.png";
import heroImage from "@/assets/2025RealAcademy.jpg";

const Requirements = () => {
  return (
    <div className="min-h-screen bg-gradient-card py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-madrid-navy mb-8">Academy Requirements</h1>
        <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
          We welcome young footballers from age 6 and above. Our academy is structured into different divisions
          to ensure that each age group receives tailored coaching and development suited to their growth.
        </p>

        <Card className="max-w-3xl mx-auto shadow-card hover:shadow-elegant transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-3xl text-madrid-navy">Who Can Join?</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground">
            <ul className="list-disc list-inside text-left">
              <li>Minimum age: <span className="text-madrid-blue font-semibold">6 years old</span></li>
              <li>Open to both boys and girls</li>
              <li>Players are placed in age-appropriate divisions</li>
              <li>All levels of experience are welcome</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
    </div>
    
  );
};

export default Requirements;
