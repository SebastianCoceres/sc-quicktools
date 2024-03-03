import MainLayout from "@/components/layouts/MainLayout";
import { ThemeProvider } from "@/components/theme-provider";
import { TextTransform } from "@/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export const routes = [
  {
    key: "0",
    path: "/sc-quicktools/",
    element: <TextTransform />,
    title: "Text Transform",
    description:
      "Transform text to various formats, such as camelCase, snake_case, kebab-case, and PascalCase.",
  },
  {
    key: "1",
    path: "/sc-quicktools/text-transform",
    element: <TextTransform />,
    title: "Text Transform",
    description:
      "Transform text to various formats, such as camelCase, snake_case, kebab-case, and PascalCase.",
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
