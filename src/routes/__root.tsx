import type { ErrorComponentProps } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, type ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { business } from "@/config/business";
import { jsonLd, organizationSchema, seo, websiteSchema } from "@/config/seo";
import { touchSession } from "@/lib/requests.functions";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="container-page flex min-h-[70vh] flex-col justify-center py-24">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you&apos;re looking for may have been moved or removed.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <Link to="/">Back to home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/services">Browse services</Link>
        </Button>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="container-page flex min-h-[70vh] flex-col justify-center py-24">
      <p className="eyebrow">Something went wrong</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        This page didn&apos;t load
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        Please try again. If it keeps happening, contact us by phone or email and we&apos;ll help
        directly.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button
          onClick={() => {
            router.invalidate();
            reset();
          }}
        >
          Try again
        </Button>
        <Button asChild variant="outline">
          <Link to="/contact">Contact us</Link>
        </Button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    // Site-wide defaults only. Page titles, descriptions, canonicals and
    // page-level structured data live in each route's own head().
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: seo.defaultTitle },
      { name: "description", content: seo.description },
      { name: "author", content: seo.author },
      { name: "theme-color", content: "#0B0D10" },
      { property: "og:site_name", content: seo.siteName },
      { property: "og:locale", content: seo.locale },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      // Geographic signals for the single physical location.
      { name: "geo.region", content: "IN-BR" },
      { name: "geo.placename", content: business.address.locality },
      { name: "geo.position", content: `${business.geo.latitude};${business.geo.longitude}` },
      { name: "ICBM", content: `${business.geo.latitude}, ${business.geo.longitude}` },
      // ✏️ Verification codes come from src/config/business.ts
      ...(seo.verification.google
        ? [{ name: "google-site-verification", content: seo.verification.google }]
        : []),
      ...(seo.verification.bing ? [{ name: "msvalidate.01", content: seo.verification.bing }] : []),
    ],
    scripts: jsonLd(organizationSchema(), websiteSchema()),
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const registerSession = useServerFn(touchSession);

  // One session per visitor, refreshed periodically — not one per page view.
  useEffect(() => {
    let cancelled = false;
    const ping = () => {
      if (!cancelled) void registerSession().catch(() => undefined);
    };
    ping();
    const interval = window.setInterval(ping, 10 * 60 * 1000);
    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, [registerSession]);

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        {/* Required: nested routes render here. */}
        <Outlet />
      </main>
      <Footer />
      <FloatingContact />
    </QueryClientProvider>
  );
}
