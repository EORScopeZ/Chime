
import { TeamMember } from '@/types';

interface TeamMemberCardProps {
  member: TeamMember;
  onRemove: (id: string) => void;
  onUpdateRole: (id: string, role: 'admin' | 'viewer') => void;
}

const TeamMemberCard = ({ member, onRemove, onUpdateRole }: TeamMemberCardProps) => {
  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onUpdateRole(member.id, e.target.value as 'admin' | 'viewer');
  };
  
  return (
    <div className="card-elevated p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue">
            {member.name.charAt(0).toUpperCase()}
          </div>
          
          <div className="ml-3">
            <h3 className="font-medium text-white">{member.name}</h3>
            <p className="text-xs text-gray-400">{member.email}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="rounded-full h-2 w-2 bg-green-500"></div>
          <span className="text-xs text-gray-400">
            {member.status === 'active' ? 'Active' : member.status === 'invited' ? 'Invited' : 'Inactive'}
          </span>
        </div>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <div>
          <label className="text-xs text-gray-400 block mb-1">Role</label>
          <select 
            value={member.role} 
            onChange={handleRoleChange}
            className="bg-dark-bg border border-white/10 text-white rounded-md px-3 py-1.5 text-sm"
          >
            <option value="admin">Admin</option>
            <option value="viewer">Viewer</option>
          </select>
        </div>
        
        <button 
          onClick={() => onRemove(member.id)}
          className="text-sm text-red-500 hover:text-red-400"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TeamMemberCard;
