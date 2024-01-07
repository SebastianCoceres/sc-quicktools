import { ModeToggle } from "@/components/mode-toggle";
import { Toaster } from "@/components/ui/toaster";
import { MainMenu } from "@/components/main-menu";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex justify-between">
        <MainMenu />
        <ModeToggle />
      </div>
      {children}
      <Toaster />
    </div>
  );
};

export default MainLayout;
