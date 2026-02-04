import './App.css'
import logo from './assets/logo.png'
import logoWhite from './assets/logo_white.png'
import locationIcon from './assets/location.png'
import clockIcon from './assets/clock.png'
import moneyIcon from './assets/money.png'
import aboutImage from './assets/back.jpeg'
import otoCekiciImage from './assets/oto_cekici.jpeg'
import yolYardimImage from './assets/yol_yardim.png'
import mapImage from './assets/map.jpg'
import whatsappIcon from './assets/whatsapp.png'
import locationIconSmall from './assets/location_icon.png'
import phoneIcon from './assets/phone.png'

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Hızlı Çekici">
          <span className="logo-mark">
            <img src={logo} alt="Kurtarıcı Ülfet logosu" />
          </span>
          <span className="logo-text">Kurtarıcı Ülfet</span>
        </a>
        <nav className="site-nav" aria-label="Ana menü">
          <a href="#hakkimizda">Hakkımızda</a>
          <a href="#hizmetler">Hizmetlerimiz</a>
          <a href="#iletisim">İletişim</a>
        </nav>
        <div className="header-cta">
          <span className="header-label">Hemen Ara</span>
          <a className="btn ghost phone-link header-phone" href="tel:+905426428370">
            <svg className="phone-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6.6 10.2c1.4 2.7 3.9 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.7 3.8.7.6 0 1 .4 1 1v3.5c0 .6-.4 1-1 1C11.6 21.2 2.8 12.4 2.8 2.2c0-.6.4-1 1-1H7.3c.6 0 1 .4 1 1 0 1.3.2 2.6.7 3.8.1.4 0 .8-.3 1.1l-2.1 2.1z"
              />
            </svg>
            +90 542 642 83 70
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Kütahya çekici & kurtarıcı & yol yardım • 7/24</p>
            <h1>Kütahya ve çevresinde Kurtarıcı Ülfet'i arayın, aracınız yolda kalmasın.</h1>
            <p className="hero-lede bold-lede">
              Kütahya Merkez • Tavşanlı • Altıntaş • Aslanapa • Çavdarhisar • Simav • Emet • Gediz • Dumlupınar • Domaniç • Çevre İller
            </p>
            <div className="hero-actions">
              <a className="btn primary phone-cta" href="tel:+905426428370">
                Hemen Ara
                <svg className="phone-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M6.6 10.2c1.4 2.7 3.9 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.7 3.8.7.6 0 1 .4 1 1v3.5c0 .6-.4 1-1 1C11.6 21.2 2.8 12.4 2.8 2.2c0-.6.4-1 1-1H7.3c.6 0 1 .4 1 1 0 1.3.2 2.6.7 3.8.1.4 0 .8-.3 1.1l-2.1 2.1z"
                  />
                </svg>
                <span>0 542 642 83 70</span>
              </a>
            </div>
          </div>
        </section>
        <section className="hero-strip" aria-label="Öne çıkanlar">
          <article>
            <span className="hero-strip-icon" aria-hidden="true">
              <img src={locationIcon} alt="" />
            </span>
            <h2>Şehir İçi & Şehirler Arası Hizmet</h2>
            <p>Aracınızı şehir içinde ya da şehirler arası güvenle taşıyoruz. Net bilgilendirmeler ile, aracınızı en uygun ve güvenli şekilde teslim ediyoruz.</p>
          </article>
          <article>
            <span className="hero-strip-icon" aria-hidden="true">
              <img src={clockIcon} alt="" />
            </span>
            <h2>20–35 Dakikada Yanınızdayız</h2>
            <p>Konumunuza göre varış süresi değişebilir, ama en hızlı şekilde yanınızda olacağız. Ortalama varış süresini baştan paylaşıyoruz.</p>
          </article>
          <article>
            <span className="hero-strip-icon" aria-hidden="true">
              <img src={moneyIcon} alt="" />
            </span>
            <h2>Uygun Hizmet Fiyatı</h2>
            <p>Sürpriz ücretlerle karşılaşmazsınız. Hizmet öncesinde belirlenen şeffaf fiyatlandırma sayesinde gönül rahatlığıyla destek alabilirsiniz.</p>
          </article>
        </section>

        <section id="hakkimizda" className="section">
          <div className="section-header about-grid">
            <div className="about-copy">
              <h2>Hakkımızda</h2>
              <p className="about-text">
                5 yıldır Kütahya merkez, çevre ilçeler ve çevre illerde oto çekici, oto kurtarıcı ve yol yardım hizmeti veriyoruz. Kaza, arıza, araç çekme ve kurtarma hizmetlerinin yanında yol yardım, eşya taşıma ve şehirler arası taşıma gibi ihtiyaçlarda da destek sağlıyoruz. Sadece Kütahya ile sınırlı kalmıyor; İstanbul, Sakarya ve çevre illere de güvenli şekilde hizmet veriyoruz. Konumunuzu paylaştığınızda size tahmini varış süremizi ve fiyat bilgisini en baştan açıkça söylüyoruz. Sonradan sürpriz ücretlerle karşılaşmamanız bizim için önemli.
              </p>
            </div>
            <div className="about-image">
              <img src={aboutImage} alt="Hakkımızda görseli" />
            </div>
          </div>
        </section>

        <section id="hizmetler" className="section">
          <div className="section-header">
            <h2>Hizmetlerimiz</h2>
          </div>
          <div className="service-grid">
            <article className="card span-2 card-media">
              <h3>Oto Çekici & Oto Kurtarıcı</h3>
              <img src={otoCekiciImage} alt="Oto çekici hizmeti" />
            </article>
            <article className="card card-media">
              <h3>7/24 Yol Yardım Desteği</h3>
              <img src={yolYardimImage} alt="Yol yardım hizmeti" />
            </article>
            <article className="card wide card-media">
              <h3>Şehir İçi & Şehirler Arası Hizmet</h3>
              <img src={mapImage} alt="Şehir içi ve şehirler arası hizmet haritası" />
            </article>
          </div>
        </section>

        <section id="iletisim" className="section">
          <div className="section-header">
            <h2>İletişim</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-item">
              <img className="contact-icon" src={locationIconSmall} alt="" />
              <h3>Lokasyon</h3>
              <p>Kütahya / Merkez</p>
            </div>
            <div className="contact-item">
              <img className="contact-icon" src={phoneIcon} alt="" />
              <h3>Telefon</h3>
              <p><a href="tel:+905426428370">+90 542 642 83 70</a></p>
            </div>
            <div className="contact-item">
              <img className="contact-icon" src={whatsappIcon} alt="" />
              <h3>WhatsApp</h3>
              <p><a href="https://wa.me/905426428370">Konum Gönder</a></p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logoWhite} alt="Kurtarıcı Ülfet logosu" />
            <span>Kurtarıcı Ülfet</span>
          </div>
          <div>
            <h3>Kurumsal</h3>
            <ul>
              <li>Kütahya / Merkez</li>
              <li>Telefon: <a href="tel:+905426428370">0 542 642 83 70</a></li>
              <li>E‑posta: info@kurtariciulfet.com</li>
              <li>Website: kurtariciulfet.com</li>
            </ul>
          </div>
          <div>
            <h3>Linkler</h3>
            <ul>
              <li><a href="#top">Anasayfa</a></li>
              <li><a href="#hakkimizda">Hakkımızda</a></li>
              <li><a href="#hizmetler">Hizmetlerimiz</a></li>
              <li><a href="#iletisim">İletişim</a></li>
            </ul>
          </div>
          <div>
            <h3>Hizmetler</h3>
            <ul>
              <li>Oto Çekici</li>
              <li>Yol Yardım</li>
              <li>Şehirler Arası Taşıma</li>
            </ul>
          </div>
        </div>
        <p className="footer-note">© 2026 Kurtarıcı Ülfet. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  )
}

export default App
