
import { useState } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import TeamMemberCard from '@/components/team/TeamMemberCard';
import { useApp } from '@/contexts/AppContext';
import { TeamMember } from '@/types';
import { toast } from '@/components/ui/sonner';

const TeamManagement = () => {
  const { teamMembers, addTeamMember, updateTeamMember, removeTeamMember } = useApp();
  const [newMember, setNewMember] = useState({ email: '', role: 'viewer' as 'admin' | 'viewer' });
  
  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create a new team member
    const member: TeamMember = {
      id: 'member-' + Math.random().toString(36).substr(2, 9),
      name: newMember.email.split('@')[0],
      email: newMember.email,
      role: newMember.role,
      joined: new Date(),
      status: 'invited',
    };
    
    addTeamMember(member);
    toast.success(`Invitation sent to ${newMember.email}`);
    setNewMember({ email: '', role: 'viewer' });
  };
  
  const handleRemoveMember = (id: string) => {
    if (window.confirm('Are you sure you want to remove this team member?')) {
      removeTeamMember(id);
      toast.success('Team member removed');
    }
  };
  
  const handleUpdateRole = (id: string, role: 'admin' | 'viewer') => {
    updateTeamMember(id, { role });
    toast.success('Role updated');
  };
  
  return (
    <AppLayout
      title="Team Management"
      subtitle="Manage team members and permissions"
    >
      {/* Invite form */}
      <div className="card-elevated p-6 mb-6">
        <h2 className="text-lg font-medium text-white mb-4">Invite a Team Member</h2>
        
        <form onSubmit={handleAddMember}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={newMember.email}
                onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                className="input-glow w-full px-4 py-2.5 text-white focus:outline-none"
                placeholder="colleague@company.com"
              />
            </div>
            
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-400 mb-1">
                Role
              </label>
              <select
                id="role"
                value={newMember.role}
                onChange={(e) => setNewMember({ ...newMember, role: e.target.value as 'admin' | 'viewer' })}
                className="input-glow w-full px-4 py-2.5 text-white focus:outline-none"
              >
                <option value="admin" className="bg-dark-bg">Admin</option>
                <option value="viewer" className="bg-dark-bg">Viewer</option>
              </select>
            </div>
          </div>
          
          <div className="mt-4">
            <button type="submit" className="btn-glow">
              Send Invitation
            </button>
            
            <p className="mt-2 text-xs text-gray-400">
              <span className="text-neon-blue">Admin:</span> Can add, edit, and remove subscriptions and team members.
              <br />
              <span className="text-neon-blue">Viewer:</span> Can only view subscriptions and reports.
            </p>
          </div>
        </form>
      </div>
      
      {/* Team members list */}
      <h2 className="text-lg font-medium text-white mb-4">Team Members</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.id}
            member={member}
            onRemove={handleRemoveMember}
            onUpdateRole={handleUpdateRole}
          />
        ))}
      </div>
    </AppLayout>
  );
};

export default TeamManagement;
