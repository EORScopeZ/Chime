
import { useState } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { toast } from '@/components/ui/sonner';
import { Switch } from '@/components/ui/switch';

const Settings = () => {
  const [reminderDays, setReminderDays] = useState(3);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [timeZone, setTimeZone] = useState('America/New_York');
  const [currency, setCurrency] = useState('USD');
  const [darkMode, setDarkMode] = useState(true);
  
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Settings saved successfully");
  };
  
  const handleTestNotification = () => {
    toast.success("Test notification sent");
  };
  
  return (
    <AppLayout
      title="Settings"
      subtitle="Configure your preferences"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Notification Settings */}
        <div className="md:col-span-2">
          <div className="card-elevated p-6">
            <h2 className="text-lg font-medium text-white mb-6">Notification Settings</h2>
            
            <form onSubmit={handleSave}>
              <div className="space-y-6">
                {/* Email Notifications */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">Email Notifications</h3>
                    <p className="text-sm text-gray-400">Receive renewal notifications by email</p>
                  </div>
                  <Switch 
                    checked={emailNotifications} 
                    onCheckedChange={setEmailNotifications}
                    className="bg-dark-bg data-[state=checked]:bg-neon-blue" 
                  />
                </div>
                
                {/* Push Notifications */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">Push Notifications</h3>
                    <p className="text-sm text-gray-400">Receive push notifications on your device</p>
                  </div>
                  <Switch 
                    checked={pushNotifications} 
                    onCheckedChange={setPushNotifications}
                    className="bg-dark-bg data-[state=checked]:bg-neon-blue" 
                  />
                </div>
                
                {/* Reminder Days */}
                <div>
                  <label htmlFor="reminderDays" className="block text-white font-medium mb-1">
                    Reminder Days Before Renewal
                  </label>
                  <input
                    id="reminderDays"
                    type="number"
                    min="1"
                    max="30"
                    value={reminderDays}
                    onChange={(e) => setReminderDays(parseInt(e.target.value))}
                    className="input-glow w-full md:w-48 px-4 py-2.5 text-white focus:outline-none"
                  />
                  <p className="text-sm text-gray-400 mt-1">
                    Send a reminder {reminderDays} day{reminderDays !== 1 ? 's' : ''} before renewal
                  </p>
                </div>
                
                {/* Time Zone */}
                <div>
                  <label htmlFor="timeZone" className="block text-white font-medium mb-1">
                    Time Zone
                  </label>
                  <select
                    id="timeZone"
                    value={timeZone}
                    onChange={(e) => setTimeZone(e.target.value)}
                    className="input-glow w-full md:w-72 px-4 py-2.5 text-white focus:outline-none"
                  >
                    <option value="America/New_York" className="bg-dark-bg">Eastern Time (ET)</option>
                    <option value="America/Chicago" className="bg-dark-bg">Central Time (CT)</option>
                    <option value="America/Denver" className="bg-dark-bg">Mountain Time (MT)</option>
                    <option value="America/Los_Angeles" className="bg-dark-bg">Pacific Time (PT)</option>
                    <option value="Europe/London" className="bg-dark-bg">London (GMT)</option>
                    <option value="Europe/Paris" className="bg-dark-bg">Paris (CET)</option>
                    <option value="Asia/Tokyo" className="bg-dark-bg">Tokyo (JST)</option>
                  </select>
                </div>
                
                {/* Test Notification */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleTestNotification}
                    className="px-4 py-2 bg-dark-bg hover:bg-dark-elevated text-white rounded-md transition-colors"
                  >
                    Send Test Notification
                  </button>
                </div>
                
                <div className="border-t border-white/10 pt-6">
                  <button type="submit" className="btn-glow">
                    Save Notification Settings
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        
        {/* Display Settings and Account */}
        <div className="space-y-6">
          {/* Display Settings */}
          <div className="card-elevated p-6">
            <h2 className="text-lg font-medium text-white mb-6">Display Settings</h2>
            
            <div className="space-y-6">
              {/* Dark Mode */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Dark Mode</h3>
                  <p className="text-sm text-gray-400">Use dark theme</p>
                </div>
                <Switch 
                  checked={darkMode} 
                  onCheckedChange={setDarkMode} 
                  className="bg-dark-bg data-[state=checked]:bg-neon-blue"
                />
              </div>
              
              {/* Currency */}
              <div>
                <label htmlFor="currency" className="block text-white font-medium mb-1">
                  Currency
                </label>
                <select
                  id="currency"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="input-glow w-full px-4 py-2.5 text-white focus:outline-none"
                >
                  <option value="USD" className="bg-dark-bg">USD ($)</option>
                  <option value="EUR" className="bg-dark-bg">EUR (€)</option>
                  <option value="GBP" className="bg-dark-bg">GBP (£)</option>
                  <option value="JPY" className="bg-dark-bg">JPY (¥)</option>
                  <option value="CAD" className="bg-dark-bg">CAD ($)</option>
                  <option value="AUD" className="bg-dark-bg">AUD ($)</option>
                </select>
              </div>
              
              <button 
                onClick={() => toast.success("Display settings saved")}
                className="w-full btn-glow"
              >
                Save Display Settings
              </button>
            </div>
          </div>
          
          {/* Account Settings */}
          <div className="card-elevated p-6">
            <h2 className="text-lg font-medium text-white mb-6">Account</h2>
            <div className="space-y-4">
              <button className="w-full px-4 py-2 bg-dark-bg hover:bg-dark-elevated text-white rounded-md transition-colors">
                Change Password
              </button>
              <button className="w-full px-4 py-2 border border-red-500/20 text-red-500 hover:bg-red-500/10 rounded-md transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Settings;
