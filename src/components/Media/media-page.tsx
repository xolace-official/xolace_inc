"use client";

import {
  FileText,
  ImageIcon,
  Mail,
  MessageSquare,
  Newspaper,
  Phone,
  Shield,
  Users,
  ChevronRight,
  ExternalLink,
  Heart,
} from "lucide-react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
export default function MediaPage() {
  return (
    <main>
      <MediaHero />
      <PressResources />
      {/* <CommunityStories /> */}
      {/* <EducationalContent /> */}
      {/* <VisualGallery /> */}
      <MediaContact />
      <CrisisResources />
    </main>
  );
}

function MediaHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-teal-900 via-slate-900 to-cyan-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-teal-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Xolace{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
              Media
            </span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-300 to-yellow-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-50/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Resources for journalists, creators, and partners who want to tell
            authentic stories about mental health and community support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-full mb-4">
              <Newspaper className="w-7 h-7 text-teal-300" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">
              Press Resources
            </h3>
            <p className="text-sm text-gray-50/80 mb-4">
              Access media kits, fact sheets, and brand assets
            </p>
          </div>

          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-full mb-4">
              <MessageSquare className="w-7 h-7 text-blue-300" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">
              Community Stories
            </h3>
            <p className="text-sm text-gray-50/80 mb-4">
              Authentic voices sharing mental health journeys
            </p>
          </div>

          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-full mb-4">
              <Mail className="w-7 h-7 text-purple-300" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">
              Media Contact
            </h3>
            <p className="text-sm text-gray-50/80 mb-4">
              Get in touch with our media relations team
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-50/70 text-sm mb-4">
            Our commitment to responsible mental health coverage
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <Shield className="w-4 h-4 text-teal-300" />
              <span className="text-xs text-gray-50">Privacy Protected</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <Users className="w-4 h-4 text-blue-300" />
              <span className="text-xs text-gray-50">Stigma-Free Language</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <Heart className="w-4 h-4 text-rose-300" />
              <span className="text-xs text-gray-50">Trauma-Informed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PressResources() {
  // const pressKits = [
  //   {
  //     title: "Brand Media Kit",
  //     description: "Logos, color guidelines, and brand assets",
  //     icon: <ImageIcon className="w-6 h-6 text-teal-500" />,
  //     fileSize: "12.4 MB",
  //     fileType: "ZIP",
  //   },
  //   {
  //     title: "Press Release Bundle",
  //     description: "Recent announcements and milestones",
  //     icon: <Newspaper className="w-6 h-6 text-teal-500" />,
  //     fileSize: "3.2 MB",
  //     fileType: "PDF",
  //   },
  //   {
  //     title: "Impact Report 2023",
  //     description: "Data and stories about our community impact",
  //     icon: <FileText className="w-6 h-6 text-teal-500" />,
  //     fileSize: "8.7 MB",
  //     fileType: "PDF",
  //   },
  //   {
  //     title: "Flux Mascot Package",
  //     description: "Illustrations and animations of our mascot",
  //     icon: <ImageIcon className="w-6 h-6 text-teal-500" />,
  //     fileSize: "18.5 MB",
  //     fileType: "ZIP",
  //   },
  // ];

  // const factSheets = [
  //   {
  //     title: "Mental Health Statistics",
  //     description: "Key facts and figures about mental health",
  //   },
  //   {
  //     title: "Privacy in Digital Mental Health",
  //     description: "How Xolace protects user privacy",
  //   },
  //   {
  //     title: "Community Support Research",
  //     description: "Evidence on peer support effectiveness",
  //   },
  //   {
  //     title: "Accessibility Commitment",
  //     description: "How we make mental health support accessible",
  //   },
  // ];

  return (
    <section className="py-16 sm:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Press{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-300">
              Resources
            </span>
          </h2>
          <div className="w-20 h-1 bg-amber-300 mx-auto mb-6"></div>
          <p className="text-gray-50 max-w-3xl mx-auto text-lg leading-relaxed">
            Everything you need to accurately represent Xolace and mental health
            topics in your coverage
          </p>
        </div> */}

        {/* Press Kits */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-medium text-gray-50 mb-8 text-center">
            Downloadable Press Kits
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pressKits.map((kit, index) => (
              <div
                key={index}
                className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-teal-900 rounded-lg flex items-center justify-center">
                    {kit.icon}
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-white/10 rounded-md text-xs text-gray-50/70">
                    <span>{kit.fileSize}</span>
                    <span>·</span>
                    <span>{kit.fileType}</span>
                  </div>
                </div>
                <h4 className="font-medium text-gray-50 mb-2">{kit.title}</h4>
                <p className="text-sm text-gray-50/80 mb-4">
                  {kit.description}
                </p>
                <InteractiveHoverButton className="w-full px-4 py-2 bg-teal-900 hover:bg-teal-800 text-white text-sm font-medium rounded-lg border-teal-700">
                  Download
                </InteractiveHoverButton>
              </div>
            ))}
          </div>
        </div> */}

        {/* Fact Sheets */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-medium text-gray-50 mb-8 text-center">
            Fact Sheets
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {factSheets.map((sheet, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-teal-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-teal-300" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-50 mb-1">
                    {sheet.title}
                  </h4>
                  <p className="text-sm text-gray-50/80">{sheet.description}</p>
                </div>
                <Download className="w-5 h-5 text-gray-50/60" />
              </div>
            ))}
          </div>
        </div> */}

        {/* Guidelines */}
        <div className="p-8 bg-gradient-to-br from-teal-900/30 to-cyan-900/30 rounded-2xl backdrop-blur-sm border border-white/10">
          <h3 className="text-2xl font-medium text-gray-50 mb-6 text-center">
            Responsible Reporting Guidelines
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium text-teal-300 mb-4">
                Language Matters
              </h4>
              <ul className="space-y-3 text-gray-50/90">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mt-1">
                    <ChevronRight className="w-3 h-3 text-green-400" />
                  </div>
                  <span>
                    <strong className="text-white">Use:</strong> &quot;Person
                    with depression&quot; instead of &quot;depressed
                    person&quot;
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mt-1">
                    <ChevronRight className="w-3 h-3 text-green-400" />
                  </div>
                  <span>
                    <strong className="text-white">Use:</strong> &quot;Died by
                    suicide&quot; instead of &quot;committed suicide&quot;
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mt-1">
                    <ChevronRight className="w-3 h-3 text-green-400" />
                  </div>
                  <span>
                    <strong className="text-white">Use:</strong> &quot;Living
                    with&quot; instead of &quot;suffering from&quot;
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-blue-300 mb-4">
                Privacy Protection
              </h4>
              <ul className="space-y-3 text-gray-50/90">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-red-500/20 rounded-full flex items-center justify-center mt-1">
                    <ChevronRight className="w-3 h-3 text-red-400" />
                  </div>
                  <span>
                    Never share identifying details of community members without
                    explicit consent
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-red-500/20 rounded-full flex items-center justify-center mt-1">
                    <ChevronRight className="w-3 h-3 text-red-400" />
                  </div>
                  <span>Avoid sensationalizing mental health challenges</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-red-500/20 rounded-full flex items-center justify-center mt-1">
                    <ChevronRight className="w-3 h-3 text-red-400" />
                  </div>
                  <span>
                    Always include crisis resources when covering sensitive
                    topics
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="mt-6 text-center">
            <InteractiveHoverButton className="px-6 py-3 bg-teal-900 hover:bg-teal-800 text-white font-medium rounded-lg border-teal-700">
              Download Complete Guidelines
            </InteractiveHoverButton>
          </div> */}
        </div>
      </div>
    </section>
  );
}

// function CommunityStories() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const stories = [
//     {
//       title: "Finding My Voice",
//       author: "Alex R.",
//       authorRole: "Community Member",
//       quote:
//         "After years of silence, Xolace gave me a space where I could finally speak about my anxiety without fear of judgment. The anonymity was freeing, but the community connection was life-changing.",
//       image: "/placeholder.svg?height=400&width=400",
//       tags: ["Anxiety", "Community Support", "Recovery Journey"],
//       readTime: "4 min read",
//     },
//     {
//       title: "Supporting Others Healed Me",
//       author: "Jamie T.",
//       authorRole: "Peer Support Volunteer",
//       quote:
//         "When I first joined Xolace, I was looking for help with my depression. Two years later, I'm now helping others through their darkest moments, and that purpose has been the most powerful medicine.",
//       image: "/placeholder.svg?height=400&width=400",
//       tags: ["Depression", "Peer Support", "Giving Back"],
//       readTime: "6 min read",
//     },
//     {
//       title: "Breaking the Silence",
//       author: "Dr. Sarah Chen",
//       authorRole: "Clinical Psychologist",
//       quote:
//         "As a therapist, I've seen how shame keeps people from seeking help. Platforms like Xolace are revolutionary because they remove barriers and normalize mental health conversations.",
//       image: "/placeholder.svg?height=400&width=400",
//       tags: ["Professional Perspective", "Mental Health Access", "Stigma"],
//       readTime: "5 min read",
//     },
//   ];

//   const nextSlide = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentSlide((prev) => (prev + 1) % stories.length);
//     setTimeout(() => setIsTransitioning(false), 500);
//   };

//   const prevSlide = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
//     setTimeout(() => setIsTransitioning(false), 500);
//   };

//   const goToSlide = (index: number) => {
//     if (isTransitioning || index === currentSlide) return;
//     setIsTransitioning(true);
//     setCurrentSlide(index);
//     setTimeout(() => setIsTransitioning(false), 500);
//   };

//   return (
//     <section className="py-16 sm:py-20 bg-teal-900">
//       <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
//             Community{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
//               Stories
//             </span>
//           </h2>
//           <div className="w-20 h-1 bg-amber-300 mx-auto mb-6"></div>
//           <p className="text-gray-50 max-w-3xl mx-auto text-lg leading-relaxed">
//             Authentic voices sharing their mental health journeys and how
//             community support has made a difference
//           </p>
//         </div>

//         {/* Featured Story - Desktop */}
//         <div className="hidden md:block mb-16">
//           <div className="grid md:grid-cols-2 gap-8 items-center bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
//             <div className="relative aspect-square rounded-xl overflow-hidden">
//               <Image
//                 src={stories[0].image || "/placeholder.svg"}
//                 alt="Featured community story"
//                 fill
//                 sizes="(max-width: 768px) 100vw, 50vw"
//                 className="object-cover"
//                 quality={95}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
//                 <div className="flex gap-2 mb-2">
//                   {stories[0].tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="inline-block px-2 py-1 bg-teal-500/30 text-teal-100 text-xs rounded-full"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <h3 className="text-2xl font-bold text-white">
//                   {stories[0].title}
//                 </h3>
//                 <p className="text-gray-200 text-sm">
//                   By {stories[0].author}, {stories[0].authorRole}
//                 </p>
//               </div>
//             </div>
//             <div>
//               <div className="mb-6">
//                 <div className="w-10 h-10 bg-teal-800 rounded-full flex items-center justify-center mb-4">
//                   <MessageSquare className="w-5 h-5 text-teal-300" />
//                 </div>
//                 <blockquote className="text-xl text-gray-50 italic leading-relaxed mb-6">
//                   &quot;{stories[0].quote}&quot;
//                 </blockquote>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <div className="w-8 h-8 bg-teal-800 rounded-full"></div>
//                     <div>
//                       <div className="font-medium text-gray-50">
//                         {stories[0].author}
//                       </div>
//                       <div className="text-xs text-gray-50/70">
//                         {stories[0].authorRole}
//                       </div>
//                     </div>
//                   </div>
//                   <span className="text-xs text-gray-50/60">
//                     {stories[0].readTime}
//                   </span>
//                 </div>
//               </div>
//               <InteractiveHoverButton className="px-6 py-3 bg-teal-900 hover:bg-teal-800 text-white font-medium rounded-lg border-teal-700">
//                 Read Full Story
//               </InteractiveHoverButton>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {stories.slice(1).map((story, index) => (
//               <div
//                 key={index}
//                 className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
//               >
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="flex gap-2">
//                     {story.tags.slice(0, 1).map((tag, tagIndex) => (
//                       <span
//                         key={tagIndex}
//                         className="inline-block px-2 py-1 bg-teal-500/30 text-teal-100 text-xs rounded-full"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                   <span className="text-xs text-gray-50/60">
//                     {story.readTime}
//                   </span>
//                 </div>
//                 <h4 className="text-lg font-medium text-gray-50 mb-3">
//                   {story.title}
//                 </h4>
//                 <blockquote className="text-sm text-gray-50/90 mb-4 line-clamp-3">
//                   &quot;{story.quote}&quot;
//                 </blockquote>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <div className="w-6 h-6 bg-teal-800 rounded-full"></div>
//                     <div className="text-sm text-gray-50/80">
//                       {story.author}
//                     </div>
//                   </div>
//                   <ChevronRight className="w-4 h-4 text-gray-50/60" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Mobile Carousel */}
//         <div className="md:hidden mb-12">
//           <div className="relative overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//             >
//               {stories.map((story, index) => (
//                 <div key={index} className="w-full flex-shrink-0 px-4">
//                   <div className="bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm border border-white/20">
//                     <div className="relative aspect-video">
//                       <Image
//                         src={story.image || "/placeholder.svg"}
//                         alt={story.title}
//                         fill
//                         sizes="100vw"
//                         className="object-cover"
//                         quality={90}
//                       />
//                     </div>
//                     <div className="p-6">
//                       <div className="flex gap-2 mb-3 flex-wrap">
//                         {story.tags.map((tag, tagIndex) => (
//                           <span
//                             key={tagIndex}
//                             className="inline-block px-2 py-1 bg-teal-500/30 text-teal-100 text-xs rounded-full"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                       <h3 className="text-xl font-bold text-white mb-3">
//                         {story.title}
//                       </h3>
//                       <blockquote className="text-gray-50/90 mb-4 text-sm">
//                         &quot;{story.quote}&quot;
//                       </blockquote>
//                       <div className="flex items-center justify-between mb-4">
//                         <div className="flex items-center gap-2">
//                           <div className="w-8 h-8 bg-teal-800 rounded-full"></div>
//                           <div>
//                             <div className="font-medium text-gray-50 text-sm">
//                               {story.author}
//                             </div>
//                             <div className="text-xs text-gray-50/70">
//                               {story.authorRole}
//                             </div>
//                           </div>
//                         </div>
//                         <span className="text-xs text-gray-50/60">
//                           {story.readTime}
//                         </span>
//                       </div>
//                       <InteractiveHoverButton className="w-full px-4 py-2 bg-teal-900 hover:bg-teal-800 text-white text-sm font-medium rounded-lg border-teal-700">
//                         Read Full Story
//                       </InteractiveHoverButton>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation Controls */}
//           <div className="flex items-center justify-center gap-4 mt-6">
//             <button
//               onClick={prevSlide}
//               disabled={isTransitioning}
//               className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 disabled:opacity-50"
//               aria-label="Previous story"
//             >
//               <ChevronLeft className="w-5 h-5 text-gray-50" />
//             </button>

//             <div className="flex gap-2">
//               {stories.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToSlide(index)}
//                   disabled={isTransitioning}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     index === currentSlide
//                       ? "bg-teal-500 scale-125"
//                       : "bg-white/30 hover:bg-white/50"
//                   }`}
//                   aria-label={`Go to story ${index + 1}`}
//                 />
//               ))}
//             </div>

//             <button
//               onClick={nextSlide}
//               disabled={isTransitioning}
//               className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 disabled:opacity-50"
//               aria-label="Next story"
//             >
//               <ChevronRight className="w-5 h-5 text-gray-50" />
//             </button>
//           </div>
//         </div>

//         {/* Story Submission */}
//         <div className="text-center p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20">
//           <h3 className="text-xl font-medium text-gray-50 mb-4">
//             Share Your Story
//           </h3>
//           <p className="text-gray-50/80 mb-6 max-w-2xl mx-auto">
//             Your experience matters. If you&apos;d like to share your mental health
//             journey to help others and reduce stigma, we&apos;d love to hear from
//             you.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <InteractiveHoverButton className="px-6 py-3 bg-teal-900 hover:bg-teal-800 text-white font-medium rounded-lg border-teal-700">
//               Submit Your Story
//             </InteractiveHoverButton>
//             <InteractiveHoverButton className="px-6 py-3 bg-white/10 hover:bg-white/20 text-gray-50 font-medium rounded-lg border border-white/20">
//               Story Guidelines
//             </InteractiveHoverButton>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function EducationalContent() {
//   const articles = [
//     {
//       title: "Understanding Anxiety: Beyond the Worry",
//       author: "Dr. Sarah Chen",
//       category: "Mental Health Education",
//       image: "/placeholder.svg?height=300&width=500",
//       readTime: "7 min read",
//     },
//     {
//       title: "The Science of Community Support",
//       author: "Dr. James Rodriguez",
//       category: "Research Insights",
//       image: "/placeholder.svg?height=300&width=500",
//       readTime: "5 min read",
//     },
//     {
//       title: "Digital Privacy in Mental Health",
//       author: "Maya Patel, Privacy Officer",
//       category: "Technology & Ethics",
//       image: "/placeholder.svg?height=300&width=500",
//       readTime: "6 min read",
//     },
//   ];

//   const resources = [
//     {
//       title: "Mental Health Myths vs. Facts",
//       type: "Infographic",
//       icon: <ImageIcon className="w-5 h-5 text-teal-300" />,
//     },
//     {
//       title: "How to Support Someone in Crisis",
//       type: "Guide",
//       icon: <FileText className="w-5 h-5 text-blue-300" />,
//     },
//     {
//       title: "The Language of Mental Health",
//       type: "Glossary",
//       icon: <FileText className="w-5 h-5 text-purple-300" />,
//     },
//     {
//       title: "Community Support Research",
//       type: "Report",
//       icon: <FileText className="w-5 h-5 text-green-300" />,
//     },
//   ];

//   return (
//     <section className="py-16 sm:py-20 bg-black">
//       <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
//             Educational{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-300">
//               Resources
//             </span>
//           </h2>
//           <div className="w-20 h-1 bg-amber-300 mx-auto mb-6"></div>
//           <p className="text-gray-50 max-w-3xl mx-auto text-lg leading-relaxed">
//             Evidence-based information about mental health, community support,
//             and breaking stigma
//           </p>
//         </div>

//         {/* Featured Articles */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-medium text-gray-50 mb-8 text-center">
//             Expert Articles
//           </h3>
//           <div className="grid md:grid-cols-3 gap-6">
//             {articles.map((article, index) => (
//               <div
//                 key={index}
//                 className="bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 group"
//               >
//                 <div className="relative aspect-video">
//                   <Image
//                     src={article.image || "/placeholder.svg"}
//                     alt={article.title}
//                     fill
//                     sizes="(max-width: 768px) 100vw, 33vw"
//                     className="object-cover group-hover:scale-105 transition-transform duration-500"
//                     quality={90}
//                   />
//                   <div className="absolute top-3 left-3">
//                     <span className="inline-block px-2 py-1 bg-teal-500/70 text-white text-xs rounded-full backdrop-blur-sm">
//                       {article.category}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h4 className="text-lg font-medium text-gray-50 mb-3 line-clamp-2">
//                     {article.title}
//                   </h4>
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-gray-50/80">
//                       {article.author}
//                     </span>
//                     <span className="text-xs text-gray-50/60">
//                       {article.readTime}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Educational Resources */}
//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="md:col-span-1">
//             <h3 className="text-xl font-medium text-gray-50 mb-6">
//               Downloadable Resources
//             </h3>
//             <div className="space-y-4">
//               {resources.map((resource, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center gap-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
//                 >
//                   <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
//                     {resource.icon}
//                   </div>
//                   <div className="flex-1">
//                     <h4 className="font-medium text-gray-50 text-sm">
//                       {resource.title}
//                     </h4>
//                     <p className="text-xs text-gray-50/70">{resource.type}</p>
//                   </div>
//                   <Download className="w-4 h-4 text-gray-50/60" />
//                 </div>
//               ))}
//             </div>
//             <div className="mt-6">
//               <InteractiveHoverButton className="w-full px-4 py-3 bg-teal-900 hover:bg-teal-800 text-white text-sm font-medium rounded-lg border-teal-700">
//                 View All Resources
//               </InteractiveHoverButton>
//             </div>
//           </div>

//           <div className="md:col-span-2">
//             <div className="p-6 bg-gradient-to-br from-teal-900/30 to-cyan-900/30 rounded-xl backdrop-blur-sm border border-white/10 h-full">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-10 h-10 bg-teal-800 rounded-full flex items-center justify-center">
//                   <Info className="w-5 h-5 text-teal-300" />
//                 </div>
//                 <h3 className="text-xl font-medium text-gray-50">
//                   Mental Health Myth Busting
//                 </h3>
//               </div>

//               <div className="space-y-6 mb-6">
//                 <div className="p-4 bg-white/10 rounded-lg">
//                   <h4 className="font-medium text-gray-50 mb-2">
//                     Myth: Mental health problems are rare
//                   </h4>
//                   <p className="text-sm text-gray-50/90">
//                     <strong className="text-teal-300">Fact:</strong> 1 in 4
//                     people will experience a mental health condition in their
//                     lifetime. Mental health challenges are common and treatable.
//                   </p>
//                 </div>

//                 <div className="p-4 bg-white/10 rounded-lg">
//                   <h4 className="font-medium text-gray-50 mb-2">
//                     Myth: People with mental illness are dangerous
//                   </h4>
//                   <p className="text-sm text-gray-50/90">
//                     <strong className="text-teal-300">Fact:</strong> People with
//                     mental health conditions are more likely to be victims of
//                     violence than perpetrators. This harmful stereotype
//                     increases stigma.
//                   </p>
//                 </div>

//                 <div className="p-4 bg-white/10 rounded-lg">
//                   <h4 className="font-medium text-gray-50 mb-2">
//                     Myth: You can&apos;t recover from mental illness
//                   </h4>
//                   <p className="text-sm text-gray-50/90">
//                     <strong className="text-teal-300">Fact:</strong> With proper
//                     support and treatment, recovery and management of symptoms
//                     is not only possible but common.
//                   </p>
//                 </div>
//               </div>

//               <InteractiveHoverButton className="px-6 py-3 bg-teal-900 hover:bg-teal-800 text-white font-medium rounded-lg border-teal-700">
//                 Download Full Myth-Busting Guide
//               </InteractiveHoverButton>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function VisualGallery() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const mediaItems = [
//     {
//       type: "image",
//       title: "Community Support Group",
//       description: "Members connecting in a safe, anonymous environment",
//       source: "/placeholder.svg?height=500&width=800",
//       credit: "Xolace Media Team",
//     },
//     {
//       type: "image",
//       title: "Flux Mascot Evolution",
//       description:
//         "The development of our mascot representing mental health support",
//       source: "/placeholder.svg?height=500&width=800",
//       credit: "Design Team",
//     },
//     {
//       type: "image",
//       title: "Digital Therapy Session",
//       description: "Anonymous professional support through our platform",
//       source: "/placeholder.svg?height=500&width=800",
//       credit: "Xolace Media Team",
//     },
//     {
//       type: "video",
//       title: "Our Mission",
//       description: "A short film about why Xolace exists",
//       source: "/placeholder.svg?height=500&width=800",
//       credit: "Xolace Studios",
//       duration: "2:45",
//     },
//   ];

//   const nextSlide = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentSlide((prev) => (prev + 1) % mediaItems.length);
//     setTimeout(() => setIsTransitioning(false), 500);
//   };

//   const prevSlide = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentSlide(
//       (prev) => (prev - 1 + mediaItems.length) % mediaItems.length
//     );
//     setTimeout(() => setIsTransitioning(false), 500);
//   };

//   const goToSlide = (index: number) => {
//     if (isTransitioning || index === currentSlide) return;
//     setIsTransitioning(true);
//     setCurrentSlide(index);
//     setTimeout(() => setIsTransitioning(false), 500);
//   };

//   return (
//     <section className="py-16 sm:py-20 bg-gradient-to-br from-teal-900 via-slate-900 to-cyan-900">
//       <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
//             Visual{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-300">
//               Gallery
//             </span>
//           </h2>
//           <div className="w-20 h-1 bg-amber-300 mx-auto mb-6"></div>
//           <p className="text-gray-50 max-w-3xl mx-auto text-lg leading-relaxed">
//             Approved images, videos, and graphics that authentically represent
//             mental health and our community
//           </p>
//         </div>

//         {/* Featured Media - Desktop */}
//         <div className="hidden md:block mb-12">
//           <div className="grid grid-cols-2 gap-6">
//             <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
//               <Image
//                 src={mediaItems[0].source || "/placeholder.svg"}
//                 alt={mediaItems[0].title}
//                 fill
//                 sizes="(max-width: 768px) 100vw, 50vw"
//                 className="object-cover"
//                 quality={95}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
//                 <h3 className="text-xl font-bold text-white mb-2">
//                   {mediaItems[0].title}
//                 </h3>
//                 <p className="text-gray-200 text-sm mb-2">
//                   {mediaItems[0].description}
//                 </p>
//                 <div className="flex items-center justify-between">
//                   <span className="text-xs text-gray-300">
//                     Credit: {mediaItems[0].credit}
//                   </span>
//                   <InteractiveHoverButton className="px-4 py-2 bg-teal-900/80 hover:bg-teal-800 text-white text-sm font-medium rounded-lg border-teal-700/50 backdrop-blur-sm">
//                     Download
//                   </InteractiveHoverButton>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-rows-2 gap-6">
//               {mediaItems.slice(1, 3).map((item, index) => (
//                 <div
//                   key={index}
//                   className="relative aspect-[16/9] rounded-xl overflow-hidden"
//                 >
//                   <Image
//                     src={item.source || "/placeholder.svg"}
//                     alt={item.title}
//                     fill
//                     sizes="(max-width: 768px) 100vw, 25vw"
//                     className="object-cover"
//                     quality={90}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
//                     <h3 className="text-lg font-bold text-white mb-1">
//                       {item.title}
//                     </h3>
//                     <p className="text-gray-200 text-xs mb-2">
//                       {item.description}
//                     </p>
//                     <div className="flex items-center justify-between">
//                       <span className="text-xs text-gray-300">
//                         Credit: {item.credit}
//                       </span>
//                       <Download className="w-4 h-4 text-white" />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="mt-6 grid grid-cols-4 gap-4">
//             {mediaItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="relative aspect-video rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-teal-500 transition-all duration-300"
//                 onClick={() => goToSlide(index)}
//               >
//                 <Image
//                   src={item.source || "/placeholder.svg"}
//                   alt={item.title}
//                   fill
//                   sizes="(max-width: 768px) 50vw, 25vw"
//                   className="object-cover"
//                   quality={80}
//                 />
//                 {item.type === "video" && (
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
//                       <Play className="w-4 h-4 text-white" />
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Mobile Carousel */}
//         <div className="md:hidden mb-12">
//           <div className="relative overflow-hidden rounded-xl">
//             <div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//             >
//               {mediaItems.map((item, index) => (
//                 <div key={index} className="w-full flex-shrink-0">
//                   <div className="relative aspect-[4/3]">
//                     <Image
//                       src={item.source || "/placeholder.svg"}
//                       alt={item.title}
//                       fill
//                       sizes="100vw"
//                       className="object-cover"
//                       quality={90}
//                     />
//                     {item.type === "video" && (
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
//                           <Play className="w-6 h-6 text-white" />
//                         </div>
//                       </div>
//                     )}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
//                       <h3 className="text-xl font-bold text-white mb-2">
//                         {item.title}
//                       </h3>
//                       <p className="text-gray-200 text-sm mb-3">
//                         {item.description}
//                       </p>
//                       <div className="flex items-center justify-between">
//                         <span className="text-xs text-gray-300">
//                           Credit: {item.credit}
//                         </span>
//                         {item.type === "video" ? (
//                           <span className="text-xs text-gray-300">
//                             {item.duration}
//                           </span>
//                         ) : (
//                           <InteractiveHoverButton className="px-3 py-1 bg-teal-900/80 hover:bg-teal-800 text-white text-xs font-medium rounded-lg border-teal-700/50 backdrop-blur-sm">
//                             Download
//                           </InteractiveHoverButton>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation Controls */}
//           <div className="flex items-center justify-center gap-4 mt-6">
//             <button
//               onClick={prevSlide}
//               disabled={isTransitioning}
//               className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 disabled:opacity-50"
//               aria-label="Previous media"
//             >
//               <ChevronLeft className="w-5 h-5 text-gray-50" />
//             </button>

//             <div className="flex gap-2">
//               {mediaItems.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToSlide(index)}
//                   disabled={isTransitioning}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     index === currentSlide
//                       ? "bg-teal-500 scale-125"
//                       : "bg-white/30 hover:bg-white/50"
//                   }`}
//                   aria-label={`Go to media ${index + 1}`}
//                 />
//               ))}
//             </div>

//             <button
//               onClick={nextSlide}
//               disabled={isTransitioning}
//               className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 disabled:opacity-50"
//               aria-label="Next media"
//             >
//               <ChevronRight className="w-5 h-5 text-gray-50" />
//             </button>
//           </div>
//         </div>

//         {/* Usage Guidelines */}
//         <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 mb-8">
//           <h3 className="text-xl font-medium text-gray-50 mb-4">
//             Media Usage Guidelines
//           </h3>
//           <div className="grid md:grid-cols-3 gap-6">
//             <div>
//               <h4 className="font-medium text-teal-300 mb-2 text-sm">
//                 Attribution
//               </h4>
//               <p className="text-sm text-gray-50/90">
//                 Please credit &quot;Xolace&quot; when using any of our visual assets in
//                 your publications or content.
//               </p>
//             </div>
//             <div>
//               <h4 className="font-medium text-teal-300 mb-2 text-sm">
//                 Modifications
//               </h4>
//               <p className="text-sm text-gray-50/90">
//                 Minor adjustments for size and format are permitted, but please
//                 don&apos;t alter colors or remove watermarks.
//               </p>
//             </div>
//             <div>
//               <h4 className="font-medium text-teal-300 mb-2 text-sm">
//                 Context
//               </h4>
//               <p className="text-sm text-gray-50/90">
//                 Use our media only in contexts that respect mental health and
//                 align with our mission of destigmatization.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Media Request */}
//         <div className="text-center">
//           <p className="text-gray-50/80 mb-4">
//             Need specific visuals or have special requests? Our media team is
//             here to help.
//           </p>
//           <InteractiveHoverButton className="px-6 py-3 bg-teal-900 hover:bg-teal-800 text-white font-medium rounded-lg border-teal-700">
//             Request Custom Media
//           </InteractiveHoverButton>
//         </div>
//       </div>
//     </section>
//   );
// }

function MediaContact() {
  return (
    <section className="py-16 sm:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Media{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-300">
              Contact
            </span>
          </h2>
          <div className="w-20 h-1 bg-amber-300 mx-auto mb-6"></div>
          <p className="text-gray-50 max-w-3xl mx-auto text-lg leading-relaxed">
            Get in touch with our media relations team for interviews,
            information, or partnership opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="p-8 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
              <h3 className="text-2xl font-medium text-gray-50 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-teal-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-50 mb-1">Email</h4>
                    <p className="text-gray-50/90 mb-1">media@xolaceinc.com</p>
                    <p className="text-sm text-gray-50/70">
                      For press inquiries and interview requests
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-teal-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-50 mb-1">Phone</h4>
                    <p className="text-gray-50/90 mb-1">
                      0596285090 / +233 596 285 090
                    </p>
                    <p className="text-sm text-gray-50/70">
                      Monday-Friday, 9am-5pm GMT
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-teal-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-50 mb-1">
                      Media Team
                    </h4>
                    <p className="text-gray-50/90 mb-1">
                      Andrew Nana Beniako, Media Relations Director
                    </p>
                    {/* <p className="text-sm text-gray-50/70">
                      Dr. James Chen, Mental Health Expert Spokesperson
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="p-8 bg-gradient-to-br from-teal-900/30 to-cyan-900/30 rounded-xl backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-medium text-gray-50 mb-6">
                Media Inquiry Form
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-50 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-medium text-gray-50 mb-1"
                    >
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-50 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inquiry-type"
                    className="block text-sm font-medium text-gray-50 mb-1"
                  >
                    Inquiry Type
                  </label>
                  <select
                    id="inquiry-type"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="interview">Interview Request</option>
                    <option value="information">Information Request</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-50 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="guidelines"
                    className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  />
                  <label
                    htmlFor="guidelines"
                    className="ml-2 block text-sm text-gray-50/80"
                  >
                    I&apos;ve read the media guidelines and agree to follow them
                  </label>
                </div>

                <InteractiveHoverButton className="w-full px-6 py-3 bg-teal-900 hover:bg-teal-800 text-white font-medium rounded-lg border-teal-700">
                  Submit Inquiry
                </InteractiveHoverButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CrisisResources() {
  const resources = [
    {
      name: "National Suicide Prevention Lifeline",
      contact: "988 or 1-800-273-8255",
      website: "suicidepreventionlifeline.org",
      hours: "24/7",
    },
    {
      name: "Crisis Text Line",
      contact: "Text HOME to 741741",
      website: "crisistextline.org",
      hours: "24/7",
    },
    {
      name: "SAMHSA&apos;s National Helpline",
      contact: "1-800-662-4357",
      website: "samhsa.gov/find-help",
      hours: "24/7",
    },
  ];

  return (
    <section
      id="crisis-resources"
      className="py-12 sm:py-16 bg-gradient-to-br from-teal-900 via-slate-900 to-cyan-900"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="p-8 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Crisis Resources
              </h2>
              <p className="text-gray-50/90 mb-6">
                If you are in critical mental condition or crisis, please
                contact the nearest emergency services. Check out our provided
                resources. If you&apos;re covering sensitive mental health
                topics, please include these crisis resources in your content.
                They could help someone in need.
              </p>
              {/* <div className="hidden md:block">
                <InteractiveHoverButton className="px-6 py-3 bg-teal-900 hover:bg-teal-800 text-white font-medium rounded-lg border-teal-700">
                  Download Resource List
                </InteractiveHoverButton>
              </div> */}
            </div>

            <div className="md:w-1/2">
              <div className="space-y-4">
                {resources.map((resource, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10"
                  >
                    <div className="sm:w-1/2">
                      <h3 className="font-medium text-gray-50 text-sm">
                        {resource.name}
                      </h3>
                      <p className="text-teal-300 font-bold">
                        {resource.contact}
                      </p>
                    </div>
                    <div className="sm:w-1/2 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-50/70">
                          {resource.website}
                        </p>
                        <p className="text-xs text-gray-50/70">
                          Available: {resource.hours}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-50/60" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:hidden text-center mt-4">
              <InteractiveHoverButton className="px-6 py-3 bg-teal-900 hover:bg-teal-800 text-white font-medium rounded-lg border-teal-700">
                Download Resource List
              </InteractiveHoverButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
