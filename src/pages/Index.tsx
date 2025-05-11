
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, CreditCard, Mail, MessageSquare, Users, MailCheck, LockKeyhole, LineChart } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events for navbar effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-3 shadow-md' : 'py-5 bg-transparent'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-neon-blue/20 flex items-center justify-center shadow-neon">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neon-blue" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
              </div>
  <button 
    onClick={() => window.location.href = '/'}
    className="text-xl font-bold text-white focus:outline-none"
  >
    Chime
  </button>
</div>

          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-neon-blue transition-colors">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-neon-blue transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-300 hover:text-neon-blue transition-colors">Testimonials</a>
            <a href="#faq" className="text-gray-300 hover:text-neon-blue transition-colors">FAQ</a>
            <a href="#contact" className="text-gray-300 hover:text-neon-blue transition-colors">Contact</a>
          </div>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => navigate('/login')}
              className="text-neon-blue border border-neon-blue/30 px-4 py-2 rounded-md hover:bg-neon-blue/10 transition-all"
            >
              Login
            </button>
            <button 
              onClick={() => navigate('/register')}
              className="btn-glow"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-glow">Simplify</span> Your Subscription Management
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8">
            Track, optimize, and manage all your subscriptions in one place. Never overpay or forget a renewal again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => navigate('/register')}
              className="btn-glow text-lg px-6 py-3"
            >
              Start For Free
            </button>
            <a 
              href="#features" 
              className="text-white border border-white/30 px-6 py-3 rounded-md hover:bg-white/5 transition-all text-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
      
      {/* Dashboard Preview */}
      <section className="py-16 px-4 overflow-hidden">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Dashboard</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get a complete overview of your subscription spending with our intuitive dashboard.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Glow effect wrapper */}
          <div className="absolute inset-0 blur-md bg-neon-blue/10 rounded-xl animate-glow"></div>
          {/* Dashboard preview */}
          <div className="relative animate-float bg-dark-elevated p-4 rounded-xl border border-neon-blue/30 shadow-neon">
            <img 
              src="/public/Dashboard.png" 
              alt="Chime Dashboard" 
              className="w-full rounded-lg shadow-lg"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://placehold.co/1200x675/0A0A0F/1EAEDB?text=Chime+Dashboard';
              }}
            />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-dark-elevated/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Everything you need to take control of your subscription expenses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-dark-card p-6 rounded-xl border border-white/5 hover:border-neon-blue/20 transition-all">
              <div className="rounded-full p-3 bg-neon-blue/10 w-fit mb-4">
                <CreditCard className="h-6 w-6 text-neon-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Subscription Tracking</h3>
              <p className="text-gray-300">
                Track all your subscriptions in one place with automatic renewal reminders.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-dark-card p-6 rounded-xl border border-white/5 hover:border-neon-blue/20 transition-all">
              <div className="rounded-full p-3 bg-purple-neon/10 w-fit mb-4">
                <LineChart className="h-6 w-6 text-neon-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Spending Analysis</h3>
              <p className="text-gray-300">
                Get visual breakdowns of your spending patterns and identify opportunities to save.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-dark-card p-6 rounded-xl border border-white/5 hover:border-neon-blue/20 transition-all">
              <div className="rounded-full p-3 bg-neon-blue/10 w-fit mb-4">
                <CheckCircle className="h-6 w-6 text-neon-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Recommendations</h3>
              <p className="text-gray-300">
                Get personalized suggestions for optimizing your subscription portfolio.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-dark-card p-6 rounded-xl border border-white/5 hover:border-neon-blue/20 transition-all">
              <div className="rounded-full p-3 bg-purple-neon/10 w-fit mb-4">
                <Users className="h-6 w-6 text-neon-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Team Management</h3>
              <p className="text-gray-300">
                Share subscription management with your team or family members.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-dark-card p-6 rounded-xl border border-white/5 hover:border-neon-blue/20 transition-all">
              <div className="rounded-full p-3 bg-neon-blue/10 w-fit mb-4">
                <MailCheck className="h-6 w-6 text-neon-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Notifications</h3>
              <p className="text-gray-300">
                Never miss a renewal with customizable alerts and notifications.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-dark-card p-6 rounded-xl border border-white/5 hover:border-neon-blue/20 transition-all">
              <div className="rounded-full p-3 bg-purple-neon/10 w-fit mb-4">
                <LockKeyhole className="h-6 w-6 text-neon-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Data</h3>
              <p className="text-gray-300">
                Your financial information is always encrypted and protected.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Choose the plan that's right for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-dark-card p-6 rounded-xl border border-white/10 transition-all duration-300 hover:border-neon-blue/30">
              <h3 className="text-xl font-bold mb-2">Basic</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">Free</span>
                <span className="text-gray-400">/forever</span>
              </div>
              <p className="text-gray-300 mb-6">Perfect for individuals just getting started</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-neon-blue mr-2" />
                  <span>Up to 5 subscriptions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-neon-blue mr-2" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-neon-blue mr-2" />
                  <span>Email reminders</span>
                </li>
              </ul>
              
              <button className="w-full py-2 border border-neon-blue text-neon-blue rounded-md hover:bg-neon-blue/10 transition-all">
                Get Started
              </button>
            </div>
            
            {/* Premium Plan - Featured */}
            <div className="bg-dark-elevated p-6 rounded-xl border-2 border-neon-blue shadow-neon scale-105 z-10 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-neon-blue text-black text-sm font-bold py-1 px-4 rounded-full">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-2 text-neon-blue">Premium</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">$9.99</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-gray-300 mb-6">Perfect for power users and small families</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-neon-blue mr-2" />
                  <span>Unlimited subscriptions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-neon-blue mr-2" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-neon-blue mr-2" />
                  <span>Custom categories</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-neon-blue mr-2" />
                  <span>Savings recommendations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-neon-blue mr-2" />
                  <span>Up to 3 users</span>
                </li>
              </ul>
              
              <button className="w-full py-2 bg-neon-blue text-black font-medium rounded-md hover:bg-neon-blue-light transition-all">
                Get Premium
              </button>
            </div>
            
            {/* Business Plan */}
            <div className="bg-dark-card p-6 rounded-xl border border-white/10 transition-all duration-300 hover:border-neon-purple/30">
              <h3 className="text-xl font-bold mb-2">Business</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">$24.99</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-gray-300 mb-6">Perfect for businesses and teams</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-neon-purple mr-2" />
                  <span>Everything in Premium</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-neon-purple mr-2" />
                  <span>Up to 10 team members</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-neon-purple mr-2" />
                  <span>Role-based permissions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-neon-purple mr-2" />
                  <span>API access</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-neon-purple mr-2" />
                  <span>Priority support</span>
                </li>
              </ul>
              
              <button className="w-full py-2 border border-neon-purple text-neon-purple rounded-md hover:bg-neon-purple/10 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 bg-dark-elevated/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it—hear from people who've transformed their subscription management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <Card className="bg-dark-card border border-white/5">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center mb-2 border border-white/10">
                    <span className="text-2xl font-bold text-neon-blue">S</span>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-sm text-gray-400">Small Business Owner</p>
                  </div>
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-center">
                  "Chime has saved my business thousands of dollars by helping us identify redundant subscriptions. The interface is beautiful and intuitive."
                </p>
              </CardContent>
            </Card>
            
            {/* Testimonial 2 */}
            <Card className="bg-dark-card border border-neon-blue/20 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue/30 to-neon-purple/30 flex items-center justify-center mb-2 border border-neon-blue/30 shadow-neon">
                    <span className="text-2xl font-bold text-neon-blue">M</span>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold">Michael Chen</h4>
                    <p className="text-sm text-gray-400">Software Engineer</p>
                  </div>
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-center">
                  "As someone with over 20 different subscriptions, Chime has been a game-changer. The analytics are top-notch, and I love the notification system."
                </p>
              </CardContent>
            </Card>
            
            {/* Testimonial 3 */}
            <Card className="bg-dark-card border border-white/5">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center mb-2 border border-white/10">
                    <span className="text-2xl font-bold text-neon-purple">A</span>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold">Alex Rodriguez</h4>
                    <p className="text-sm text-gray-400">Digital Nomad</p>
                  </div>
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-center">
                  "I'm constantly traveling, and Chime helps me keep track of my subscriptions across different currencies. The mobile experience is just as smooth as desktop."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300">
              Find answers to common questions about Chime
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-white/10">
              <AccordionTrigger className="text-left text-lg font-medium hover:text-neon-blue">
                How does Chime track my subscriptions?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Chime allows you to manually add your subscriptions, or connect your email to automatically detect subscription receipts. We never store your financial data - we only track the subscription information you provide.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-white/10">
              <AccordionTrigger className="text-left text-lg font-medium hover:text-neon-blue">
                Is my data secure with Chime?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Absolutely. We use bank-level encryption to protect your data. We never sell your information to third parties, and you can delete your account and all associated data at any time.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-white/10">
              <AccordionTrigger className="text-left text-lg font-medium hover:text-neon-blue">
                Can I share access with family members?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Yes, our Premium and Business plans allow you to add additional users to your account. This is perfect for families or small teams looking to manage subscriptions together.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-white/10">
              <AccordionTrigger className="text-left text-lg font-medium hover:text-neon-blue">
                What payment methods do you accept?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                We accept all major credit cards, PayPal, and Apple Pay. For Business plans, we also support invoicing and bank transfers.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border-white/10">
              <AccordionTrigger className="text-left text-lg font-medium hover:text-neon-blue">
                Can I cancel my subscription at any time?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Yes, you can cancel your Chime subscription at any time. You'll continue to have access until the end of your current billing period.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-dark-card to-dark-elevated border-y border-white/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to take control of your subscriptions?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users who are saving money and gaining clarity on their subscription spending.
          </p>
          <Button 
            onClick={() => navigate('/register')}
            className="btn-glow text-lg px-8 py-6"
          >
            Get Started for Free
          </Button>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have questions or need help? Our support team is ready to assist you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark-card p-6 rounded-xl border border-white/5">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md bg-dark-elevated border border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md bg-dark-elevated border border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 rounded-md bg-dark-elevated border border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none transition-all"
                    placeholder="How can we help?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 rounded-md bg-dark-elevated border border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none transition-all"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <Button className="btn-glow w-full">
                  <Mail className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </div>
            
            <div className="bg-dark-card p-6 rounded-xl border border-white/5">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-neon-blue mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:support@chimesub.app" className="text-gray-300 hover:text-neon-blue transition-colors">
                      support@chimesub.app
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-neon-blue mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Live Chat</p>
                    <p className="text-gray-300">
                      Available Monday to Friday<br/>9AM to 5PM EST
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-white/10 pt-4 mt-6">
                  <h4 className="font-medium mb-2">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-dark-elevated pt-12 pb-6 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-md bg-neon-blue/20 flex items-center justify-center shadow-neon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neon-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </div>
                <h1 className="text-xl font-bold text-white">Chime</h1>
              </div>
              <p className="text-gray-400 mb-4">
                Simplify your subscription management and save money with our powerful tracking tools.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-300 hover:text-neon-blue transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-gray-300 hover:text-neon-blue transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">API</a></li>
                <li><a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">Careers</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-neon-blue transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-neon-blue transition-colors">Press</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Chime. All rights reserved.
              </p>
              
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-neon-blue text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-neon-blue text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-neon-blue text-sm transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
