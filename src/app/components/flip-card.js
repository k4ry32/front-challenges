
const FlipCard = ({children}) => {
    
    return (
        <div className="group h-72 w-72 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                    {children[0]}
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-indigo-900/100 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    {children[1]}
                </div>
            </div>
        </div>
    )
}

export default FlipCard;