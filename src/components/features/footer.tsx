import Image from 'next/image';

const Footer = () => (
  <footer className="flex flex-wrap-reverse items-center justify-between rounded-xl p-3 px-7 bg-gray-100 w-4/5 mb-10 mx-auto">
    <div>
      <a className="md:text-2xl text-xl" href="mailto:jahangiri.dev@gmail.com">
        jahangiri.dev@gmail.com
      </a>
    </div>

    <div className="flex shrink-0 gap-x-3 items-center">
      {/* <a href="https://www.instagram.com/ajadvgo" target="_blank">
        <Image width={60} height={60} src="/insta.png" alt="Instagram" />
      </a> */}
      <a href="https://www.linkedin.com/in/jahangiridev/" target="_blank">
        <Image
          width={60}
          height={60}
          src="/linkedin.png"
          alt="LinkedIn"
          className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 md:mb-0 mb-5"
        />
      </a>
    </div>
  </footer>
);

export default Footer;
