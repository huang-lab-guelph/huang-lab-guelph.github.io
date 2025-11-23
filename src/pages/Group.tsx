import { useState } from 'react'
import { User } from 'lucide-react'
import { TeamMember } from '@/types'
import teamData from '@/data/team.json'
import TeamMemberModal from '@/components/TeamMemberModal'

// Import team images
import ruiHuangImage from '@/assets/team/rui-huang.jpg'
import meganImage from '@/assets/team/megan.jpeg'
import loganImage from '@/assets/team/logan.png'
import peterKimImage from '@/assets/team/peterkim.png'
import paigeImage from '@/assets/team/paige.jpg'
import maxWongImage from '@/assets/team/maxwong.jpg'
import shayeImage from '@/assets/team/shaye.jpg'
import mahreenImage from '@/assets/team/mahreenchowdhury.jpg'
import nathanWongImage from '@/assets/team/nathanwong.jpg'
import meganHumphreyImage from '@/assets/team/meganhumprey.jpg'

// Map image filenames to imports
const imageMap: Record<string, string> = {
  'rui-huang.jpg': ruiHuangImage,
  'megan.jpeg': meganImage,
  'logan.png': loganImage,
  'peterkim.png': peterKimImage,
  'paige.jpg': paigeImage,
  'maxwong.jpg': maxWongImage,
  'shaye.jpg': shayeImage,
  'mahreenchowdhury.jpg': mahreenImage,
  'nathanwong.jpg': nathanWongImage,
  'meganhumprey.jpg': meganHumphreyImage,
}

export default function Group() {
  const team = teamData as TeamMember[]
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageUrl, setModalImageUrl] = useState<string | undefined>(undefined)

  const leader = team.filter(member => member.category === 'leader')
  const graduates = team.filter(member => member.category === 'graduate')
  const undergrads = team.filter(member => member.category === 'undergraduate')
  const alumni = team.filter(member => member.category === 'alumni')

  const handleMemberClick = (member: TeamMember) => {
    if (member.detailedBio) {
      setSelectedMember(member)
      setModalImageUrl(member.image ? imageMap[member.image] : undefined)
      setIsModalOpen(true)
    }
  }

  return (
    <>
      <TeamMemberModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={modalImageUrl}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Meet the talented researchers driving innovation in structural biology and NMR spectroscopy
          </p>
        </div>

      {/* Group Leader */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-primary">
          Group Leader
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {leader.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleMemberClick(member)}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
                {/* Image */}
                <div className="flex justify-center md:justify-start">
                  <div className="w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    {member.image && imageMap[member.image] ? (
                      <img
                        src={imageMap[member.image]}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-24 h-24 text-gray-400" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-lg text-primary font-semibold">{member.role}</p>
                  </div>

                  <p className="text-gray-600">{member.bio}</p>

                  {member.education && member.education.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {member.education.map((edu, idx) => (
                          <li key={idx}>{edu}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Graduate Students */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-primary">
          Graduate Students
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {graduates.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              onClick={() => handleMemberClick(member)}
            >
              {/* Image */}
              <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                {member.image && imageMap[member.image] ? (
                  <img
                    src={imageMap[member.image]}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-20 h-20 text-gray-400" />
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-primary font-semibold">{member.role}</p>
                  {member.startYear && (
                    <p className="text-xs text-gray-500">
                      {member.startYear}-current
                    </p>
                  )}
                </div>

                <p className="text-sm text-gray-600">{member.bio}</p>

                {member.research && (
                  <div className="pt-2 border-t border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Research Focus</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{member.research}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Undergraduate Students */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-primary">
          Undergraduate Students
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {undergrads.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              onClick={() => handleMemberClick(member)}
            >
              {/* Image */}
              <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                {member.image && imageMap[member.image] ? (
                  <img
                    src={imageMap[member.image]}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-16 h-16 text-gray-400" />
                )}
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-xs text-primary font-semibold mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Alumni */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-primary">
          Alumni
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {alumni.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="font-semibold text-gray-900">{member.name}</h3>
              {member.degree && (
                <p className="text-sm text-gray-600 mt-1">{member.degree}</p>
              )}
              {member.bio && (
                <p className="text-xs text-gray-500 mt-1">{member.bio}</p>
              )}
              {member.currentPosition && (
                <p className="text-sm text-primary mt-2">{member.currentPosition}</p>
              )}
            </div>
          ))}
        </div>
      </section>
      </div>
    </>
  )
}
