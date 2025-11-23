import mitochondrialProteases from '@/assets/research/mitochondrial-proteases.png'

export default function Research() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Research</h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          We investigate the <strong>structure and dynamics of biomacromolecules</strong> and
          how these properties <strong>dictate their functions</strong>. Our group specializes
          in understanding protein complexes through structural characterization and dynamic
          analysis, with particular emphasis on supramolecular assemblies that maintain
          cellular protein quality control.
        </p>
      </div>

      {/* Featured Image */}
      <div className="mb-16 flex justify-center">
        <img
          src={mitochondrialProteases}
          alt="Mitochondrial proteases structure"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
      </div>

      {/* Research Areas */}
      <div className="space-y-12">
        {/* Mitochondrial AAA Proteases */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Mitochondrial AAA Proteases
          </h2>
          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>
              We examine protein degradation machinery in mitochondria, specifically two AAA
              proteases (<strong>i-AAA</strong> and <strong>m-AAA</strong>) that operate on
              the inner mitochondrial membrane. These proteases remove damaged proteins and
              regulate mitochondrial biosynthesis, metabolism, and cellular dynamics through
              selective protein breakdown.
            </p>
            <p>
              Understanding how these molecular machines recognize, unfold, and degrade their
              substrates is crucial for comprehending mitochondrial quality control and its
              role in cellular health.
            </p>
          </div>
        </section>

        {/* AAA+ ATPases */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            AAA+ ATPases
          </h2>
          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>
              The laboratory studies this versatile class of molecular machines that convert
              ATP energy into mechanical forces for substrate remodeling. Current investigations
              focus on proteins like <strong>VAT</strong> and <strong>p97</strong>, which unfold
              protein substrates and prepare them for degradation.
            </p>
            <p>
              We explore interactions between these motors, their substrates, and associated
              cofactors to understand how energy is harnessed to perform mechanical work at
              the molecular level.
            </p>
          </div>
        </section>

        {/* Methodological Approach */}
        <section className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Methodological Approach
          </h2>
          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>
              We employ advanced <strong>Nuclear Magnetic Resonance (NMR) spectroscopy</strong> as
              our primary technique, combined with complementary biophysical and biochemical methods.
              Through collaborations, we incorporate structural tools including <strong>cryo-EM</strong> and{' '}
              <strong>mass spectrometry</strong> to achieve comprehensive characterization of our
              protein systems.
            </p>
            <p>
              This multi-disciplinary approach enables us to capture both static structural
              snapshots and dynamic conformational changes, providing a complete picture of
              how these molecular machines function.
            </p>
          </div>
        </section>

        {/* Broader Goals */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Broader Goals
          </h2>
          <div className="text-gray-600 leading-relaxed">
            <p>
              Our lab aims to clarify disease mechanisms caused by protein mutations and develop
              therapeutic intervention strategies targeting these molecular assemblies. By
              understanding the fundamental principles of protein quality control, we hope to
              contribute to treatments for diseases linked to protein misfolding and
              mitochondrial dysfunction.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
