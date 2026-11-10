import Link from "next/link";

export default function Footer() {
  return <footer className="site-footer"><div><Link href="/" className="wordmark">Backstory<span>.</span></Link><p>Everyone has a backstory.</p></div><div className="footer-links"><a href="mailto:niharika@backstory.pro">niharika@backstory.pro</a><a href="#">Instagram ↗</a><a href="#">LinkedIn ↗</a></div><p className="copyright">© 2026 Backstory. Made for the stories between the lines.</p></footer>;
}
