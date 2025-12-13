import type { FunctionComponent } from "react"
import SidebarButton from "../ui/SidebarButton"
import ProfileCard from "../ui/ProfileCard"
import QuitButton from "../ui/QuitButton"
import { Home, Users, FileText, User, Info } from "lucide-react"
import LogoIcon from "../ui/LogoIcon"

const Sidebar: FunctionComponent = () => {
  return (

    <aside className='h-screen w-[18%] px-5 py-10 border-r border-gray-200 dark:bg-gray-900 dark:text-white overflow-hidden self-start
    flex justify-between flex-col'>
      <div className="flex justify-start items-center">
        <LogoIcon size={80}/>
        <h1 className="text-2xl font-semibold">OnSecurity</h1>
      </div>
      <div className="flex flex-col justify-start items-start  gap-4">
        <SidebarButton text="Página Inicial" path="/" icon={<Home className="w-8 h-8 " />} />
        <SidebarButton text="Comunidade" path="/comunidade" icon={<Users className="w-8 h-8" />} />
        <SidebarButton text="Artigos" path="/artigos" icon={<FileText className="w-8 h-8" />} />
        <SidebarButton text="Sobre Nós" path="/sobre" icon={<Info className="w-8 h-8" />} />
      </div>
      <div className="flex flex-col gap-6">
        <ProfileCard username="Bernardo"/>
        
      </div>
    </aside>
  )
}

export default Sidebar
