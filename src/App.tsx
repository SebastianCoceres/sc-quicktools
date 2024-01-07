import MainLayout from "@/components/layouts/MainLayout";
import { TextTransform, ColorTransform } from "@/pages";
import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const routes = [
  {
    key: "1",
    path: "/",
    element: <TextTransform />,
    title: "",
    description: "",
  },
  {
    key: "2",
    path: "/sc-quicktools/",
    element: <TextTransform />,
    title: "Text Transform",
    description:
      "Transform text to various formats, such as camelCase, snake_case, kebab-case, and PascalCase.",
  },
  {
    key: "2",
    path: "/sc-quicktools/color-transform",
    element: <ColorTransform />,
    title: "Color Transform",
    description:
      "Transform colors to different formats, such as RGB, HEX, HSL, and CMYK.",
  },
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
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
