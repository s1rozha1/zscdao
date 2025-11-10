import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Фоновые геометрические элементы */}
      <div className="bg-shapes">
        <div className="triangle triangle-1"></div>
        <div className="triangle triangle-2"></div>
        <div className="triangle triangle-3"></div>
        <div className="triangle triangle-4"></div>
        <div className="dots-pattern"></div>
      </div>

      <div className="container">
        {/* Хедер */}
        <header>
          <div className="logo-container">
            <Image
              src="/logo.png"
              alt="ZSC DAO Logo"
              width={200}
              height={200}
              className="logo"
              priority
            />
          </div>
          <div className="title-logo-box">
            <Image
              src="/title-logo.png"
              alt="The ZSC DAO"
              width={500}
              height={200}
              className="title-logo"
              priority
            />
          </div>
        </header>

        {/* About Section */}
        <section className="about-section">
          <h2>About Us</h2>

          <div className="intro-card">
            <p>Welcome to <strong>zerosupercycle DAO</strong> — a Decentralized Autonomous Organization community for everyone passionate about prediction markets and actively trading on Polymarket.</p>
          </div>

          <div className="cards-grid">
            <div className="info-card">
              <div className="card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To build the most passionate and strongest community, bringing together smart members, project founders, coders, and just awesome people.</p>
            </div>

            <div className="info-card">
              <div className="card-icon">🤝</div>
              <h3>Together We Win</h3>
              <p>We believe that when we research alpha together, it becomes an enjoyable and rewarding experience for everyone involved.</p>
            </div>

            <div className="info-card">
              <div className="card-icon">🌟</div>
              <h3>Open to All</h3>
              <p>Our community is open to everyone. If you love prediction markets or trade on Polymarket, we'll be happy to have you!</p>
            </div>
          </div>

          <div className="thanks-section">
            <p>Huge thanks to every member helping us grow, build, and get better. And from all of us at the DAO, a big thank you to the Polymarket team for the opportunity and for building the best ecosystem out there.</p>
          </div>

          <div className="cta-box">
            <p>Join the Polymarket supercycle with zerosupercycle DAO</p>
          </div>
        </section>

        {/* Social Section */}
        <section className="social-section">
          <h2>Join Us</h2>
          <div className="social-links">
            <a href="https://x.com/zscdao" className="social-link" target="_blank" rel="noopener noreferrer">
              <svg fill="currentColor" viewBox="0 0 300 300" style={{width: '30px', height: '30px'}}>
                <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"/>
              </svg>
            </a>
            <a href="https://discord.com/invite/zscdao" className="social-link" target="_blank" rel="noopener noreferrer">
              <svg fill="currentColor" viewBox="0 0 24 24" style={{width: '30px', height: '30px'}}>
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <p>&copy; 2025 ZSC DAO. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}
