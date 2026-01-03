import type { FunctionComponent } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import SidebarButton from "../ui/SidebarButton"
import ProfileCard from "../ui/ProfileCard"
import { Users, FileText, Info, LogIn, Flag, Bell } from "lucide-react"
import LogoIcon from "../ui/LogoIcon"
import ToggleTheme from "../ui/ToggleTheme"

const Sidebar: FunctionComponent = () => {

  const navigateTo = useNavigate();
  const location = useLocation();

  return (

    <aside className='hidden lg:flex sticky top-0  overflow-none h-screen lg:w-[40%] xl:w-[32%] px-5 py-10   bg-white text-blue-500 dark:bg-gray-900 dark:text-white dark:border-gray-800 border-r border-gray-200 shadow-xl overflow-hidden self-start
    justify-between flex-col'>
      <div className="flex justify-start items-center">
        <LogoIcon size={80}/>
        <h1 className="text-2xl font-semibold">SecurityOn</h1>
      </div>
      <div className="flex flex-col justify-start items-start  gap-4">
        <SidebarButton text="Comunidade" route="/community" icon={<Users className="w-8 h-8" />} isSelected={location.pathname === '/community'} />
        <SidebarButton text="Artigos" route="/articles" icon={<FileText className="w-8 h-8" />} isSelected={location.pathname === '/articles'} />
        <SidebarButton text="Denúncias" route="/complaint" icon={<Flag className="w-8 h-8" />} isSelected={location.pathname === '/complaint'} />
        <SidebarButton text="Notificações" route="/notifications" icon={<Bell className="w-8 h-8" />} isSelected={location.pathname === '/notifications'} />
        <SidebarButton text="Sobre Nós" route="/about" icon={<Info className="w-8 h-8" />} isSelected={location.pathname === '/about'} />
                
      </div>
      <ToggleTheme />
      <div className="flex flex-col gap-6">
        <button onClick={() => navigateTo('/login')}
        className="flex justify-start items-center gap-3 w-[70%] xl:w-[60%] 2xl:w-[45%]  p-3 text-white bg-blue-500 border-blue-500 border-2 hover:bg-gray-200 hover:text-blue-500 hover:dark:bg-gray-800 hover:translate-y-[-2px] transition-all duration-300 rounded-md text-xl! font-medium cursor-pointer ">
          <LogIn className="w-8 h-8" />
          <p>Fazer Login</p>
        </button>
        <ProfileCard />      
      </div>
    </aside>
  )
}

export default Sidebar
