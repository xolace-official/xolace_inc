const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Xolace?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Xolace is a social platform where users share experiences, thoughts, and stories, encouraging meaningful connections and access to mental health resources."
      }
    },
    {
      "@type": "Question",
      "name": "Is Xolace free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Xolace is free to use. Premium features and professional support options may be available in the future."
      }
    },
    {
      "@type": "Question",
      "name": "Can I find professional mental health support on Xolace?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Xolace connects users with certified mental health professionals through a safe, peer-to-peer supportive environment."
      }
    },
    {
      "@type": "Question",
      "name": "How do I join Xolace?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply visit xolace.app and create a free account using your email. Once signed up, you can start posting and connecting instantly."
      }
    }
  ]
};

export default faqSchema;
