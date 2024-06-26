import { useTheme } from "@/components/theme-provider";
export const MainBackgrounds = () => {
    const { theme } = useTheme();
    return (
        <>
            {
                theme !== "dark" ? (
                    <div className="fixed inset-0 h-full w-full bg-white -z-10"><div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div></div>
                ) : <div className="fixed inset-0 h-full w-full bg-background -z-10">
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                    </div>
                    <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]">
                    </div>
                </div>
            }
        </>
    )
}

MainBackgrounds.displayName = "MainBackgrounds"

export default MainBackgrounds