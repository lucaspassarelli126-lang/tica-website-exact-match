import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Catalogo from "./pages/Catalogo";
import Marcas from "./pages/Marcas";
import Localizacao from "./pages/Localizacao";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound.tsx";

import { CartProvider } from "./context/CartContext";
import { SmoothScroll } from "./components/SmoothScroll";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <SmoothScroll>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/servicos" element={<Servicos />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/marcas" element={<Marcas />} />
                <Route path="/localizacao" element={<Localizacao />} />
                <Route path="/contato" element={<Contato />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </SmoothScroll>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
