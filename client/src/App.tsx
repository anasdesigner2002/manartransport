import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import SiteLayout from "@/components/layout/SiteLayout";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { ServicesPage, ServiceDetailPage } from "@/pages/services/ServicesPage";
import { FleetPage, FleetSlugPage } from "@/pages/fleet/FleetPage";
import { AboutPage, OurStoryPage, CeoPage } from "@/pages/about/AboutPages";
import InfoPage, { InfoDetailPage } from "@/pages/info/InfoPage";
import ContactPage from "@/pages/ContactPage";
import SearchPage from "@/pages/SearchPage";
import { PoliciesPage, PolicyDetailPage } from "@/pages/policies/PolicyPages";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ReelsPage from "@/pages/ReelsPage";

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/services" component={ServicesPage} />
    <Route path="/services/:slug">{(params) => <ServiceDetailPage slug={params.slug} />}</Route>
    <Route path="/fleet" component={FleetPage} />
    <Route path="/fleet/:slug">{(params) => <FleetSlugPage slug={params.slug} />}</Route>
    <Route path="/about" component={AboutPage} />
    <Route path="/about/our-story" component={OurStoryPage} />
    <Route path="/about/ceo-message" component={CeoPage} />
    <Route path="/info" component={InfoPage} />
    <Route path="/info/:slug">{(params) => <InfoDetailPage slug={params.slug} />}</Route>
    <Route path="/policies" component={PoliciesPage} />
    <Route path="/policies/:slug">{(params) => <PolicyDetailPage slug={params.slug} />}</Route>
    <Route path="/reels" component={ReelsPage} />
    <Route path="/contact" component={ContactPage} />
    <Route path="/search" component={SearchPage} />
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="dark" switchable><SiteLayout><Router /></SiteLayout></ThemeProvider></ErrorBoundary>;
}
