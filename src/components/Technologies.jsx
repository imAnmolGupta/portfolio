import {RiReactjsLine} from "react-icons/ri"; // React.js
import {FaNodeJs} from "react-icons/fa"; // Node.js
import {SiJavascript} from "react-icons/si"; // JavaScript
import {SiMongodb} from "react-icons/si"; // MongoDB
import {SiTailwindcss} from "react-icons/si"; // Tailwind CSS
import {SiDocker} from "react-icons/si"; // Docker


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">
            Tech
            <span className="text-neutral-500"> Stack</span>
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJavascript className="text-7xl text-yellow-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500"/>
            </div>            
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTailwindcss className="text-7xl text-blue-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-600"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiDocker className="text-7xl text-blue-500"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies