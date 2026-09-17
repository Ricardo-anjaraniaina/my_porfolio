export default function Service() {
    return (
        <section className="w-full bg-(--couleur-deux) rounded-3xl">
            <div className="w-full h-full p-8 flex flex-col gap-6">
                <div className="w-full flex justify-between items-center">
                    <h1 className="text-5xl text-(--couleur-quatre)">What can we build together ?</h1>
                    <p className="text-3xl">From a simple idea to a digital product, <br />let's make it happen.</p>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="md:sticky md:top-0 md:h-screen ">
                        <div className="h-full flex flex-col justify-center p-10">

                            <h2 style={{fontFamily: "var(--police-p)"}} className="text-2xl">01   Web Development</h2>
                            <h2 style={{fontFamily: "var(--police-p)"}} className="text-2xl">02   Backend Development</h2>
                            <h2 style={{fontFamily: "var(--police-p)"}} className="text-2xl">03   Implementation</h2>
                            <h2 style={{fontFamily: "var(--police-p)"}} className="text-2xl">04   API Development</h2>

                        </div>
                    </div>
                    <div>
                        <div className="h-screen flex items-center">
                            <div>
                                <h3>web development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora maxime et quasi assumenda, doloremque minima iste porro vero veritatis corporis suscipit perspiciatis asperiores? Iusto reprehenderit sapiente doloribus nulla accusamus.</p>
                            </div>
                        </div>
                        <div className="h-screen flex items-center">
                            <div>
                                <h3>web development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora maxime et quasi assumenda, doloremque minima iste porro vero veritatis corporis suscipit perspiciatis asperiores? Iusto reprehenderit sapiente doloribus nulla accusamus.</p>
                            </div>
                        </div>
                        <div className="h-screen flex items-center">
                            <div>
                                <h3>web development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora maxime et quasi assumenda, doloremque minima iste porro vero veritatis corporis suscipit perspiciatis asperiores? Iusto reprehenderit sapiente doloribus nulla accusamus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}