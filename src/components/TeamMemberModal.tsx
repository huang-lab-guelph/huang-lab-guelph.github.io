import { X, User } from 'lucide-react'
import { TeamMember } from '@/types'

interface TeamMemberModalProps {
  member: TeamMember | null
  isOpen: boolean
  onClose: () => void
  imageUrl?: string
}

export default function TeamMemberModal({ member, isOpen, onClose, imageUrl }: TeamMemberModalProps) {
  if (!isOpen || !member) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with close button */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-start">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900">{member.name}</h2>
            <p className="text-lg text-primary font-semibold">{member.role}</p>
          </div>
          <button
            onClick={onClose}
            className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Image */}
          <div className="flex justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="w-24 h-24 text-gray-400" />
              )}
            </div>
          </div>

          {/* Detailed Bio */}
          {member.detailedBio && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">About</h3>
              <p className="text-gray-600 leading-relaxed">{member.detailedBio}</p>
            </div>
          )}

          {/* Research Focus */}
          {member.research && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Research Focus</h3>
              <p className="text-gray-600 leading-relaxed">{member.research}</p>
            </div>
          )}

          {/* Education */}
          {member.education && member.education.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Education</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {member.education.map((edu, idx) => (
                  <li key={idx}>{edu}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Timeline */}
          {member.startYear && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Timeline</h3>
              <p className="text-gray-600">{member.startYear} - Present</p>
            </div>
          )}

          {/* Degree (for alumni) */}
          {member.degree && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Degree</h3>
              <p className="text-gray-600">{member.degree}</p>
            </div>
          )}

          {/* Current Position (for alumni) */}
          {member.currentPosition && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Current Position</h3>
              <p className="text-gray-600">{member.currentPosition}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
