export default function Home() {
  const faqs = [
    {
      q: "How does real-time plagiarism detection work?",
      a: "As you type, our AI scans your text against millions of academic sources and highlights any passages that may need citations or paraphrasing."
    },
    {
      q: "Will it help me cite sources correctly?",
      a: "Yes. When a match is detected, we suggest properly formatted citations in APA, MLA, or Chicago style so you can credit sources with one click."
    },
    {
      q: "Is my writing stored or shared?",
      a: "No. Your text is processed in real-time and never stored on our servers, keeping your work private and secure."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Education Tech
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Help Students Avoid<br />
          <span className="text-[#58a6ff]">Accidental Plagiarism</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Real-time writing analysis that highlights risky passages, suggests proper citations, and offers AI-powered paraphrasing — before you submit.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $8/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for free trial. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-4xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: "🔍", title: "Live Detection", desc: "Flags potential plagiarism as you write, not after." },
          { icon: "📚", title: "Citation Helper", desc: "One-click APA, MLA & Chicago citations from matched sources." },
          { icon: "✏️", title: "Paraphrase Tool", desc: "AI rewrites flagged sentences while preserving your meaning." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Student Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$8<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to write with confidence</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited real-time scans",
              "Citation suggestions (APA, MLA, Chicago)",
              "AI paraphrasing tool",
              "Works in any browser",
              "Private — your text is never stored"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-[#8b949e] text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        © {new Date().getFullYear()} PlagiarismGuard. All rights reserved.
      </footer>
    </main>
  );
}
