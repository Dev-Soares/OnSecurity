import type { FunctionComponent } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import SidebarButton from "../ui/SidebarButton"
import ProfileCard from "../ui/ProfileCard"
import { Users, FileText, Info, SignIn, Flag } from "@phosphor-icons/react"
import LogoIcon from "../ui/LogoIcon"
import ToggleTheme from "../ui/ToggleTheme"

const Sidebar: FunctionComponent = () => {

  const navigateTo = useNavigate();
  const location = useLocation();

  return (

    <aside className='hidden lg:flex sticky top-0  overflow-none h-screen lg:w-[40%] xl:w-[32%] px-8 py-10   bg-white text-blue-500 dark:bg-gray-950 dark:text-white dark:border-gray-900 border-r border-gray-200  overflow-hidden self-start
    justify-between flex-col'>
      <div className="flex justify-start items-center">
        <LogoIcon size={80}/>
        <h1 className="text-2xl font-medium">SecurityOn</h1>
      </div>
      <div className="flex flex-col justify-start items-start  gap-4">
        <SidebarButton text="Comunidade" route="/community" iconOutline={<Users size={32} weight="regular" />} iconFilled={<Users size={32} weight="fill" />} isSelected={location.pathname === '/community'} />
        <SidebarButton text="Artigos" route="/articles" iconOutline={<FileText size={32} weight="regular" />} iconFilled={<FileText size={32} weight="fill" />} isSelected={location.pathname === '/articles'} />
        <SidebarButton text="Denúncias" route="/complaint" iconOutline={<Flag size={32} weight="regular" />} iconFilled={<Flag size={32} weight="fill" />} isSelected={location.pathname === '/complaint'} />
        <SidebarButton text="Sobre Nós" route="/about" iconOutline={<Info size={32} weight="regular" />} iconFilled={<Info size={32} weight="fill" />} isSelected={location.pathname === '/about'} />
                
      </div>
      <ToggleTheme />
      <div className="flex flex-col gap-6 justify-center items-center w-full">
        <button onClick={() => navigateTo('/login')}
        className="flex justify-center items-center gap-3 w-full font-semibold  p-3 text-white bg-blue-500 border-blue-500 border-2 hover:bg-gray-200 hover:text-blue-500 hover:dark:bg-gray-900 hover:translate-y-[-2px] transition-all duration-300 rounded-4xl text-xl! font-normal cursor-pointer ">
          <SignIn size={32} weight="regular" />
          <p>Fazer Login</p>
        </button>
        <ProfileCard />      
      </div>
    </aside>
  )
}

export default Sidebar
