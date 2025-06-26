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
            To create a digital campfire where anyone can safely express their thoughts, 
            share experiences, and access real emotional support, without stigma, judgment, or paywalls.
            Whether it&apos;s a moment of vulnerability or a story of strength or laughter, 
            Xolace is a space where human connection and care are built into every interaction.
            </p>
          </div>

          <div className="bg-amber-50 p-8 rounded-xl">
            <h3 className="text-2xl font-medium text-amber-700 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
            To become the world&apos;s most trusted ecosystem for emotional expression and 
            everyday mental health, bridging the gap between traditional therapy and community-driven support.
            We envision a world where healing, empathy, and mental wellness are woven into the fabric of 
            online conversation, just as natural as sharing a meme or status update.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
