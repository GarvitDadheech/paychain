import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./components/ui/Navbar";
import { Button } from "./components/ui/Button";
import { Section } from "./components/ui/Section";
import { FeatureCard } from "./components/ui/FeatureCard";
import { StepCard } from "./components/ui/StepCard";
import { FadeIn } from "./components/animations/FadeIn";
import { ScaleIn } from "./components/animations/ScaleIn";
import { Zap, Shield, BarChart3 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-950">
      <Navbar />
      
      {/* Hero Section */}
      <Section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
                Accept Crypto Payments Easily
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl mb-8 text-gray-300">
                Seamless, fast, and secure way to accept Solana & USDC payments.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href="/auth/login">
                <Button variant="gradient" size="lg" className="group">
                  <span>Get Started - Sign Up Now</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </Link>
            </FadeIn>
          </div>
          <ScaleIn delay={0.3}>
            <div className="relative h-80 md:h-96">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-purple-500/10 animate-pulse-slow" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80 flex items-center justify-center">
                  <Image
                    src="/crypto-illustration.svg"
                    alt="Crypto Payment Illustration"
                    width={400}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </ScaleIn>
        </div>
      </Section>
      
      {/* Feature Section */}
      <Section id="features" className="py-20 md:py-32 bg-black/20">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Powerful Features
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Everything you need to accept crypto payments and grow your business
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn delay={0.1}>
            <FeatureCard
              icon={Zap}
              title="Instant Crypto Payments"
              description="Accept payments in seconds with near-zero transaction fees using Solana's high-speed network."
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <FeatureCard
              icon={Shield}
              title="Secure & Transparent"
              description="All transactions are secured by blockchain technology with full transparency and immutability."
            />
          </FadeIn>
          <FadeIn delay={0.3}>
            <FeatureCard
              icon={BarChart3}
              title="Easy Merchant Dashboard"
              description="Track payments, analyze trends, and manage your crypto revenue with our intuitive dashboard."
            />
          </FadeIn>
        </div>
      </Section>
      
      {/* Onboarding Steps */}
      <Section className="py-20 md:py-32">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get Started in Three Simple Steps
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Our seamless onboarding process makes accepting crypto payments easier than ever
          </p>
        </FadeIn>
        
        <div className="space-y-6 max-w-3xl mx-auto">
          <FadeIn delay={0.1}>
            <StepCard
              number={1}
              title="Sign Up"
              description="Create your PayChain account in minutes. No lengthy verification process required."
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <StepCard
              number={2}
              title="Integrate"
              description="Add our simple payment button to your website with just a few lines of code."
            />
          </FadeIn>
          <FadeIn delay={0.3}>
            <StepCard
              number={3}
              title="Get Paid Instantly"
              description="Start accepting payments immediately. Funds arrive in your wallet in seconds."
            />
          </FadeIn>
        </div>
      </Section>
      
      {/* Pricing Section */}
      <Section id="pricing" className="py-20 md:py-32 bg-black/20">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              0% Platform Fees, Only Network Gas
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-gray-300 mb-8">
              No hidden charges, only blockchain network fees.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-500/20 rounded-3xl p-8 border border-white/10">
              <div className="text-5xl font-bold mb-4">0%</div>
              <p className="text-gray-300 mb-8">
                Unlike traditional payment processors that charge 2-3% per transaction,
                we only pass through the network gas fees, which are typically just cents.
              </p>
              <Link href="/auth/login">
                <Button variant="gradient">Get Started Free</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </Section>
      
      {/* Final CTA */}
      <Section className="py-20 md:py-32 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Accept Crypto?
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of merchants who are already growing their business with PayChain.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Link href="/auth/login">
            <Button variant="gradient" size="lg" className="animate-pulse-slow group">
              <span>Sign Up Today</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </Link>
        </FadeIn>
      </Section>
      
      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-bold">PayChain</span>
            </div>
            
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Terms
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Contact
              </Link>
            </div>
            
            <div className="text-sm text-gray-400 mt-4 md:mt-0">
              © 2023 PayChain. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
