import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import logoImage from "@/assets/logoRealMadrid.png";
import heroImage from "@/assets/2025RealAcademy.jpg";

const Registration = () => {
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
              className="h-20 w-20 mr-4"
            />
            <h1 className="text-5xl md:text-6xl font-bold">
              Registration Details
            </h1>
          </div>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-6">
            Secure your spot at the Real Madrid Academy in South Africa!
          </p>
          <Button variant="madridGold" size="lg" className="text-lg px-8 py-4">
            Pay Registration Fee – R1,500
          </Button>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto shadow-card">
            <CardHeader>
              <CardTitle className="text-3xl text-madrid-navy text-center">
                Important Information
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4 text-center">
              <p>
                The registration fee is <span className="font-bold text-madrid-blue">R1,500</span>.
              </p>
              <p>
                Please note that after registration, there will be further steps and assessments to complete your application.
              </p>
              <p>
                For more information or questions, feel free to <span className="font-semibold text-madrid-blue">WhatsApp us at 071 644 7639</span>.
              </p>
              <Button
                variant="madridWhite"
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => window.open("https://wa.me/27716447639", "_blank")}
                >
                WhatsApp Now
            </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
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

export default Registration;
