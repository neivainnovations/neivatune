import { Header } from "@/components/Header";
import { MusicRequestForm } from "@/components/MusicRequestForm";
import heroImage from "@/assets/curraus-bar-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-secondary opacity-80" />
        
        <div className="relative container mx-auto text-center space-y-8">
          <div className="animate-slide-up">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-4">
              Sua Música,
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Nossa Vibe</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              No Neiva Tune, você é o DJ da sua experiência. Solicite suas músicas favoritas 
              e transforme sua noite em algo inesquecível.
            </p>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <MusicRequestForm />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4 bg-card/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-warm">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Música ao Vivo</h3>
              <p className="text-muted-foreground">
                Solicite suas músicas favoritas e ouça na hora
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-warm">
                <span className="text-2xl">🍻</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Ambiente Único</h3>
              <p className="text-muted-foreground">
                Desfrute de drinks especiais em um ambiente aconchegante
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-warm">
                <span className="text-2xl">💫</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Experiência Premium</h3>
              <p className="text-muted-foreground">
                Noites inesquecíveis com a trilha sonora perfeita
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;