import type { FunctionComponent } from "react"
import SidebarButton from "../ui/SidebarButton"
import ProfileCard from "../ui/ProfileCard"
import { Home, Users, FileText, Info } from "lucide-react"
import LogoIcon from "../ui/LogoIcon"

const Sidebar: FunctionComponent = () => {
  return (

    <aside className='hidden md:flex h-screen md:w-[35%] lg:w-[25%] xl:w-[18%] px-5 py-10 border-r border-gray-300 bg-gray-200 text-blue-600 dark:bg-gray-950 dark:text-white dark:border-gray-700 overflow-hidden self-start
    justify-between flex-col'>
      <div className="flex justify-start items-center">
        <LogoIcon size={80}/>
        <h1 className="text-2xl font-semibold">OnSecurity</h1>
      </div>
      <div className="flex flex-col justify-start items-start  gap-4">
        <SidebarButton text="Página Inicial" id="home" icon={<Home className="w-8 h-8 " />} />
        <SidebarButton text="Comunidade" id="community" icon={<Users className="w-8 h-8" />} />
        <SidebarButton text="Artigos" id="articles" icon={<FileText className="w-8 h-8" />} />
        <SidebarButton text="Sobre Nós" id="about" icon={<Info className="w-8 h-8" />} />
      </div>
      <div className="flex flex-col gap-6">
        <ProfileCard />      
      </div>
    </aside>
  )
}

export default Sidebar
