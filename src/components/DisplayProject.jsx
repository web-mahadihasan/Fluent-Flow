
import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import { GoArrowLeft, GoArrowRight } from "react-icons/go"

const DisplayProject = () =>  {
  useEffect(() => {
    const slider = new Glide(".glide-03", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/*<!-- Component: Carousel with indicators & controls inside --> */}
      <div className="glide-03 relative w-full bg-[#F5FCFF] rounded-md p-8">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li className="min-h-full">
              <img
                src="https://i.ibb.co.com/Rh3VtwV/project1.png"
                className="m-auto w-full max-w-full h-full rounded-md shadow-md"
              />
            </li>
            <li className="min-h-full">
              <img
                src="https://i.ibb.co.com/Wt6dw9b/project22.png"
                className="m-auto w-full max-w-full h-full rounded-md shadow-md"
              />
            </li>
            <li className="min-h-full">
              <img
                src="https://i.ibb.co.com/5Bhmh4J/project3.png"
                className="m-auto w-full max-w-full h-full rounded-md shadow-md"
              />
            </li>
            <li className="min-h-full">
              <img
                src="https://i.ibb.co.com/tz1Dx8h/project4.png"
                className="m-auto w-full max-w-full h-full rounded-md shadow-md"
              />
            </li>
            <li className="min-h-full">
              <img
                src="https://i.ibb.co.com/3kdzJXr/project5.png"
                className="m-auto w-full max-w-full h-full rounded-md shadow-md"
              />
            </li>
            <li className="min-h-full">
              <img
                src="https://i.ibb.co.com/SmtkZTM/project6.png"
                className="m-auto w-full max-w-full h-full rounded-md shadow-md"
              />
            </li>
          </ul>
        </div>

        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <GoArrowLeft />
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
             <GoArrowRight />
          </button>
        </div>
        

      </div>
      {/*<!-- End Carousel with indicators & controls inside --> */}
    </>
  )
}

export default DisplayProject;