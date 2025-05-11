
import AppLayout from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, PhoneCall } from 'lucide-react';

const Contact = () => {
  return (
    <AppLayout
      title="Contact Us"
      subtitle="Have questions or suggestions? Get in touch with our team."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
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
        
        <div className="space-y-6">
          <div className="bg-dark-card p-6 rounded-xl border border-white/5">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Mail className="h-5 w-5 text-neon-blue mr-2" /> Email
            </h3>
            <p className="text-gray-300">
              For general inquiries: <a href="mailto:info@chimesub.app" className="text-neon-blue">info@chimesub.app</a>
            </p>
            <p className="text-gray-300">
              For support requests: <a href="mailto:support@chimesub.app" className="text-neon-blue">support@chimesub.app</a>
            </p>
            <p className="text-gray-300">
              We typically respond to all emails within 24 hours during business days.
            </p>
          </div>
          
          <div className="bg-dark-card p-6 rounded-xl border border-white/5">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <PhoneCall className="h-5 w-5 text-neon-blue mr-2" /> Phone
            </h3>
            <p className="text-gray-300">
              Customer Support: <a href="tel:+18005551234" className="text-neon-blue">+1 (800) 555-1234</a>
            </p>
            <p className="text-gray-300">
              Business Inquiries: <a href="tel:+18005555678" className="text-neon-blue">+1 (800) 555-5678</a>
            </p>
            <p className="text-gray-300 mt-2">
              Hours: Monday to Friday, 9AM - 5PM EST
            </p>
          </div>
          
          <div className="bg-dark-card p-6 rounded-xl border border-white/5">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <MessageSquare className="h-5 w-5 text-neon-blue mr-2" /> Live Chat
            </h3>
            <p className="text-gray-300">
              Our live chat support is available during business hours for immediate assistance with any questions or issues.
            </p>
            <Button className="mt-4 bg-neon-purple hover:bg-neon-magenta text-white">
              Start Live Chat
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-12 bg-dark-elevated p-6 rounded-xl border border-white/5">
        <h3 className="text-xl font-bold mb-6">Frequently Asked Support Questions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-neon-blue font-medium mb-2">How do I cancel my subscription?</h4>
            <p className="text-gray-300">
              You can cancel your subscription at any time from your account settings. Navigate to Settings > Billing and click "Cancel Subscription."
            </p>
          </div>
          
          <div>
            <h4 className="text-neon-blue font-medium mb-2">Can I change my plan?</h4>
            <p className="text-gray-300">
              Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the beginning of your next billing cycle.
            </p>
          </div>
          
          <div>
            <h4 className="text-neon-blue font-medium mb-2">How do I update my payment information?</h4>
            <p className="text-gray-300">
              Go to Settings > Billing > Payment Methods to update your credit card or other payment details.
            </p>
          </div>
          
          <div>
            <h4 className="text-neon-blue font-medium mb-2">Is there a mobile app?</h4>
            <p className="text-gray-300">
              Yes, our mobile app is available for both iOS and Android devices. Search for "Chime Subscription" in your app store.
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Contact;
