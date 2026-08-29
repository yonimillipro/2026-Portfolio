import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Loader2, Send } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

const emailService = {
  serviceId: "service_8h0bacn",
  templateId: "template_f89xzsv",
  publicKey: "gmYTFmoSxTvx1qC1g",
};

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      await emailjs.send(
        emailService.serviceId,
        emailService.templateId,
        {
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        },
        emailService.publicKey,
      );
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-intro">
        <p>05 / Start a conversation</p>
        <h2 id="contact-title">Have a useful product to build?</h2>
        <a href="mailto:yonimillipro@gmail.com" className="contact-email" data-magnetic>
          yonimillipro@gmail.com <ArrowUpRight size={24} />
        </a>
        <div className="contact-meta">
          <span>Addis Ababa, Ethiopia</span>
          <a href="https://github.com/yonimillipro" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yoni-milli-25101a329/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Your name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Your email
            <input name="email" type="email" autoComplete="email" required />
          </label>
        </div>
        <label>
          What are you building?
          <input name="subject" type="text" required />
        </label>
        <label>
          Project details
          <textarea name="message" rows={5} required />
        </label>
        <div className="form-footer">
          <button className="button contact-submit" type="submit" disabled={status === "sending"} data-magnetic>
            {status === "sending" ? (
              <>Sending <Loader2 className="spin" size={18} /></>
            ) : (
              <>Send message <Send size={18} /></>
            )}
          </button>
          <p className="form-status" aria-live="polite">
            {status === "success" ? "Message sent. I’ll get back to you soon." : null}
            {status === "error"
              ? "The form could not send. Please use the email link instead."
              : null}
          </p>
        </div>
      </form>
    </section>
  );
}
