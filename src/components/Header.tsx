import { Music } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full py-6 px-4 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
            <Music className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold text-foreground">
              Curraus Bar
            </h1>
            <p className="text-sm text-muted-foreground">
              Onde a música encontra o sabor
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};