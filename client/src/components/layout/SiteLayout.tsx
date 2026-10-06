import { useEffect } from "react";
import { useLocation } from "wouter";
import Header from "./Header";
import Footer from "./Footer";
import BookingModal from "@/components/booking/BookingModal";
import FloatingActions from "@/components/chatbot/FloatingActions";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [location]);
  return <div className="site-frame"><Header /><main>{children}</main><Footer /><BookingModal /><FloatingActions /></div>;
}
