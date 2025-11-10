import Image from "next/image"


const ConnectSection = () => {
    return (
        <footer id="connect" className='h-screen flex flex-col items-center justify-end'>
            {/* PRIMARY CTA SECTION */}


            {/* SOCIAL MEDIA SECTION */}
            <div className='flex items-center justify-between rounded-xl p-3 px-4 bg-gray-200 w-4/5 mb-10 mx-auto'>
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
