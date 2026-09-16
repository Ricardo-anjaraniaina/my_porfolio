function Navbar() {
    return(
        <>
            <aside className="top-0 z-10 left-0 fixed w-12 h-screen flex flex-col gap-10 items-center py-2 bg-(--couleur-une-sombre)">
                <div className="flex items-center justify-center w-[80%] tracking-widest h-auto bg-(--couleur-une) rounded-sm">
                    <span className="text-(--couleur-quatre) font-bold text-xl">R<span className="text-white">.</span></span>
                </div>
                <div className="flex flex-col gap-8 items-center">
                    {["ABOUT", "EXPERIENCE", "PROJECTS", "CONTACT"].map((items) => (
                        <a 
                            key={items}
                            href={`#${items.toLowerCase()}`}
                            className="text-sm tracking-wider font-medium py-2 [writing-mode:vertical-lr] rotate-180"
                        >
                            {items}
                        </a>
                    ))}
                </div>
            </aside>
        </>
    )   
}

export default Navbar;