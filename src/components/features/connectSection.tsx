import Image from 'next/image';
import Footer from './footer';

const ConnectSection = () => {
  return (
    <footer id="connect" className="h-screen flex flex-col items-center justify-end ">
      {/* PRIMARY CTA SECTION */}
      <div className="flex flex-col-reverse items-center justify-center rounded-xl md:max-w-1/2 h-[50vh] mb-auto mt-auto">
        <div className="m-10">
          <div className="flex items-center relative">
            <h3 className="text-4xl font-black mb-2">Slide Into My Inbox</h3>
            <Image
              className="absolute -top-35 -left-40 -rotate-35"
              src="/objects/contact-me.png"
              width={200}
              height={200}
              alt="object-contact"
            />
          </div>
          {`"`}Let’s connect! If you’re into tech, creativity, or collaboration, I’d love to hear from you.{` "`}
        </div>
        <a href="mailto:jahangiri.dev@gmail.com">
          <button className="shrink-0 button" id="connectBtn">
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
