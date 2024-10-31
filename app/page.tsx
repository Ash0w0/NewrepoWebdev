import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Code2, Users, Shield, Globe, Rocket, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              Premier IT Staffing Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Connect with India's Top
              <span className="text-primary block">Tech Talent Pool</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access highly skilled developers, QA engineers, and tech professionals at competitive rates.
              Scale your team efficiently with our vetted talent pool.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" asChild className="transition-transform hover:scale-105">
                <Link href="#contact">Hire Developers</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="transition-transform hover:scale-105">
                <Link href="/register">Join as Developer</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground">Comprehensive tech solutions for your business needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6 space-y-4">
                <Code2 className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Development</h3>
                <p className="text-muted-foreground">
                  Frontend, Backend, Full-stack, and Mobile development experts
                </p>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6 space-y-4">
                <Shield className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Manual and automated testing professionals
                </p>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6 space-y-4">
                <Rocket className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">DevOps</h3>
                <p className="text-muted-foreground">
                  Cloud infrastructure and automation specialists
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground">What sets us apart from the competition</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-6 w-6" />,
                title: "Vetted Talent",
                description: "Rigorous screening process ensuring top-quality professionals"
              },
              {
                icon: <Globe className="h-6 w-6" />,
                title: "Global Reach",
                description: "Connect with clients worldwide while working from India"
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Secure Contracts",
                description: "Protected agreements for both clients and developers"
              },
              {
                icon: <CheckCircle className="h-6 w-6" />,
                title: "Quality Assured",
                description: "Consistent delivery of high-quality work"
              },
              {
                icon: <Rocket className="h-6 w-6" />,
                title: "Fast Deployment",
                description: "Quick team scaling and project initialization"
              },
              {
                icon: <Code2 className="h-6 w-6" />,
                title: "Technical Excellence",
                description: "Specialized expertise across various technologies"
              }
            ].map((item, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Dream Team?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get in touch with us to discuss your requirements and find the perfect tech professionals for your project.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="transition-transform hover:scale-105">
              <Link href="mailto:contact@webdevelopmentsolutions.in">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}