import { CONTACT_INFO } from "@/lib/contactData";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <h2 className="font-[family-name:var(--font-headline)] text-2xl md:text-3xl font-black tracking-tighter text-on-background">
        Podés encontrarnos en:
      </h2>
      <ul className="space-y-6">
        {CONTACT_INFO.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-start gap-4 group"
            >
              <span className="w-12 h-12 shrink-0 rounded-xl bg-surface-container border border-outline-variant/20 flex items-center justify-center group-hover:border-secondary/30 group-hover:bg-secondary/5 transition-colors">
                <span className="material-symbols-outlined text-2xl text-secondary group-hover:text-mountain-orange transition-colors">
                  {item.icon}
                </span>
              </span>
              <span className="pt-1 min-w-0">
                <span className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant font-[family-name:var(--font-headline)] mb-1">
                  {item.label}
                </span>
                <span className="block text-base md:text-lg font-medium text-on-background group-hover:text-secondary transition-colors">
                  {item.value}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
