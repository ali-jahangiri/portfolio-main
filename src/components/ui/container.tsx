import { ReactNode } from 'react'

interface Props {
    children: ReactNode;
    className?: string
}

const Container = (props: Props) => (
    <div className={`mx-auto w-[98%] ${props.className || ""}`}>
        {props.children}
    </div>
)

export default Container
