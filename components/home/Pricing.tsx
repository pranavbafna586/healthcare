import { FilePenIcon, SendIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center min-h-screen"
    >
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Pricing</h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Choose the plan that best suits your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Card className="bg-background rounded-xl shadow-md p-6 space-y-4 group hover:bg-primary transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold group-hover:text-primary-foreground">
                Starter
              </h3>
              <p className="text-4xl font-bold group-hover:text-primary-foreground">
                $9
              </p>
              <p className="text-muted-foreground group-hover:text-primary-foreground">
                per month
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground group-hover:text-primary-foreground">
                Up to 100 certificates per month
              </p>
              <p className="text-muted-foreground group-hover:text-primary-foreground">
                Basic customization options
              </p>
              <p className="text-muted-foreground group-hover:text-primary-foreground">
                Email delivery and analytics
              </p>
            </div>
            <Button className="group-hover:bg-primary-foreground group-hover:text-primary transition-all duration-300 ease-in-out rounded-xl">
              Get Started
            </Button>
          </Card>
          <Card className="bg-background rounded-xl shadow-md p-6 space-y-4 group hover:bg-primary transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold group-hover:text-primary-foreground">
                Pro
              </h3>
              <p className="text-4xl font-bold group-hover:text-primary-foreground">
                $29
              </p>
              <p className="text-muted-foreground group-hover:text-primary-foreground">
                per month
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground group-hover:text-primary-foreground">
                Up to 500 certificates per month
              </p>
              <p className="text-muted-foreground group-hover:text-primary-foreground">
                Advanced customization and branding
              </p>
              <p className="text-muted-foreground group-hover:text-primary-foreground">
                Email delivery, analytics, and integrations
              </p>
            </div>
            <Button className="group-hover:bg-primary-foreground  group-hover:text-primary transition-all duration-300 ease-in-out rounded-xl">
              Get Started
            </Button>
          </Card>

          <Card className="bg-background rounded-xl shadow-md p-6 space-y-4 group hover:bg-primary transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold group-hover:text-primary-foreground">
                Enterprise
              </h3>
              <p className="text-4xl font-bold group-hover:text-primary-foreground">
                Custom
              </p>
              <p className="text-muted-foreground group-hover:text-primary-foreground">
                Contact us for pricing
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground group-hover:text-primary-foreground">
                Unlimited certificates per month
              </p>
              <p className="text-muted-foreground group-hover:text-primary-foreground">
                Fully customizable and branded solution
              </p>
              <p className="text-muted-foreground group-hover:text-primary-foreground">
                Enterprise-grade security and support
              </p>
            </div>
            <Button className="group-hover:bg-primary-foreground group-hover:text-primary transition-all duration-300 ease-in-out rounded-xl">
              Contact Sales
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
