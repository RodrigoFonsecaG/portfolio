import { motion } from 'framer-motion'
import { Suspense, useState } from 'react'

import { fadeIn } from '../animations/variant'
import ParticlesContainer from '../components/ParticlesContainer'
import Avatar from '../components/Avatar'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { TypeAnimation } from 'react-type-animation'
import { FaReact, FaNode, FaLaravel } from 'react-icons/fa'
import { BiLogoTypescript, BiLogoJavascript, BiLogoNodejs } from 'react-icons/bi'


const Home = () => {
  const [textColor, setTextColor] = useState('white')
  const [icon, setIcon] = useState(<BiLogoJavascript size={70} />)

  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 -mb-1"
          >
            Lorem ipsum dolor <br />{' '}
            <div
              className="flex gap-2 items-center xl:justify-start justify-center"
              style={{
                color: textColor,
              }}
            >
              <TypeAnimation
                className="h1 mb-0"
                sequence={[
                  '',
                  () => setTextColor('#F0D53C'),
                  () => setIcon(<BiLogoJavascript size={70} className="xl:w-24 w-12" />),
                  'JavaScript',
                  1000,
                  '',
                  () => setTextColor('#5ED3F3'),
                  () => setIcon(<FaReact size={70} className="xl:w-24 w-12" />),
                  'React',
                  1000,
                  '',
                  () => setTextColor('#4AA559'),
                  () => setIcon(<BiLogoNodejs size={70} className="xl:w-24 w-12" />),
                  'NodeJS',
                  1000,
                  '',
                  () => setTextColor('#F72B1E'),
                  () => setIcon(<FaLaravel size={70} className="xl:w-24 w-12" />),
                  'Laravel',
                  <FaLaravel />,
                  1000,
                  '',
                  () => setTextColor('#2F74C0'),
                  () => setIcon(<BiLogoTypescript size={70} className="xl:w-24 w-12" />),
                  'TypeScript',
                  1000,
                  '',
                ]}
                repeat={Infinity}
              />

              {icon}
            </div>
          </motion.h1>

          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mt-10"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            provident culpa in expedita dicta, modi magnam eaque harum earum.
            Quia?
          </motion.p>
        </div>
      </div>

      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>

        <ParticlesContainer />

        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute right-5 -bottom-80 xl:bottom-0 xl:right-[10%] xl:top-[15%]"
        >
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#57BFDE"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Avatar />
        </motion.div>
      </div>
    </div>
  )
}

export default Home
