import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div id="contact" className="py-16 md:py-14 md:pt-16 pt-8 lg:py-20 lg:pt-2">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center 
        md:text-left relative overflow-hidden z-20"> 
          <div className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col gap-8 md:flex-row md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to bring your next project to life? Let's connect and discuss how i can help you achieve your goals.
              </p>
              <p className="mt-4 text-base">Ravi Pandey<br/>(Software Developer)<br/></p> {/* Add your personal details here */}
            </div>
            <div>
              <a href="https://www.linkedin.com/in/ravi-pandey1227/" target="_blank" rel="noopener noreferrer">
                <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 ">
                  <span className="font-semibold">Contact Me</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
