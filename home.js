import React from 'react'

import projectStyles from '.style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <div data-role="Header" className={styles['navbar-container']}>
        <div className={styles['navbar']}>
          <span
            className={` ${projectStyles['card-heading']} ${styles['heading']} `}
          >
            Logo
          </span>
          <div className={styles['links-container']}>
            <span
              className={` ${styles['link']} ${projectStyles['navbar-link']} `}
            >
              About
            </span>
            <span
              className={` ${styles['link1']} ${projectStyles['navbar-link']} `}
            >
              Experience
            </span>
            <span
              className={` ${styles['link2']} ${projectStyles['navbar-link']} `}
            >
              Portofolio
            </span>
            <span className={projectStyles['navbar-link']}>Contact</span>
          </div>
          <div data-role="BurgerMenu" className={styles['burger-menu']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon']}>
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className={styles['mobile-menu']}>
            <div className={styles['container01']}>
              <span
                className={` ${projectStyles['card-heading']} ${styles['heading1']} `}
              >
                Logo
              </span>
              <div data-role="CloseMobileMenu" className={styles['close-menu']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className={styles['links-container1']}>
              <span
                className={` ${styles['link4']} ${projectStyles['navbar-link']} `}
              >
                About
              </span>
              <span
                className={` ${styles['link5']} ${projectStyles['navbar-link']} `}
              >
                Experience
              </span>
              <span
                className={` ${styles['link6']} ${projectStyles['navbar-link']} `}
              >
                Portofolio
              </span>
              <span className={projectStyles['navbar-link']}>Contact</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['section-separator']}></div>
      <div className={styles['section-separator1']}></div>
      <div className={styles['container02']}>
        <div className={styles['hero']}>
          <div className={styles['hero-text-container']}>
            <h1
              className={` ${styles['heading2']} ${projectStyles['section-heading']} `}
            >
              I help startups deliver the right message to their customers
            </h1>
            <span
              className={` ${styles['text']} ${projectStyles['section-text']} `}
            >
              <span>
                c. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
                augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
                nulla. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos.
              </span>
            </span>
            <div className={styles['cta-btn-container']}>
              <button
                className={` ${styles['cta-btn']} ${projectStyles['anchor']} ${projectStyles['button']} `}
              >
                <span className={styles['text02']}>MY WORK</span>
              </button>
              <button
                className={` ${styles['cta-btn1']} ${projectStyles['button']} ${projectStyles['anchor']} `}
              >
                ABOUT ME
              </button>
            </div>
          </div>
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className={styles['image']}
          />
        </div>
      </div>
      <div className={styles['features']}>
        <div className={styles['heading-container']}>
          <h2
            className={` ${styles['text03']} ${projectStyles['section-heading']} `}
          >
            Deliverables
          </h2>
          <span
            className={` ${styles['text04']} ${projectStyles['section-text']} `}
          >
            Lorme ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero.
          </span>
        </div>
        <div className={styles['cards-container']}>
          <div className={styles['card']}>
            <div className={styles['icon-container']}>
              <svg
                viewBox="0 0 1170.2857142857142 1024"
                className={styles['icon04']}
              >
                <path d="M1170.286 877.714v73.143h-1170.286v-877.714h73.143v804.571h1097.143zM1097.143 164.571v248.571c0 16-19.429 24.571-31.429 12.571l-69.143-69.143-361.714 361.714c-7.429 7.429-18.857 7.429-26.286 0l-133.143-133.143-237.714 237.714-109.714-109.714 334.286-334.286c7.429-7.429 18.857-7.429 26.286 0l133.143 133.143 265.143-265.143-69.143-69.143c-12-12-3.429-31.429 12.571-31.429h248.571c10.286 0 18.286 8 18.286 18.286z"></path>
              </svg>
            </div>
            <div className={styles['content-container']}>
              <span
                className={` ${styles['heading3']} ${projectStyles['card-heading']} `}
              >
                Diagrams
              </span>
              <span
                className={` ${styles['text05']} ${projectStyles['card-text']} `}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
          </div>
          <div className={styles['card1']}>
            <div className={styles['icon-container1']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon06']}>
                <path d="M810 128q34 0 60 26t26 60v256h-214l44-172-172 44v-214h256zM726 726l-44-172h214v256q0 34-26 60t-60 26h-256v-214zM342 554l-44 172 172-44v214h-256q-34 0-60-26t-26-60v-256h214zM128 214q0-34 26-60t60-26h256v214l-172-44 44 172h-214v-256z"></path>
              </svg>
            </div>
            <div className={styles['content-container1']}>
              <span
                className={` ${styles['heading4']} ${projectStyles['card-heading']} `}
              >
                Wireframes
              </span>
              <span
                className={` ${styles['text06']} ${projectStyles['card-text']} `}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
          </div>
          <div className={styles['card2']}>
            <div className={styles['icon-container2']}>
              <svg
                viewBox="0 0 865.7188571428571 1024"
                className={styles['icon08']}
              >
                <path d="M207.429 877.714l52-52-134.286-134.286-52 52v61.143h73.143v73.143h61.143zM506.286 347.429c0-7.429-5.143-12.571-12.571-12.571-3.429 0-6.857 1.143-9.714 4l-309.714 309.714c-2.857 2.857-4 6.286-4 9.714 0 7.429 5.143 12.571 12.571 12.571 3.429 0 6.857-1.143 9.714-4l309.714-309.714c2.857-2.857 4-6.286 4-9.714zM475.429 237.714l237.714 237.714-475.429 475.429h-237.714v-237.714zM865.714 292.571c0 19.429-8 38.286-21.143 51.429l-94.857 94.857-237.714-237.714 94.857-94.286c13.143-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l134.286 133.714c13.143 13.714 21.143 32.571 21.143 52z"></path>
              </svg>
            </div>
            <div className={styles['content-container2']}>
              <span
                className={` ${styles['heading5']} ${projectStyles['card-heading']} `}
              >
                Design
              </span>
              <span
                className={` ${styles['text07']} ${projectStyles['card-text']} `}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['about']}>
        <div className={styles['max-content-width-container']}>
          <div className={styles['heading-container1']}>
            <h1
              className={` ${projectStyles['section-heading']} ${styles['text08']} `}
            >
              Professional experience
            </h1>
          </div>
          <div className={styles['content-container3']}>
            <div className={styles['about-1']}>
              <div className={styles['container03']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon10']}>
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span
                  className={` ${styles['text09']} ${projectStyles['card-text']} `}
                >
                  Lorem ipsum dolor sit amet aulla quis sem at nibh elementum
                  imperdiet.
                </span>
              </div>
              <div className={styles['container04']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon12']}>
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span
                  className={` ${styles['text10']} ${projectStyles['card-text']} `}
                >
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </span>
              </div>
              <div className={styles['container05']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon14']}>
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span
                  className={` ${styles['text11']} ${projectStyles['card-text']} `}
                >
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </span>
              </div>
            </div>
            <div className={styles['about-11']}>
              <div className={styles['container06']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon16']}>
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span
                  className={` ${styles['text12']} ${projectStyles['card-text']} `}
                >
                  <span>
                    Lorem ipsum dolor sit amet aulla quis sem at nibh elementum
                  </span>
                  <br></br>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className={styles['container07']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon18']}>
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span
                  className={` ${styles['text16']} ${projectStyles['card-text']} `}
                >
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </span>
              </div>
              <div className={styles['container08']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon20']}>
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span
                  className={` ${styles['text17']} ${projectStyles['card-text']} `}
                >
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </span>
              </div>
            </div>
          </div>
          <button
            className={` ${styles['button']} ${projectStyles['anchor']} ${projectStyles['button']} `}
          >
            CHECK MY WORK
          </button>
        </div>
      </div>
      <div className={styles['section-separator2']}></div>
      <div className={styles['clients']}>
        <div className={styles['heading-container2']}>
          <h1
            className={` ${styles['text18']} ${projectStyles['section-heading']} `}
          >
            Clients
          </h1>
          <span
            className={` ${styles['text19']} ${projectStyles['section-text']} `}
          >
            Here we will put your clients&apos; or partners&apos; logos
          </span>
        </div>
        <div className={styles['logo-container']}>
          <img
            alt="image"
            src="/playground_assets/default-img.svg"
            className={styles['logo']}
          />
          <img
            alt="image"
            src="/playground_assets/default-img.svg"
            className={styles['logo1']}
          />
          <img
            alt="image"
            src="/playground_assets/default-img.svg"
            className={styles['logo2']}
          />
          <img
            alt="image"
            src="/playground_assets/default-img.svg"
            className={styles['logo3']}
          />
          <img
            alt="image"
            src="/playground_assets/default-img.svg"
            className={styles['logo4']}
          />
        </div>
      </div>
      <div className={styles['pricing']}>
        <div className={styles['heading-container3']}>
          <h1
            className={` ${styles['text20']} ${projectStyles['section-heading']} `}
          >
            Ask for a quote
          </h1>
          <span
            className={` ${styles['text21']} ${projectStyles['section-text']} `}
          >
            Lorme ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero.
          </span>
        </div>
        <div className={styles['pricing-card-container']}>
          <div className={styles['card3']}>
            <div className={styles['card-heading']}>
              <span
                className={` ${styles['type']} ${projectStyles['anchor']} `}
              >
                Minimal
              </span>
              <span className={projectStyles['section-heading']}>Basic</span>
            </div>
            <div className={styles['card-content']}>
              <div className={styles['feature']}>
                <span className={projectStyles['card-text']}>Feature one</span>
                <span
                  className={` ${styles['limit']} ${projectStyles['card-text']} `}
                >
                  TBD
                </span>
              </div>
              <div className={styles['feature1']}>
                <span className={projectStyles['card-text']}>Feature two</span>
                <span
                  className={` ${styles['limit1']} ${projectStyles['card-text']} `}
                >
                  TBD
                </span>
              </div>
              <div className={styles['feature2']}>
                <span className={projectStyles['card-text']}>
                  Feature three
                </span>
                <span
                  className={` ${styles['limit2']} ${projectStyles['card-text']} `}
                >
                  UNLIMITED
                </span>
              </div>
              <div className={styles['feature3']}>
                <span className={projectStyles['card-text']}>Feature four</span>
                <span
                  className={` ${styles['limit3']} ${projectStyles['card-text']} `}
                >
                  UNLIMITED
                </span>
              </div>
              <button
                className={` ${styles['choose']} ${projectStyles['button']} ${projectStyles['anchor']} `}
              >
                CHOOSE
              </button>
            </div>
          </div>
          <div className={styles['card4']}>
            <div className={styles['card-heading1']}>
              <span
                className={` ${styles['type1']} ${projectStyles['anchor']} `}
              >
                medium
              </span>
              <span className={projectStyles['section-heading']}>Complex</span>
            </div>
            <div className={styles['card-content1']}>
              <div className={styles['container09']}>
                <span className={projectStyles['card-text']}>Feature one</span>
                <span
                  className={` ${styles['text23']} ${projectStyles['card-text']} `}
                >
                  TBD
                </span>
              </div>
              <div className={styles['container10']}>
                <span className={projectStyles['card-text']}>Feature two</span>
                <span
                  className={` ${styles['text25']} ${projectStyles['card-text']} `}
                >
                  TBD
                </span>
              </div>
              <div className={styles['container11']}>
                <span className={projectStyles['card-text']}>
                  Feature three
                </span>
                <span
                  className={` ${styles['text27']} ${projectStyles['card-text']} `}
                >
                  UNLIMITED
                </span>
              </div>
              <div className={styles['container12']}>
                <span className={projectStyles['card-text']}>Feature four</span>
                <span
                  className={` ${styles['text29']} ${projectStyles['card-text']} `}
                >
                  UNLIMITED
                </span>
              </div>
              <button
                className={` ${styles['button1']} ${projectStyles['anchor']} ${projectStyles['button']} `}
              >
                CHOOSE
              </button>
            </div>
          </div>
          <div className={styles['card5']}>
            <div className={styles['card-heading2']}>
              <span
                className={` ${styles['type2']} ${projectStyles['anchor']} `}
              >
                Premium
              </span>
              <span className={projectStyles['section-heading']}>
                Professional
              </span>
            </div>
            <div className={styles['card-content2']}>
              <div className={styles['container13']}>
                <span className={projectStyles['card-text']}>Feature one</span>
                <span
                  className={` ${styles['text31']} ${projectStyles['card-text']} `}
                >
                  TBD
                </span>
              </div>
              <div className={styles['container14']}>
                <span className={projectStyles['card-text']}>Feature two</span>
                <span
                  className={` ${styles['text33']} ${projectStyles['card-text']} `}
                >
                  TBD
                </span>
              </div>
              <div className={styles['container15']}>
                <span className={projectStyles['card-text']}>
                  Feature three
                </span>
                <span
                  className={` ${styles['text35']} ${projectStyles['card-text']} `}
                >
                  UNLIMITED
                </span>
              </div>
              <div className={styles['container16']}>
                <span className={projectStyles['card-text']}>Feature four</span>
                <span
                  className={` ${styles['text37']} ${projectStyles['card-text']} `}
                >
                  UNLIMITED
                </span>
              </div>
              <button
                className={` ${styles['button2']} ${projectStyles['anchor']} ${projectStyles['button']} `}
              >
                CHOOSE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['section-separator3']}></div>
      <div className={styles['section-separator4']}></div>
      <div className={styles['faqs']}>
        <h2
          className={` ${styles['text38']} ${projectStyles['section-heading']} `}
        >
          Check the most common questions
        </h2>
        <div className={styles['content-container4']}>
          <div className={styles['faq']}>
            <div className={styles['question-container']}>
              <span className={styles['question']}>
                Here you would write a frequently asked question?
              </span>
            </div>
            <div className={styles['answer-container']}>
              <span
                className={` ${styles['answer']} ${projectStyles['card-text']} `}
              >
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet. Here you would give the answer. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Praesent libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla
                quis sem at nibh elementum imperdiet.
              </span>
              <span className={projectStyles['card-text']}>
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
            </div>
          </div>
          <div className={styles['faq1']}>
            <div className={styles['question-container1']}>
              <span className={styles['question1']}>
                Here you would write a frequently asked question?
              </span>
            </div>
            <div className={styles['answer-container1']}>
              <span
                className={` ${styles['answer2']} ${projectStyles['card-text']} `}
              >
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
              <span className={projectStyles['card-text']}>
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
              </span>
            </div>
          </div>
          <div className={styles['faq2']}>
            <div className={styles['question-container2']}>
              <span className={styles['question2']}>
                Here you would write a frequently asked question?
              </span>
            </div>
            <div className={styles['answer-container2']}>
              <span
                className={` ${styles['answer4']} ${projectStyles['card-text']} `}
              >
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
              <span className={projectStyles['card-text']}>
                Here you would give the answer. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh
                elementum imperdiet.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['section-separator5']}></div>
      <div className={styles['subscribe']}>
        <img
          alt="image"
          src="/playground_assets/default-img.svg"
          className={styles['image1']}
        />
        <div className={styles['container17']}>
          <div className={styles['heading-container4']}>
            <h1
              className={` ${styles['text39']} ${projectStyles['section-heading']} `}
            >
              Get our guide to crafting digital products
            </h1>
            <span
              className={` ${projectStyles['section-text']} ${styles['text40']} `}
            >
              We will send you our monthly freebies on your email. We will not
              share your email address or use it for promotional goals.
            </span>
          </div>
          <input
            type="text"
            required="true"
            placeholder="E-mail"
            className={` ${styles['textinput']} ${projectStyles['section-text']} ${projectStyles['input']} `}
          />
          <button
            className={` ${styles['button3']} ${projectStyles['anchor']} ${projectStyles['button']} `}
          >
            SEND
          </button>
        </div>
      </div>
      <div className={styles['section-separator6']}></div>
      <div className={styles['footer-container']}>
        <div className={styles['footer']}>
          <div className={styles['social-links']}>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className={styles['icon22']}
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className={styles['icon24']}
            >
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className={styles['icon26']}
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
          <div className={styles['copyright-container']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon28']}>
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className={projectStyles['anchor']}>Copyright, 2021</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
