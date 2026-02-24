import { IconMapPin, IconPhone, IconMail } from './Icons'
import { footerLinks, site } from '../data/common'

export default function Footer() {
  return (
    <footer role="contentinfo" style={{ paddingTop: 64, paddingBottom: 32, borderTop: '1px solid var(--border)', color: 'var(--muted)', fontSize: '.85rem' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 32 }} className="footer-grid">
          <div>
            <img src="/assets/logo.png" alt="Silver State Adolescent Treatment" style={{ height: 56, opacity: .4, marginBottom: 12 }} />
            <p style={{ lineHeight: 1.65, maxWidth: 280, color: 'var(--body)', fontSize: '.85rem' }}>
              Empowering teens to blossom. Evidence-based adolescent treatment for Nevada families.
            </p>
            <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 6, fontSize: '.82rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <IconMapPin /> {site.address}
              </span>
              <a href={site.phoneTel} style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--body)' }}>
                <IconPhone /> {site.phone}
              </a>
              <a href={`mailto:${site.email}`} style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--body)' }}>
                <IconMail /> {site.email}
              </a>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '.7rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 12, fontWeight: 600, textWrap: 'balance' }}>{group.heading}</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {group.links.map((l) => (
                  <li key={l.label} style={{ marginBottom: 7 }}>
                    <a href={l.href} style={{ color: 'var(--muted)', transition: 'color .15s' }}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40, paddingTop: 20, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', fontSize: '.75rem', flexWrap: 'wrap', gap: 8 }}>
          <span>&copy; {new Date().getFullYear()} Silver State Adolescent Treatment Center</span>
          <span>HIPAA Compliant &middot; Joint Commission Accredited &middot; LegitScript Approved</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
