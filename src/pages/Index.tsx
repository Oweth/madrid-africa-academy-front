import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, TrainFront, Trophy } from "lucide-react";
import heroImage from "@/assets/2025RealAcademy.jpg";
import logoImage from "@/assets/logoRealMadrid.png";
import leaderImage from "@/assets/Leader.jpg";
import attackerImage from "@/assets/Attacker.jpg";
import discussImage from "@/assets/Discuss.jpg";
import duelImage from "@/assets/Duel.jpg";
import goalKeeperImage from "@/assets/GoalKeeper.jpg";
import skeemImage from "@/assets/skeem.jpg";
import kidsImage from "@/assets/kids.jpg";
import winningImage from "@/assets/Winning.jpg";
import attackingImage from "@/assets/Attacking.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-madrid-white">
          <div className="flex items-center justify-center mb-8">
            <img src={logoImage} alt="Real Madrid Academy" className="h-24 w-24 mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold">Real Madrid Academy</h1>
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6">Coming to South Africa</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Join the prestigious Real Madrid Academy and train like the champions.
            Now accepting young footballers from age 6 in Cape Town(Imhoff) and Johannesburg(Moddernfontien).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="madridGold"
              size="lg"
              className="text-lg px-8 py-4"
              onClick={() => navigate("/registration")}
            >
              Register Now - R1,500
            </Button>
            <Button
              variant="madridWhite"
              size="lg"
              className="text-lg px-8 py-4"
              onClick={() => window.open("https://wa.me/27716447639", "_blank")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-madrid-navy mb-6">
              Train Like Champions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the world-class training methodology that has produced some of football's greatest players.
              Our academy brings Real Madrid's legendary coaching philosophy to South Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Age Requirements Card */}
          <div onClick={() => navigate("/requirements")} className="cursor-pointer">
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <Calendar className="h-12 w-12 text-madrid-blue mx-auto mb-4" />
                <CardTitle className="text-2xl text-madrid-navy">Age Requirements</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg">We welcome young footballers starting from</p>
                <p className="text-3xl font-bold text-madrid-blue mt-2">6 Years Old</p>
                <p className="text-muted-foreground mt-4">
                  Early development is key to mastering the beautiful game
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Training Card */}
          <div onClick={() => navigate("/training")} className="cursor-pointer">
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <TrainFront className="h-12 w-12 text-madrid-blue mx-auto mb-4" />
                <CardTitle className="text-2xl text-madrid-navy">World-Class Training</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg">Professional coaching using</p>
                <p className="text-xl font-bold text-madrid-blue mt-2">Real Madrid Methods</p>
                <p className="text-muted-foreground mt-4">
                  The same techniques used at Santiago Bernabéu
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Card */}
          <div onClick={() => navigate("/benefits")} className="cursor-pointer">
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <Trophy className="h-12 w-12 text-madrid-blue mx-auto mb-4" />
                <CardTitle className="text-2xl text-madrid-navy">Benefits</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg">Allowance</p>
                <p className="text-xl font-bold text-madrid-blue mt-2">Europe Exposure</p>
                <p className="text-muted-foreground mt-4">
                  The same techniques used at Santiago Bernabéu
                </p>
              </CardContent>
            </Card>
          </div>
          </div>
        </div>
      </section>

      {/* Academy Leader Section */}
      <section className="py-20 bg-madrid-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-madrid-navy mb-6">
              Meet Our Academy Leader
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leading the way for youth football excellence in South Africa
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-elegant hover:shadow-elegant-lg transition-all duration-300">
              <CardHeader className="bg-gradient-hero text-madrid-white rounded-t-lg">
                <CardTitle className="text-3xl text-center">Alberto Gimenez</CardTitle>
              </CardHeader>
              <CardContent className="p-8 text-center">
                <img
                  src={leaderImage}
                  alt="Alberto Gimenez"
                  className="w-full max-h-[500px] object-cover rounded-lg mb-6 mx-auto"
                />
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Alberto Gimenez is the leader of the Real Madrid Academy in South Africa.
                  With years of experience in elite youth coaching and a passion for developing
                  talent, he brings Real Madrid’s prestigious football methodology to our local players.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-madrid-navy mb-6">Our Young Champions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the next generation of football stars training at our academy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[duelImage, attackerImage, attackingImage, goalKeeperImage, discussImage, kidsImage, attackingImage, skeemImage, winningImage].map((img, i) => (
              <img key={i} src={img} alt={`Gallery ${i}`} className="aspect-square rounded-lg object-cover shadow-card hover:shadow-elegant transition-all duration-300" />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero text-madrid-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join the Academy?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards your child's football journey with the world's most successful club
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="madridGold"
              size="lg"
              className="text-lg px-8 py-4"
              onClick={() => navigate("/registration")}
            >
              Register Now - R1,500
            </Button>
            <Button
              variant="madridWhite"
              size="lg"
              className="text-lg px-8 py-4"
              onClick={() => window.open("https://wa.me/27716447639", "_blank")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-madrid-navy text-madrid-white">
        <div className="container mx-auto px-4 text-center">
          <img
            src={logoImage}
            alt="Real Madrid Academy"
            className="h-12 w-12 mx-auto mb-3"
          />
          <p className="text-madrid-white/80 mb-2">
            © 2025 Real Madrid Academy South Africa
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
