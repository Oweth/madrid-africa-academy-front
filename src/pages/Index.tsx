import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Calendar, Users, Star, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-madrid-academy.jpg";
import logoImage from "@/assets/madrid-academy-logo.png";

const Index = () => {
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
            <img 
              src={logoImage} 
              alt="Real Madrid Academy" 
              className="h-24 w-24 mr-4"
            />
            <h1 className="text-5xl md:text-7xl font-bold">
              Real Madrid Academy
            </h1>
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6">
            Coming to South Africa
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Join the prestigious Real Madrid Academy and train like the champions. 
            Now accepting young footballers from age 6 in Cape Town and Johannesburg.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="madridGold" size="lg" className="text-lg px-8 py-4">
              Register Now - R1,500
            </Button>
            <Button variant="madridWhite" size="lg" className="text-lg px-8 py-4">
              Learn More
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

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <Star className="h-12 w-12 text-madrid-gold mx-auto mb-4" />
                <CardTitle className="text-2xl text-madrid-navy">Registration Fee</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg">Secure your spot for only</p>
                <p className="text-3xl font-bold text-madrid-gold mt-2">R1,500</p>
                <p className="text-muted-foreground mt-4">
                  Includes training kit and academy resources
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <Trophy className="h-12 w-12 text-madrid-blue mx-auto mb-4" />
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
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-20 bg-madrid-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-madrid-navy mb-6">
              Our South African Branches
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the location that's most convenient for your young champion
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Cape Town Branch */}
            <Card className="shadow-elegant hover:scale-105 transition-all duration-300">
              <CardHeader className="bg-gradient-hero text-madrid-white rounded-t-lg">
                <CardTitle className="text-3xl flex items-center">
                  <MapPin className="h-8 w-8 mr-3" />
                  Cape Town Branch
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Users className="h-16 w-16 text-madrid-blue mx-auto mb-4" />
                      <p className="text-lg text-muted-foreground">
                        Training Photos Coming Soon
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        See our young athletes in action
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-madrid-blue mr-3" />
                      <span>Location details to be announced</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-madrid-blue mr-3" />
                      <span>+27 (0) 21 XXX XXXX</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-madrid-blue mr-3" />
                      <span>capetown@realmadridacademy.co.za</span>
                    </div>
                  </div>
                  <Button variant="madrid" className="w-full">
                    Register for Cape Town
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Johannesburg Branch */}
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader className="bg-gradient-hero text-madrid-white rounded-t-lg">
                <CardTitle className="text-3xl flex items-center">
                  <MapPin className="h-8 w-8 mr-3" />
                  Johannesburg Branch
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Users className="h-16 w-16 text-madrid-blue mx-auto mb-4" />
                      <p className="text-lg text-muted-foreground">
                        Training Photos Coming Soon
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        See our young athletes in action
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-madrid-blue mr-3" />
                      <span>Location details to be announced</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-madrid-blue mr-3" />
                      <span>+27 (0) 11 XXX XXXX</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-madrid-blue mr-3" />
                      <span>johannesburg@realmadridacademy.co.za</span>
                    </div>
                  </div>
                  <Button variant="madrid" className="w-full">
                    Register for Johannesburg
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-madrid-navy mb-6">
              Our Young Champions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the next generation of football stars training at our academy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-muted rounded-lg flex items-center justify-center shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="text-center">
                  <Users className="h-16 w-16 text-madrid-blue mx-auto mb-4" />
                  <p className="text-lg font-semibold text-madrid-navy">
                    Player Photo {item}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Coming Soon
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-hero text-madrid-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join the Academy?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards your child's football journey with the world's most successful club
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="madridGold" size="lg" className="text-lg px-8 py-4">
              Register Now - R1,500
            </Button>
            <Button variant="madridWhite" size="lg" className="text-lg px-8 py-4">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-madrid-navy text-madrid-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src={logoImage} alt="Real Madrid Academy" className="h-12 w-12 mr-3" />
                <h3 className="text-2xl font-bold">Real Madrid Academy</h3>
              </div>
              <p className="text-madrid-white/80">
                South Africa's premier football academy, bringing Real Madrid's world-class training to young athletes.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
              <div className="space-y-2">
                <p className="text-madrid-white/80">Cape Town: +27 (0) 21 XXX XXXX</p>
                <p className="text-madrid-white/80">Johannesburg: +27 (0) 11 XXX XXXX</p>
                <p className="text-madrid-white/80">info@realmadridacademy.co.za</p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Info</h4>
              <div className="space-y-2">
                <p className="text-madrid-white/80">Age: 6 years and up</p>
                <p className="text-madrid-white/80">Registration: R1,500</p>
                <p className="text-madrid-white/80">Two branches: CPT & JHB</p>
              </div>
            </div>
          </div>
          <div className="border-t border-madrid-white/20 mt-8 pt-8 text-center">
            <p className="text-madrid-white/60">
              © 2024 Real Madrid Academy South Africa. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
