import Head from 'next/head'
import Image from 'next/image'
import styles from './page.module.css'
import utils from '../styles/utils.module.css'
import Layout, { siteTitle } from '@/components/layout'

const name = 'Fylo';

const Home = () => {
  return (
    <Layout home>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Fylo</title>
      </Head>
      <main className={styles.main}>
        <section className={styles.hero}>
          <Image 
              src="/images/illustration-intro.png"
              alt="Fylo"
              width={300}
              height={255}
          />
          <h2 className={styles.heroTitle}>All your files in one secure location, accesible anywhere.</h2>
          <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
          <a className={styles.btn} href='#subscribeForm'>Get started</a>
        </section>
        <section className={styles.features}>
          <div>
            <article>
              <Image 
                  src="/images/icon-access-anywhere.svg"
                  alt="icon access anywhere"
                  width={66}
                  height={60}
              />
              <h4>Access your files, anywhere</h4>
              <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
            </article>
            <article>
              <Image 
                  src="/images/icon-security.svg"
                  alt="icon-security"
                  width={50}
                  height={64}
              />
              <h4>Security you can trust</h4>
              <p>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
            </article>
            <article>
              <Image 
                  src="/images/icon-collaboration.svg"
                  alt="icon collaboration"
                  width={65}
                  height={53}
              />
              <h4>Real-time collaboration</h4>
              <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
            </article>
            <article>
              <Image 
                  src="/images/icon-any-file.svg"
                  alt="icon store"
                  width={70}
                  height={49}
              />
              <h4>Store any type of file</h4>
              <p>Whether you are sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
            </article>
          </div>
        </section>
        <section className={styles.teams}>
            <div>
              <Image
                  className={styles.teamsImage} 
                  src="/images/illustration-stay-productive.png"
                  alt="stay productive"
                  width={300}
                  height={230}
              />
              <div className={styles.teamsContent}>
                <h2>Stay productive, wherever you are</h2>
                <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                <a className={styles.link} href=''>
                  See how Fylo works
                  <Image 
                    src="/images/icon-arrow.svg"
                    alt="arrow img"
                    width={14}
                    height={14}
                  />
                </a>
              </div>
            </div>
        </section>
        <section className={styles.testimonials}>
          <div>
            <article className={`${styles.slot} ${utils.greyShadow}`}>
              <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
              <div className={styles.slotContent}>
                <Image 
                    src="/images/profile-1.jpg"
                    alt="icon profile"
                    width={25}
                    height={25}
                />
                <div>
                  <h5>Satish Patel</h5>
                  <p>Founder & CEO, Huddle</p>
                </div>
              </div>
            </article>
            <article className={`${styles.slot} ${utils.greyShadow}`}>
              <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
              <div className={styles.slotContent}>
                <Image 
                    src="/images/profile-2.jpg"
                    alt="icon profile"
                    width={25}
                    height={25}
                />
                <div>
                  <h5>Bruce McKenzie</h5>
                  <p>Founder & CEO, Huddle</p>
                </div>
              </div>
            </article>
            <article className={`${styles.slot} ${utils.greyShadow}`}>
              <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
              <div className={styles.slotContent}>
                <Image 
                    src="/images/profile-3.jpg"
                    alt="icon profile"
                    width={25}
                    height={25}
                />
                <div>
                  <h5>Iva Boyd</h5>
                  <p>Founder & CEO, Huddle</p>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section id='subscribeForm' className={styles.subscribeForm}>
          <div className={utils.dartkShadow}>
            <h4>Get early access today</h4>
            <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            <form>
              <input type='text' placeholder='example@gmail.com'></input>
              <button className={styles.btn}>Get Started for free</button>
            </form>
          </div>
        </section>
        <footer className={styles.footer}>
          <div>
            <Image 
                src="/images/logo.svg"
                alt="Fylo logo"
                width={110}
                height={30}
            />
            <article className={styles.sitemap}>
              <div className={styles.location}>
                <span className={styles.sitemapIconLocation}></span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </div>
              <div>
                <ul className={utils.marginTopS}>
                  <li className={utils.displayF}>
                    <span className={styles.sitemapIconPhone}></span>
                    <p className={utils.marginLeftS}>+1-543-123-4567</p>
                  </li>
                  <li className={utils.displayF}>
                    <span className={styles.sitemapIconEmail}></span>
                    <p className={utils.marginLeftS}>example@fylo.com</p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className={utils.marginTopS}>
                  <li>
                    <p>About Us</p>
                  </li>
                  <li>
                    <p>Jobs</p>
                  </li>
                  <li>
                    <p>Press</p>
                  </li>
                  <li>
                    <p>Blog</p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className={utils.marginTopS}>
                  <li>
                    <p>Contact Us</p>
                  </li>
                  <li>
                    <p>Terms</p>
                  </li>
                  <li>
                    <p>Privacy</p>
                  </li>
                </ul>
              </div>
              <div className={styles.networks}>
                <ul>
                  <li>
                    <Image
                      className={styles.instagramIcon} 
                      priority
                      src="/images/instagram.svg"
                      alt="instagram"
                      width={30}
                      height={30}
                    />
                  </li>
                  <li>
                    <Image 
                      src="/images/tweet.svg"
                      alt="tweeter icon"
                      width={30}
                      height={30}
                    />
                  </li>
                  <li>
                    <Image 
                      src="/images/face.svg"
                      alt="facebook icon"
                      width={30}
                      height={30}
                    />
                  </li>
                </ul>
              </div>
            </article>
          </div>

        </footer>
      </main>
    </Layout>
    /**
     * <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>Explore the Next.js 13 playground.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
     */
  )
}

export default Home;