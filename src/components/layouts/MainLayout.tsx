import { ModeToggle } from "@/components/mode-toggle";
import { Toaster } from "@/components/ui/toaster";
import { MainMenu } from "@/components/main-menu";
import { MainBackgrounds } from "@/components/backgrounds";

const MainLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="container items-center gap-6 px-4 py-8 md:py-10">
      <div className="flex justify-between mb-8">
        <MainMenu />
        <ModeToggle />
      </div>
      <MainBackgrounds />
      <div className="bg-background/30  p-4 md:p-8 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-foreground/20">
        {children}
      </div>

      <Toaster />
    </div>
  );
};

export default MainLayout;


