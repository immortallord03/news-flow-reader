import { Header } from "@/components/Header";
import { ArticleCard } from "@/components/ArticleCard";
import { TimeSelector } from "@/components/TimeSelector";

// Sample news data - will be replaced with Supabase data
const sampleArticles = [
  {
    title: "AI Revolution in Healthcare: New Breakthrough in Medical Diagnosis",
    summary: "Scientists have developed an AI system that can diagnose diseases with 95% accuracy, potentially revolutionizing healthcare accessibility worldwide. The system uses advanced machine learning algorithms to analyze medical images and patient data.",
    readingTime: "3 min read",
    category: "Technology",
    wordCount: 750,
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
  },
  {
    title: "Climate Change Solutions: Innovative Green Technology Emerges",
    summary: "Researchers unveil a new carbon capture technology that could remove CO2 from the atmosphere at unprecedented rates. This breakthrough offers hope in the fight against global warming.",
    readingTime: "5 min read",
    category: "Environment",
    wordCount: 1200,
    imageUrl: "https://images.unsplash.com/photo-1569163139394-de44cb4339ef?w=400&h=250&fit=crop"
  },
  {
    title: "Space Exploration Milestone: New Mars Colony Plans Announced",
    summary: "NASA reveals detailed plans for establishing the first permanent human settlement on Mars by 2035. The ambitious project includes sustainable habitat designs and resource utilization strategies.",
    readingTime: "7 min read",
    category: "Space",
    wordCount: 1800,
    imageUrl: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=250&fit=crop"
  },
  {
    title: "Economic Trends: Digital Currency Adoption Accelerates Globally",
    summary: "Central banks worldwide are accelerating their digital currency initiatives, with several countries launching pilot programs. This shift could reshape the future of monetary systems.",
    readingTime: "4 min read",
    category: "Finance",
    wordCount: 950,
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=250&fit=crop"
  },
  {
    title: "Breakthrough in Quantum Computing: New Processor Achieved",
    summary: "Tech giants announce a major breakthrough in quantum computing with a new processor that can solve complex problems exponentially faster than traditional computers. This could revolutionize multiple industries.",
    readingTime: "6 min read",
    category: "Technology",
    wordCount: 1500,
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop"
  },
  {
    title: "Health Innovation: Gene Therapy Shows Promise for Rare Diseases",
    summary: "Clinical trials demonstrate remarkable success in treating previously incurable genetic disorders using advanced gene therapy techniques. Patients show significant improvement in quality of life.",
    readingTime: "4 min read",
    category: "Health",
    wordCount: 1000,
    imageUrl: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent mb-4">
            Discover Your Perfect Read
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Get personalized news recommendations that match your available time and reading speed
          </p>
        </section>

        {/* Time Selector */}
        <section className="mb-12 animate-fade-in">
          <TimeSelector />
        </section>

        {/* Articles Grid */}
        <section className="animate-fade-in">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">
            Recommended Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleArticles.map((article, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </section>

        {/* Footer Info */}
        <section className="mt-16 text-center">
          <div className="bg-card/50 border border-border rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              Powered by Advanced AI
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Our recommendation system uses NewsAPI, The Guardian API, and OpenAI to curate 
              personalized content that matches your preferences and available time.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
