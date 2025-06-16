export default function MissionVision() {
  return (
    <section className="py-20 bg-white" id="mission">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-teal-800 mb-4">Our Purpose</h2>
          <div className="w-20 h-1 bg-amber-300 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-teal-50 p-8 rounded-xl">
            <h3 className="text-2xl font-medium text-teal-700 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To create a safe, anonymous space where individuals can share their mental health journeys, connect with
              others who understand, and access qualified professional support without fear of judgment or stigma.
            </p>
          </div>

          <div className="bg-amber-50 p-8 rounded-xl">
            <h3 className="text-2xl font-medium text-amber-700 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              A world where everyone feels empowered to prioritize their mental wellbeing, where seeking help is
              normalized, and where healing happens through community and professional guidance working in harmony.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
