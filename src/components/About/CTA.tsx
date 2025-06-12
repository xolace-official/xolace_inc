import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

export default function CTA() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6">
          Begin your healing journey today
        </h2>
        <p className="text-teal-100 mb-8 sm:mb-10 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
          Be part of a community where understanding and support come first.
          Share your story, connect with those who truly get it, and access
          professional guidance—all in a safe, anonymous space.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <InteractiveHoverButton className="px-6 py-3 sm:px-8 bg-white text-teal-700 rounded-lg hover:bg-teal-50 transition-colors font-medium">
            Join Xolace
          </InteractiveHoverButton>
          <InteractiveHoverButton className="px-6 py-3 sm:px-8 bg-black/30 border border-white text-white rounded-lg hover:bg-teal-500 transition-colors">
            Speak With a Counselor
          </InteractiveHoverButton>
        </div>

        <p className="mt-6 sm:mt-8 text-sm text-teal-200 px-4">
          Your privacy is our priority. All interactions on Xolace are anonymous
          by default.
        </p>
      </div>
    </section>
  );
}
