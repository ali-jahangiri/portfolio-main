import Image from "next/image"


const ConnectSection = () => {
    return (
        <footer id="connect" className='h-screen flex flex-col items-center justify-end '>

            {/* PRIMARY CTA SECTION */}
            <div className="flex items-center justify-center rounded-xl max-w-1/2 h-[50vh] mb-auto mt-auto">
                <div className="m-10">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta beatae nisi minus quas libero nesciunt et autem deserunt? Maxime atque ex eos pariatur nemo obcaecati consequuntur rem reiciendis magnam quos.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta beatae nisi minus quas libero nesciunt et autem deserunt? Maxime atque ex eos pariatur nemo obcaecati consequuntur rem reiciendis magnam quos.
                </div>
                <button className="shrink-0 button" id="connectBtn">
                    <p className="button__text">
                        <span style={{ transform: `rotate(calc(19deg * ${0}))` }}>S</span>
                        <span style={{ transform: `rotate(calc(19deg * ${1}))` }}>a</span>
                        <span style={{ transform: `rotate(calc(19deg * ${2}))` }}>y</span>
                        {/* <span style={{ transform: `rotate(calc(19deg * ${3}))` }}> </span> */}
                        <span style={{ transform: `rotate(calc(19deg * ${4}))` }}>H</span>
                        <span style={{ transform: `rotate(calc(19deg * ${5}))` }}>i</span>
                        <span style={{ transform: `rotate(calc(19deg * ${7}))` }}>D</span>
                        <span style={{ transform: `rotate(calc(19deg * ${8}))` }}>o</span>
                        <span style={{ transform: `rotate(calc(19deg * ${9}))` }}>n</span>
                        <span style={{ transform: `rotate(calc(19deg * ${10}))` }}>’</span>
                        <span style={{ transform: `rotate(calc(19deg * ${11}))` }}>t</span>
                        <span style={{ transform: `rotate(calc(19deg * ${12}))` }}> </span>
                        <span style={{ transform: `rotate(calc(19deg * ${13}))` }}>b</span>
                        <span style={{ transform: `rotate(calc(19deg * ${14}))` }}>e</span>
                        <span style={{ transform: `rotate(calc(19deg * ${15}))` }}> </span>
                        <span style={{ transform: `rotate(calc(19deg * ${16}))` }}>s</span>
                        <span style={{ transform: `rotate(calc(19deg * ${17}))` }}>h</span>
                        <span style={{ transform: `rotate(calc(19deg * ${18}))` }}>y</span>
                        <span style={{ transform: `rotate(calc(19deg * ${19}))` }}></span>
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
            </div>
            {/* SOCIAL MEDIA SECTION */}
            <div className='flex items-center justify-between rounded-xl p-3 px-7 bg-gray-100 w-4/5 mb-10 mx-auto'>
                <div>
                    <a className='text-2xl' href="mailto:jahangiri.dev@gmail.com">
                        jahangiri.dev@gmail.com
                    </a>
                </div>

                <div className="flex gap-x-3 items-center">
                    <a href="">
                        <Image width={60} height={60} src="/insta.png" alt="Instagram" />
                    </a>
                    <a href="">
                        <Image width={60} height={60} src="/linkedin.png" alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default ConnectSection
