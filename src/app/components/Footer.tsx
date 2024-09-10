import { MotionDiv } from '../lib/motion'

import { Download, Github, Linkedin } from 'lucide-react'

const iconSize = { width: 28, height: 28 }

const socialData = [
  { link: 'https://github.com/GKDEADDEVIL', icon: <Github /> },
  { link: 'https://linkedin.com/in/gk-eh', icon: <Linkedin /> },
  {
    link: 'https://github.com/GKDEADDEVIL/GKDEADDEVIL/blob/main/Kalyan-Gopalam%20Resume.pdf',
    icon: <Download />
  },
  {
    link: 'https://app.hackthebox.com/profile/418277',
    icon: (
      <img
        src="https://www.svgrepo.com/show/330606/hackthebox.svg"
        alt="HackTheBox"
        style={{ width: '24px', height: '24px'}}
      />)
  }
]

export const Footer = () => {
  return (
    <footer className="px-10 sm:px-6">
      <MotionDiv
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
        className="mx-auto flex w-full max-w-5xl items-center justify-between border-t py-8 text-lg sm:flex-col sm:gap-y-6"
      >
        <p>© 2023 / Kalyan Gopalam</p>
        <div className="flex items-center gap-4">
          {socialData.map((social, index) => (
            <a
              key={index}
              className="transition hover:-translate-y-1 hover:text-target"
              target="_blank"
              href={social.link}
              rel="noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </MotionDiv>
    </footer>
  )
}
