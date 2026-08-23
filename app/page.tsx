const picks = [
  ['🧺', 'HOME', 'The 7 best washable dog beds', 'Supportive, durable picks for muddy paws and deep naps.'],
  ['🐈', 'CATS', 'Low-tracking litter worth the switch', 'Cleaner options for small spaces and sensitive paws.'],
  ['🦮', 'WALKS', 'No-pull harnesses that actually fit', 'Comfort-first designs for tiny and big adventurers.'],
];

export default function Home() {
  return <main>
    <div className="announcement">Independent advice for happier pets · New guides every week</div>
    <nav><a className="brand" href="#top">🐾 Pawsome</a><div className="links"><a href="#guides">Guides</a><a href="#picks">Best picks</a><a href="#promise">Our promise</a></div><a className="pill" href="#newsletter">Join the pack</a></nav>
    <section className="hero" id="top"><div><p className="eyebrow">GOOD DAYS START HERE</p><h1>More joy.<br/><em>Less guesswork.</em></h1><p className="lede">Practical care guides and genuinely useful finds for the animals who make home feel like home.</p><div className="actions"><a className="button" href="#picks">Explore our picks →</a><a href="#guides">Read the latest guides</a></div><p className="trust">🐶 🐱 🐰 <b>Pet-parent approved</b> · Research-led, never hype-led</p></div><div className="art" aria-label="A happy dog and cat relaxing together"><span className="sun"></span><span className="dog">🐕</span><span className="cat">🐈</span><span className="leaf">🌿</span><b>HONEST<br/>PICKS<br/>ONLY</b></div></section>
    <section className="section" id="picks"><header className="section-head"><div><p className="eyebrow">TRIED, TESTED, LOVED</p><h2>Better things for<br/><em>their everyday.</em></h2></div><p>We compare materials, value, usability, and real pet-parent feedback—so you can buy once and buy well.</p></header><div className="cards">{picks.map(([icon,tag,title,copy]) => <article key={title}><div className="card-art">{icon}</div><small>{tag}</small><h3>{title}</h3><p>{copy}</p><a href="#affiliate-note">See our top picks ↗</a></article>)}</div></section>
    <section className="guides" id="guides"><div><p className="eyebrow">THE FIELD NOTES</p><h2>Small changes.<br/><em>Big tail wags.</em></h2><p>Clear, kind advice for the questions that come up between vet visits.</p></div><div>{[['01','A practical guide to better dental care','8 min'],['02','How to build a calmer morning routine','6 min'],['03','What to pack for a pet-friendly road trip','10 min']].map(([n,t,time])=><a className="guide" href="#newsletter" key={n}><span>{n}</span><strong>{t}</strong><small>{time}</small><b>→</b></a>)}</div></section>
    <section className="newsletter" id="newsletter"><div><p className="eyebrow">A LITTLE NOTE FOR YOUR INBOX</p><h2>Good advice.<br/><em>No barking.</em></h2></div><form><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" placeholder="you@example.com" required/><button>Join the pack →</button><small>One thoughtful email a week. Unsubscribe anytime.</small></form></section>
    <footer id="promise"><a className="brand" href="#top">🐾 Pawsome</a><p id="affiliate-note">Pawsome is reader-supported. When you buy through our links, we may earn a commission at no extra cost to you. Recommendations remain independent.</p><span>© 2026 Pawsome</span></footer>
  </main>;
}
