import MainLayout from "@/components/layouts/MainLayout";
import { ThemeProvider } from "@/components/theme-provider";
import { ColorTransform, TextTransform } from "@/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export const routes = [
  {
    key: "0",
    path: "/sc-quicktools/",
    element: <TextTransform />,
    title: "Tools",
    description:
      "",
  },
  {
    key: "1",
    path: "/sc-quicktools/text",
    element: <TextTransform />,
    title: "Text",
    description:
      "Transform text to various formats, such as camelCase, snake_case, kebab-case, and PascalCase.",
  },
  {
    key: "2",
    path: "/sc-quicktools/color",
    element: <ColorTransform />,
    title: "Colors",
    description:
      "Transform color to various formats, such as hex, rgb, rgba, hsl, and hsla.",
  }
];

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <MainLayout>
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
            <Route key={"0"} element={<TextTransform />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
