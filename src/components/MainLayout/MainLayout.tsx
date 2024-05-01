import React, {useMemo, useState} from 'react';
import * as styles from "./MainLayout.module.scss";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import {GoogleOAuthProvider} from "@react-oauth/google";
import {UserInterface} from "../../types/user.types";

interface MainLayoutProps {
    children: React.ReactNode
    setPageUser?: (user: UserInterface| null) => void
}
export const Context = React.createContext([]);

const MainLayout = ({ children, setPageUser }: MainLayoutProps) => {
    const [searchText, setSearchText] = useState<SearchTypes>({searchText: '', offset: 0});
    const [isSideBarShow, setIsSideBarShow] = useState(false);
    const memoContext = useMemo(() => [searchText, setSearchText],[searchText, setSearchText]);
    const toggleSideBar = () => setIsSideBarShow(!isSideBarShow);
    return (
        <GoogleOAuthProvider clientId={process.env.GATSBY_GOOGLE_ID as string}>
            <Context.Provider value={memoContext as never}>
                <Header
                    onSetSearchText={setSearchText}
                    isSideBarShow={isSideBarShow}
                    onToggleSideBar={toggleSideBar}
                    onShowSideBar={setIsSideBarShow}
                    setPageUser={setPageUser}
                />
                <div className={styles.activeArea}>
                    <SideBar onSideBarShow={setIsSideBarShow} isSideBarShow={isSideBarShow}/>
                    <main className={styles.main}>
                        {children}
                    </main>
                </div>
            </Context.Provider>
        </GoogleOAuthProvider>

    );
};

export default MainLayout;