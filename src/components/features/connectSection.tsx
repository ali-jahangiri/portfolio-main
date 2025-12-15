import Image from 'next/image';
import Footer from './footer';

const ConnectSection = () => {
  return (
    <footer id="connect" className="min-h-screen flex flex-col items-center justify-end px-4 sm:px-6">
      {/* PRIMARY CTA SECTION */}
      <div className="flex flex-col-reverse items-center justify-center rounded-xl md:max-w-1/2 min-h-[50vh] mb-auto mt-auto w-full">
        <div className="m-6 sm:m-8 md:m-10 text-center md:text-left">
          <div className="flex items-center relative justify-center md:justify-start">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 sm:mb-3">Slide Into My Inbox</h3>
            <Image
              className="hidden md:block absolute -top-35 -left-40 -rotate-35"
              src="/objects/contact-me.png"
              width={200}
              height={200}
              alt="object-contact"
            />
          </div>
          <p className="text-sm sm:text-base md:text-lg text-neutral-600 md:text-neutral-700 leading-relaxed mt-3 sm:mt-4">
            {`"`}Let's connect! If you're into tech, creativity, or collaboration, I'd love to hear from you.{` "`}
          </p>
        </div>
        <a href="mailto:jahangiri.dev@gmail.com" className="mb-6 sm:mb-8 md:mb-0">
          <button className="shrink-0 button w-20 h-20 sm:w-24 sm:h-24 md:w-[100px] md:h-[100px]" id="connectBtn">
            <p className="button__text">
              {['S', 'a', 'y', ' ', 'H', 'i', ' ', 'D', 'o', 'n', "'", 't', ' ', 'b', 'e', ' ', 's', 'h', 'y'].map(
                (char, index) => (
                  <span key={index} style={{ transform: `rotate(calc(19deg * ${index}))` }}>
                    {char}
                  </span>
                )
              )}
            </p>

            <div className="button__circle">
              <svg
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon"
                width="14"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                ></path>
              </svg>

              <svg
                viewBox="0 0 14 15"
                fill="none"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon button__icon--copy"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
        </a>
      </div>
      <Footer />
    </footer>
  );
};

export default ConnectSection;
