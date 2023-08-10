import React from 'react';
import Sidebar from '../components/organisms/SideBar';
import { SidebarProps } from '../interfaces/NavigationIntefaces';
import { userData } from '../data/UserData';
import { menuItems } from '../data/MenuData';

const Home: React.FC = () => {
  const sidebar: SidebarProps = {
    user: {
      name: "Mauricio",
      avatarUrl: "",
    },
    menuItems: menuItems,
  }

  return <>
    <Sidebar user={sidebar.user} menuItems={sidebar.menuItems} />
    <h2>Home Page!</h2>
  </>;
};

export default Home;