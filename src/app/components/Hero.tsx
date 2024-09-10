import { MotionDiv, MotionH1, MotionP } from '../lib/motion'
import { CvBtn }  from './CvBtn'
import { EmailBtn } from './EmailBtn'

const containerStyle = {
  display: 'flex',
  gap: '10px', // Adjust space between buttons
  alignItems: 'center'
};

export const Hero = () => {
  return (
    <section id="home">
      <MotionDiv className="mx-auto max-w-5xl">
        <div className="flex h-screen flex-col items-center justify-center gap-3">
          <MotionH1
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.7,
              duration: 0.3
            }}
            className="text-center text-8xl font-bold md:text-7xl sm:text-5xl"
          >
            Kalyan Gopalam<span className="text-target">.</span>
          </MotionH1>
          <MotionP
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 1,
              duration: 0.3
            }}
            className="text-center text-4xl sm:text-3xl"
          >
            I'm a {' '}
            <span className="font-bold text-target">Security Researcher</span>
          </MotionP>
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1.3, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 1.2,
              duration: 0.3
            }}
            className="mt-4"
          >
            <div style={containerStyle}>
            <CvBtn />
            <EmailBtn />
            </div>
          </MotionDiv>
        </div>
      </MotionDiv>
    </section>
  )
}
