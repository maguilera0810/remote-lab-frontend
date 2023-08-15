import React, { ReactNode, useState } from 'react';
import Sidebar from '../../components/organisms/SideBar';
import { menuItems } from '../../data/MenuData';
import Header from '../organisms/Header';

interface GenericTemplateProps {
  children: ReactNode;
}

const GenericTemplate: React.FC<GenericTemplateProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const user: any = {
    name: "Mauricio Aguilera",
    avatarUrl: "https://pbs.twimg.com/profile_images/1501685076488118272/i8DlJPnd_400x400.jpg",
  }

  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return <>
    <Header onToggleSidebar={toggleSideBar} isSidebarOpen={isSidebarOpen} />
    <Sidebar user={user} menuItems={menuItems} isOpen={isSidebarOpen} onToggleSidebar={toggleSideBar}/>
    {children}
  </>;
};

export default GenericTemplate;