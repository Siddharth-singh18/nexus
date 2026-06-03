export default function Footer() {
  return (
    <footer className="bg-[var(--background)] py-16 border-t border-[var(--border)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold font-[family-name:var(--font-display)] mb-4 text-[var(--foreground)] tracking-tight">Nexus.</h3>
            <p className="text-[var(--muted)] max-w-sm mb-6 text-lg leading-relaxed">
              A premium digital agency building top-tier SaaS products, high-converting ad campaigns, and stunning web experiences.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-[var(--foreground)] uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-4 text-[var(--muted)] font-medium">
              <li><a href="#services" className="hover:text-[var(--accent)] transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-[var(--accent)] transition-colors">Work</a></li>
              <li><a href="#team" className="hover:text-[var(--accent)] transition-colors">Team</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-[var(--foreground)] uppercase tracking-wider text-sm">Socials</h4>
            <ul className="space-y-4 text-[var(--muted)] font-medium">
              <li><a href="#" className="hover:text-[var(--accent)] transition-colors">Twitter (X)</a></li>
              <li><a href="#" className="hover:text-[var(--accent)] transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-[var(--accent)] transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[var(--border)] text-[var(--muted)] text-sm font-medium">
          <p>© {new Date().getFullYear()} Nexus Studio. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-[var(--foreground)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--foreground)] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
