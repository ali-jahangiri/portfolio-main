import Image from 'next/image';

const Footer = () => (
  <footer className="flex items-center justify-between rounded-xl p-3 px-7 bg-gray-100 w-4/5 mb-10 mx-auto">
    <div>
      <a className="text-2xl" href="mailto:jahangiri.dev@gmail.com">
        jahangiri.dev@gmail.com
      </a>
    </div>

    <div className="flex gap-x-3 items-center">
      <a href="https://www.instagram.com/ajadvgo" target="_blank">
        <Image width={60} height={60} src="/insta.png" alt="Instagram" />
      </a>
      <a href="https://www.linkedin.com/in/jahangiridev/" target="_blank">
        <Image width={60} height={60} src="/linkedin.png" alt="LinkedIn" />
      </a>
    </div>
  </footer>
);

export default Footer;
