import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faCheck, faMessage, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { openWhatsAppContact, buildWhatsAppUrl, type BookingData } from "@/utils/whatsapp";

const initialForm: BookingData = { fullName: "", email: "", whatsapp: "", travelDate: "", tripDetails: "", notes: "" };

export default function BookingModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<BookingData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const show = () => { setOpen(true); setSubmitted(false); };
    window.addEventListener("open-booking", show);
    return () => window.removeEventListener("open-booking", show);
  }, []);

  if (!open) return null;
  const update = (key: keyof BookingData, value: string) => setForm((current) => ({ ...current, [key]: value }));
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.fullName || !form.email || !form.whatsapp || !form.travelDate || !form.tripDetails) return;
    setSubmitted(true);
    window.open(buildWhatsAppUrl(form), "_blank", "noopener,noreferrer");
  };

  return <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Book a ride" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
    <div className="booking-modal">
      <button className="modal-close" aria-label="Close booking form" onClick={() => setOpen(false)}><FontAwesomeIcon icon={faXmark} /></button>
      <div className="booking-modal__intro"><span className="eyebrow">Direct booking</span><h2>Tell us about your journey.</h2><p>A few details are enough to start the conversation. Your request opens in WhatsApp for review before you send it.</p><div className="booking-flow"><span><b>01</b> Fill the form</span><span><b>02</b> Review in WhatsApp</span><span><b>03</b> Send to Manar</span></div></div>
      {submitted ? <div className="booking-success"><div className="success-icon"><FontAwesomeIcon icon={faCheck} /></div><h3>Your WhatsApp draft is ready.</h3><p>Review the pre-filled message and send it to the Manar Transport team. They will follow up with availability and final trip details.</p><button className="gold-button" onClick={() => openWhatsAppContact()}>Open WhatsApp again <FontAwesomeIcon icon={faMessage} /></button></div> : <form className="booking-form" onSubmit={submit}>
        <div className="form-grid"><label>Full name<input required value={form.fullName} onChange={(event) => update("fullName", event.target.value)} placeholder="Your name" /></label><label>Email<input required type="email" value={form.email} onChange={(event) => update("email", event.target.value)} placeholder="you@example.com" /></label><label>WhatsApp number<input required value={form.whatsapp} onChange={(event) => update("whatsapp", event.target.value)} placeholder="Country code + number" /></label><label>Travel date<div className="input-with-icon"><input required type="date" value={form.travelDate} onChange={(event) => update("travelDate", event.target.value)} /><FontAwesomeIcon icon={faCalendarDays} /></div></label></div>
        <label>Trip / service details<textarea required value={form.tripDetails} onChange={(event) => update("tripDetails", event.target.value)} placeholder="Tell us about the route, group, or service you need" rows={4} /></label>
        <label>Additional notes <span className="muted-label">Optional</span><textarea value={form.notes} onChange={(event) => update("notes", event.target.value)} placeholder="Anything else we should know?" rows={3} /></label>
        <button className="gold-button gold-button--full" type="submit">Send via WhatsApp <FontAwesomeIcon icon={faMessage} /></button>
        <small className="form-note">No fake backend: this opens a pre-filled WhatsApp message to {"+966590832169"}.</small>
      </form>}
    </div>
  </div>;
}

export function openBooking() { window.dispatchEvent(new CustomEvent("open-booking")); }
