import MainLayout from "@/components/layouts/MainLayout";
import {
  TextTransform,
} from "@/components/pages/";
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
    path: "/text-transform",
    element: <TextTransform />,
    title: "Text Transform",
    description:
      "Transform text to various formats, such as camelCase, snake_case, kebab-case, and PascalCase.",
  },
  // {
  //   key: "3",
  //   path: "/color-transform",
  //   element: <ColorTransform />,
  //   title: "Color Transform",
  //   description:
  //     "Transform colors to various formats, such as hex, rgb, rgba, and hsl.",
  // },
  // {
  //   key: "4",
  //   path: "/sentiment",
  //   element: <SentimentAnalysis />,
  //   title: "Sentiment Analysis",
  //   description: "Get sentiment analysis of text.",
  // },
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
