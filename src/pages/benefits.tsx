import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Benefits = () => {
  return (
    <div className="min-h-screen bg-gradient-card py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-madrid-navy mb-8">Why Join Our Academy?</h1>
        <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
          The Real Madrid Academy offers far more than just training. We provide life-changing opportunities for
          young athletes to grow, earn, and showcase their talent on the world stage.
        </p>

        <Card className="max-w-3xl mx-auto shadow-card hover:shadow-elegant transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-3xl text-madrid-navy">Benefits You Can Count On</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground">
            <ul className="list-disc list-inside text-left">
              <li><span className="text-madrid-blue font-semibold">Monthly Allowances</span> to support dedicated players</li>
              <li><span className="text-madrid-blue font-semibold">Exposure to Real Madrid</span> scouts and coaching staff in Spain</li>
              <li><span className="text-madrid-blue font-semibold">Opportunities with European Teams</span> beyond Real Madrid</li>
              <li>Global career pathways for top-performing talent</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Benefits;
