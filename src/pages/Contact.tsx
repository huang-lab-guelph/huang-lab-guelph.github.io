import { Mail, MapPin, Building2, Twitter, Linkedin, GraduationCap, Users } from 'lucide-react'

export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Get in touch with our research group at the University of Guelph
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          {/* Primary Contact */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Mail className="w-6 h-6 text-primary" />
              Primary Contact
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Dr. Rui Huang</h3>
                <p className="text-gray-600 text-sm mb-2">Assistant Professor</p>
                <a
                  href="mailto:rhuang08@uoguelph.ca"
                  className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  rhuang08@uoguelph.ca
                </a>
              </div>
            </div>
          </div>

          {/* Laboratory Location */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" />
              Laboratory Location
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">MacN-129</p>
                  <p className="text-gray-600">482 Gordon St</p>
                  <p className="text-gray-600">Guelph, ON N1G 1Y4</p>
                  <p className="text-gray-600">Canada</p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Location */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-primary" />
              Office Location
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">MacN-124</p>
                  <p className="text-gray-600">482 Gordon St</p>
                  <p className="text-gray-600">Guelph, ON N1G 1Y4</p>
                  <p className="text-gray-600">Canada</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Professional Networks */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h2>
            <div className="space-y-4">
              <a
                href="https://twitter.com/Ruihuangchem"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <Twitter className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="font-medium">Twitter</p>
                  <p className="text-sm text-gray-600">@Ruihuangchem</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/rui-huang-82108565/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-blue-700" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-gray-600">Rui Huang</p>
                </div>
              </a>

              <a
                href="https://researchgate.net/profile/Rui_Huang3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="font-medium">ResearchGate</p>
                  <p className="text-sm text-gray-600">Rui Huang</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Recruitment & Map Section */}
        <div className="space-y-6">
          {/* Join Our Lab */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl shadow-md border-2 border-primary/20 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900">Join Our Lab</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              We are actively recruiting <strong>motivated undergraduate and graduate students (MSc & PhD)</strong> interested in:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-gray-700">Protein Science</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-gray-700">Biomolecular NMR Spectroscopy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-gray-700">Structural Biology</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-gray-700">Protein Dynamics</span>
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              If you're interested in joining our research group, please contact Dr. Huang directly:
            </p>
            <a
              href="mailto:rhuang08@uoguelph.ca"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-md"
            >
              <Mail className="w-5 h-5" />
              Email Dr. Huang
            </a>
          </div>

          {/* Map */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-primary" />
                Find Us
              </h2>
            </div>
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.6358776888146!2d-80.22777492346924!3d43.53165686001848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b9a7a3e3a3e3d%3A0x3d3d3d3d3d3d3d3d!2sMacNaughton%20Building%2C%20University%20of%20Guelph!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="University of Guelph - MacNaughton Building Location"
              ></iframe>
            </div>
          </div>

          {/* Department Info */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Department Information</h2>
            <div className="space-y-2 text-gray-700">
              <p className="font-medium">Department of Chemistry</p>
              <p>University of Guelph</p>
              <p>MacNaughton Building</p>
              <p>Guelph, Ontario, Canada</p>
              <a
                href="https://www.uoguelph.ca/chemistry/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 mt-2"
              >
                Visit Department Website
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
