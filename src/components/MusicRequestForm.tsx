import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, User, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const MusicRequestForm = () => {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!artist.trim() || !song.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha o nome do artista e da música.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simular processamento
    setTimeout(() => {
      toast({
        title: "Solicitação enviada!",
        description: `"${song}" de ${artist} foi adicionada à lista.`,
      });
      
      // Simular redirecionamento para pagamento
      console.log("Redirecting to payment for:", { artist, song });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Card className="w-full max-w-lg mx-auto bg-card/80 backdrop-blur-sm border-border/50 shadow-elegant">
      <CardHeader className="text-center space-y-4">
        <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
          <Music className="w-8 h-8 text-primary-foreground" />
        </div>
        <CardTitle className="text-2xl font-display text-foreground">
          Solicite Sua Música
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Escolha a trilha sonora perfeita para sua noite no Curraus Bar
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="artist" className="text-foreground flex items-center gap-2">
              <User className="w-4 h-4" />
              Nome do Artista
            </Label>
            <Input
              id="artist"
              type="text"
              placeholder="Ex: Roberto Carlos"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              className="bg-input border-border focus:ring-primary focus:border-primary"
              disabled={isLoading}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="song" className="text-foreground flex items-center gap-2">
              <Music className="w-4 h-4" />
              Nome da Música
            </Label>
            <Input
              id="song"
              type="text"
              placeholder="Ex: Essa Tal Liberdade"
              value={song}
              onChange={(e) => setSong(e.target.value)}
              className="bg-input border-border focus:ring-primary focus:border-primary"
              disabled={isLoading}
            />
          </div>
          
          <Button
            type="submit"
            variant="payment"
            size="lg"
            className="w-full mt-6"
            disabled={isLoading}
          >
            <CreditCard className="w-5 h-5" />
            {isLoading ? "Processando..." : "Ir ao Pagamento"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};