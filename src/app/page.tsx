import Image from 'next/image';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import avatar from './avatar.jpg';


export default function Home() {
  return (
    <section>
      <h1 className="text-3xl font-serif font-bold">Ariel Rigoni</h1>
      <p className="my-5 max-w-md text-neutral-800 dark:text-neutral-200">
        Hey, I&apos;m Ariel, a Full Stack Developer.
      </p>
      <div className="flex md:flex-row items-center my-5">
        <Image
          className="rounded-full"
          src={avatar}
          alt="avatar"
          width={100}
          priority
        />
        <div className="ml-6 space-y-2 text-neutral-500 dark:text-neutral-400 flex flex-col">
          <a href="https://www.linkedin.com/in/brian-rigoni" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.github.com/abrigoni" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://www.instagram.com/brian.rigoni" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
      <p className="my-5 max-w-xl">
        I&apos;m a Full Stack Developer with around 3 to 4 years of experience, primarily focusing on web projects with React.js and mobile applications with React Native. On my free time I enjoy building side projects and trying new technologies.
      </p>
    </section>
  )
}
