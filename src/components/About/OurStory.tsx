import Image from "next/image";
export default function OurStory() {
  return (
    <section className="py-20 bg-teal-900" id="story">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="rounded-tr-3xl rounded-bl-3xl overflow-hidden">
                <Image
                  src="/assets/photos/About/aboutStory.webp?height=400&width=400"
                  alt="People supporting each other"
                  width={400}
                  height={400}
                  className="rounded-2xl object-cover w-full h-full"
                  priority
                  objectPosition="top"
                />
                <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
                  <div className="relative max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto w-full"></div>
                </div>
                <div className="absolute inset-0"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-100 rounded-full"></div>
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-amber-100 rounded-full"></div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-4xl font-light text-gray-50 mb-6">Our Story</h2>
            <div className="w-16 h-1 bg-amber-300 mb-8"></div>

            <p className="text-gray-50 mb-6 leading-relaxed">
              Xolace began with a simple observation: too many people suffer in
              silence. Our founder experienced firsthand how difficult it can be
              to find support while maintaining privacy and avoiding judgment.
            </p>

            <p className="text-gray-50 mb-6 leading-relaxed">
              What started as a small online forum has grown into a
              comprehensive platform where thousands find connection,
              understanding, and professional guidance every day, all while
              maintaining the anonymity that makes honest sharing possible.
            </p>

            <p className="text-gray-50 leading-relaxed">
              Today, we are proud to foster a community where healing begins
              through shared experiences, and certified counselors offer expert
              guidance tailored to your unique journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
