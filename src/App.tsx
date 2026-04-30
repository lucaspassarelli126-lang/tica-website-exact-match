import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";

// Lazy load pages for performance optimization
const Home = React.lazy(() => import("./pages/Home"));
const Sobre = React.lazy(() => import("./pages/Sobre"));
const Servicos = React.lazy(() => import("./pages/Servicos"));
const Catalogo = React.lazy(() => import("./pages/Catalogo"));
const Marcas = React.lazy(() => import("./pages/Marcas"));
const Localizacao = React.lazy(() => import("./pages/Localizacao"));
const Contato = React.lazy(() => import("./pages/Contato"));
const Produto = React.lazy(() => import("./pages/Produto"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

import { CartProvider } from "./context/CartContext";
import { SmoothScroll } from "./components/SmoothScroll";

// Simple fallback loader
const PageLoader = () => (
  <div className="w-full h-[60vh] flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-zinc-200 border-t-accent rounded-full animate-spin"></div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <SmoothScroll>
          <Toaster />
          <Sonner position="bottom-left" />
          <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/sobre" element={<Sobre />} />
                  <Route path="/servicos" element={<Servicos />} />
                  <Route path="/catalogo" element={<Catalogo />} />
                  <Route path="/marcas" element={<Marcas />} />
                  <Route path="/localizacao" element={<Localizacao />} />
                  <Route path="/contato" element={<Contato />} />
                  <Route path="/produto/:id" element={<Produto />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </SmoothScroll>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
