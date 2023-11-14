import React,{useRef} from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight } from "react-icons/bs";
import me from "../assets/logo.png";
import { ScrollIcon } from "../components";

const Home = () => {

  const clientCount=useRef(null);
  const projectCount=useRef(null);

  const animationClientCount=(key)=>{
    animate(0,key==="client"?20:100,{
      duration:1,
      onUpdate:(v)=>(clientCount.current.textContent=v.toFixed()),
    });
  }
  const animationProjectCount=()=>{
    animate(0,50,{
      duration:1,
      onUpdate:(v)=>(projectCount.current.textContent=v.toFixed()),
    });
  }
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
 
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi,This is <br /> Pratik Guha
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A Developer", "A Video Editor", "A Content Creator "],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:pratikguha2019@gmail.com">Hire me</a>
            <a href="#about">
              Projects
              <BsArrowUpRight />
            </a>
          </div>
          <article>
            <p>
              +<motion.span whileInView={animationClientCount}
              ref={clientCount}
              >
                20
               </motion.span>
            </p>
            <span>Group Members</span>
          </article>
          <aside>
            <article>
              <p>
                +<motion.span whileInView={animationProjectCount} ref={projectCount}>
                  50
                  </motion.span>
              </p>
              <span>Projects Made</span>
            </article>
            <article data-special>
              <p>Contact</p>
              <span>pratikguha2019@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Pratik Guha" />
      </section>
      <ScrollIcon/>
    </div>
  );
};

export default Home;
