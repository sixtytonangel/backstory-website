type Props = {
  intro?: string;
};

const inputClass =
  "min-h-[46px] w-full rounded-md border border-[#4a4540] bg-panel px-4 font-body text-[17px] font-normal text-cream placeholder:text-muted/70 focus:border-sun focus:outline-none";

export default function ContactSection({
  intro = "If you're bringing people together, teaching a classroom or preparing to step on stage, I'd love to explore collaborations.",
}: Props) {
  return (
    <section id="contact" className="relative overflow-hidden bg-tan text-ink">
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 h-[340px] w-[340px] rounded-full bg-sun"
      />
      <div className="relative mx-auto flex max-w-[1200px] flex-wrap items-start gap-10 px-4 py-16 sm:px-6 md:py-20">
        <div className="min-w-0 flex-[1_1_360px]">
          <h2 className="font-display text-[24px] font-semibold leading-[1.3] tracking-[-0.01em] md:text-[28px]">
            {intro}
          </h2>
          <p className="mt-5 text-[17px]">
            Email{" "}
            <a href="mailto:niharika@backstory.pro" className="font-semibold underline underline-offset-4">
              niharika@backstory.pro
            </a>{" "}
            or fill in this form.
          </p>
        </div>
        <form
          action="https://formspree.io/f/mwlopwjj"
          method="POST"
          className="grid min-w-0 flex-[1_1_420px] gap-4 rounded-xl bg-ink p-6 text-cream sm:p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1.5 text-[14px] font-semibold">
              Name
              <input type="text" name="name" required autoComplete="name" className={inputClass} />
            </label>
            <label className="grid gap-1.5 text-[14px] font-semibold">
              Email
              <input type="email" name="email" required autoComplete="email" className={inputClass} />
            </label>
          </div>
          <label className="grid gap-1.5 text-[14px] font-semibold">
            Organisation
            <input type="text" name="organisation" autoComplete="organization" className={inputClass} />
          </label>
          <label className="grid gap-1.5 text-[14px] font-semibold">
            Message
            <textarea name="message" rows={4} required className={`${inputClass} resize-y py-3`} />
          </label>
          <input type="hidden" name="_subject" value="New message from backstory.pro" />
          <button
            type="submit"
            className="justify-self-start rounded-md bg-sun px-7 py-3 font-display text-[15px] font-semibold text-ink transition-opacity hover:opacity-90"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
