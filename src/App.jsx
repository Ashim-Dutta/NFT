import HeroSection from './Components/HeroSection'
import Section_2 from './Components/Section_2'
import DecayCard from './Components/DecayCard'
import Section_3 from './Components/Section_3.jsx'
import SplitText from './Components/SplitText'
import ScrollVelocity from './Components/ScrollVelocity'
import ImageTrail from './Components/ImageTrail.jsx'
import 'remixicon/fonts/remixicon.css'
import TrueFocus from './Components/TrueFocus.jsx'
import ProfileCard from './Components/ProfileCard.jsx'
import CardSwap, { Card } from './Components/CardSwap.jsx'
import Footer from './Components/Footer.jsx'
import CountUp from './Components/CountUp.jsx'
import InfiniteScroll from './Components/InfiniteScroll.jsx'
import RotatingText from './Components/RotatingText.jsx'
import FallingText from './Components/FallingText.jsx'
import Membership from './Components/Membership.jsx'
import HeroCards from './Components/HeroCards.jsx'
const App = () => {



  const items = [
    { content: "Absolutely love the platform! 🎨 It helped me showcase my art beautifully." },
    { content: <p>The interface is smooth and intuitive 🧠✨ — perfect for creatives like me!</p> },
    { content: "Customer support was fast and friendly 🙌. Got my issue solved within minutes." },
    { content: <p>Never thought selling digital art could be this easy 💻🖼️. Super impressed!</p> },
    { content: "This site gave my work the audience it deserves 🚀. Sales are up!" },
    { content: <p>I love how clean and minimal the design is 🧼❤️. Very aesthetic!</p> },
    { content: "Best platform for independent artists, hands down 🎯👩‍🎨." },
    { content: <p>The 'Create Strategy' tool helped me stay organized and motivated 📋🔥.</p> },
    { content: "Shipping and delivery were smooth 🚚💨. My buyers are happy!" },
    { content: <p>My portfolio looks stunning here 😍. Feels super professional!</p> },
    { content: "Got discovered by a major brand through this site 🏆. Life-changing!" },
    { content: <p>Love the customization features 🎛️. My page feels truly mine.</p> },
    { content: "So happy I joined this platform 🤩. It’s a game-changer!" },
    { content: <p>My engagement is way up since joining 📈💬. Highly recommend!</p> },
  ];
  
  

  return (
    <div className='bg-gradient-to-br from-white to-gray-100 relative min-h-screen p-10 overflow-hidden'>
      <HeroSection />

      <div className='w-full flex justify-evenly items-center '>
      <Section_2 />
      <DecayCard />
      </div>
      <Section_3/>
      <SplitText
      text="Trusted by the best."
      delay={150}
      animateBy="words"
      direction="bottom"
      className="text-2xl mt-10 text-center font-bold text-gray-800 text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
      />
      
      <SplitText
      text="our growth hackers are experts in their field."
      delay={150}
      animateBy="words"
      direction="bottom"
      className="text-xs mb-8 text-center font-bold text-gray-800 md:text-xl lg:text-xl xl:text-md mt-5 mb-[10rem]"
      />
      
      <ScrollVelocity
         texts={['Inspire -', '- Boldly']} 
        className="custom-scroll-text  opacity-40"
      />


      <div className='h-[80vh] w-full flex flex-col justify-center items-center'>
        

        <h2 className='text-center absolute mt-auto text-[2.5rem]  '>Wheather you're artist 🧑‍🎨 or not want to sell your work <br/> / or buy seekung <span className='text-green-500'>unique </span> pieces <span className='opacity-30'> connects <br/> you to world of creativity commerce.</span> <i className="ri-shopping-cart-line text-6xl text-orange-400"></i></h2>

        <ImageTrail
    items={[
      'https://i.pinimg.com/736x/b7/12/3a/b7123a9f661c128ce19175499f977b04.jpg',
      'https://i.pinimg.com/736x/dd/8b/73/dd8b73acec3d0a23ccce13267fadc412.jpg',
      'https://i.pinimg.com/736x/86/72/90/8672904390706b9f6205e8c5a5ea4610.jpg',
      'https://i.pinimg.com/736x/dc/3e/3f/dc3e3ff8e2d6c23d3f7e7369205f6c32.jpg',
      'https://i.pinimg.com/736x/be/d9/9d/bed99d30ca464a89924626656ca50db2.jpg',
      'https://i.pinimg.com/736x/c0/ba/6e/c0ba6ec71fa44ce3ddb87ece42f468a6.jpg',
      'https://i.pinimg.com/736x/97/73/25/977325a85efc3df0e73b79dbc0e65cda.jpg',
      'https://i.pinimg.com/736x/9e/07/15/9e0715f07462e8e38c9a3f169b95d061.jpg',
      // ...
    ]}
    variant={1}
          />
      </div>


      <div className='flex items-center justify-between mb-10 relative h-[100vh] overflow-hidden'>

        <div className='flex flex-col items-center  justify-center w-[50%]'>
        <SplitText
        text="Our vision for any art Technology."
      delay={150}
      animateBy="words"
      direction="bottom"
      className=" mt-30 text-center justify-center font-bold text-gray-800 font-[unbounded] text-3xl md:text-4xl lg:text-5xl xl:text-5xl"
      />

<SplitText
      text="Every piece of art tells a story, and we are here to help you tell yours. Our platform is designed to connect artists with art enthusiasts, providing a space where creativity meets commerce. Whether you're an artist looking to showcase your work or a collector seeking unique pieces, we are here to bridge the gap."
      delay={10}
      animateBy="words"
      direction="bottom"
      className=" mb-8 text-center md:text-xl lg:text-xl xl:text-md mt-5 mb-[10rem]"
      />
        </div>
        
        <div className='absolute right-20 top-[10%] w-[40%] h-[60vh]'>
          
        <CardSwap
    cardDistance={60}
    verticalDistance={70}
    delay={2000}
    pauseOnHover={false}
  >
            <Card>
              <h1 className='text-white text-3xl uppercase'>yuji_itadori</h1>
      <img src="https://i.pinimg.com/736x/8d/e6/66/8de66630423ad3f8352ace451684b097.jpg" alt="Card 1" className="w-full h-full object-cover rounded-lg" />
    </Card>
            <Card>
              <h1 className='text-white text-3xl uppercase'>Gojo</h1>
      <img src="https://i.pinimg.com/736x/20/c5/70/20c570d5df79447cfb22b378f166ae07.jpg" alt="Card 2" className="w-full h-full object-cover rounded-lg" />
    </Card>
            <Card>
            <h1 className='text-white text-3xl uppercase'>Monkey D. Luffy</h1>
      <img src="https://i.pinimg.com/736x/9a/77/cf/9a77cf67f7bb6d74080f35626138b596.jpg" alt="Card 3" className="w-full h-full object-cover rounded-lg" />
    </Card>
  </CardSwap>

        </div>


       
      </div>

      <div className='h-100vh w-full  flex items-center justify-evenly flex-wrap mt-10 mb-10'>
        <div className='flwex flex-col '>
        <CountUp
            from={0}
             to={100000}
            separator=","
            direction="up"
           duration={1}
          className="count-up-text text-center flex justify-center text-5xl mb-5 font-semibold"
/>
        <SplitText
        text="Happy Customers"
      delay={150}
      animateBy="words"
      direction="bottom"
      className="  text-center justify-center font-bold text-gray-800 font-[unbounded] text-3xl md:text-4xl lg:text-5xl xl:text-4xl"
      />
        </div>

        <div>
        <CountUp
            from={0}
             to={5000}
            separator=","
            direction="up"
           duration={1}
          className="count-up-text text-center flex justify-center text-5xl mb-5 font-semibold"
/>
        <SplitText
        text="Sold NFTs"
      delay={150}
      animateBy="words"
      direction="bottom"
      className="text-center justify-center font-bold text-gray-800 font-[unbounded] text-3xl md:text-4xl lg:text-5xl xl:text-4xl"
      />
        </div>

        <div>
        <CountUp
            from={0}
             to={200}
            separator=","
            direction="up"
           duration={1}
          className="count-up-text text-center flex justify-center text-5xl mb-5 font-semibold"
/>
        <SplitText
        text="Partners"
      delay={150}
      animateBy="words"
      direction="bottom"
      className=" text-center justify-center font-bold text-gray-800 font-[unbounded] text-3xl md:text-4xl lg:text-5xl xl:text-4xl"
      />
        </div>
      </div>

      <div className='flex flex-col items-center justify-center mb-10 mt-[15rem]'>
        
        <RotatingText
          texts={['Creative 🧠', 'Unique 💫', 'Boldly 💪', 'Cool! 😎']}
  mainClassName="px-2 mb-10 sm:px-2 md:px-3 bg-[#5227FF] text-white font-bold text-7xl overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
     />

      <SplitText
        text="Every piece of art 🎨 tells a story 🧾 "
      delay={150}
      animateBy="words"
      direction="bottom"
      className=" w-[60%] text-center justify-center font-semibold text-gray-800 font-[unbounded] text-3xl md:text-4xl lg:text-5xl xl:text-7xl"
      />
      </div>


      <div className='mt-20'>
        <h1 className='text-4xl uppercase '>reviews</h1>
        <InfiniteScroll
           items={items}
    isTilted={true}
    tiltDirection='left'
    autoplay={true}
    autoplaySpeed={2}
    autoplayDirection="up"
    pauseOnHover={true}
        />
      </div>

      <div>
        <Membership/>
      </div>

      
      <div className='h-[50vh] relative bg-gradient-to-r from-[#d4fc79] to-[#96e6a1] mt-20 rounded-xl mx-auto flex items-center justify-center'>
        <h1 className='text-8xl absolute z-[0] font-bold opacity-50 outlined-text'>Creativity</h1>
      <FallingText
  text={`This isn’t just a gallery 🖼️. It’s a living Canvas 🎨 where every scroll reveals a creator 🧑‍🎨, every frame breathes Expression. We don’t just show images — we unfold Stories 🧾, moments, and emotion. Discover the unseen. Feel the scroll. Experience art in motion like never before — bold, immersive, unforgettable`}
  highlightWords={["Canvas", "Expression", "Stories", "Discover", "Experience","motion"]}
  highlightClass="highlighted"
  trigger="hover"
  backgroundColor="transparent"
  wireframes={false}
  gravity={0.6}
  fontSize="2rem"
  mouseConstraintStiffness={0.9}
/>
      </div>
      
      <HeroCards/>


      <div className='flex items-center justify-evenly mt-30  mb-10'>
        <TrueFocus 
          sentence="Meet The Developer"
          manualMode={false}
          blurAmount={5}
          borderColor="green"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
        
        <ProfileCard
          name="Ashim Dutta"
  title="Frontend Developer"
  handle="ashimdutta001"
  status="Online"
  contactText="Contact Me"
  avatarUrl="../profile-pic.png"
  showUserInfo={true}
  enableTilt={true}
  onContactClick={() => console.log('Contact clicked')}
        />
      </div>

      <Footer/>


    </div>
  )
}

export default App


//  className='text-center text-3xl mb-5 font-thin'