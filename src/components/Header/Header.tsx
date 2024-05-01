import React, {useMemo, useState} from 'react';
import * as styles from "./Header.module.scss";
import PowerOff from '../icons/power-off.inline.svg';
import User from '../icons/user.inline.svg';
import Button, {buttonColor, buttonSize} from "../common/Button/Button";
import {loginInUser, createUser} from "../../services/userServices";
import {deleteUser, getUser, setUser} from "../../services/localStorageServices";
import {googleLogout, useGoogleLogin} from "@react-oauth/google";
import Title from "../common/Title/Title";
import Search from "../Search/Search";
import IconCross from "../icons/bigCross.inline.svg";
import {UserRoles} from "../../constants/userRoles";
import {UserInterface} from "../../types/user.types";

interface HeaderProps {
    onSetSearchText: (obj: SearchTypes) => void,
    onShowSideBar: (flag: boolean) => void,
    onToggleSideBar: () => void,
    isSideBarShow: boolean,
    setPageUser?: (user: UserInterface| null) => void
}

const Header = ({onSetSearchText, onToggleSideBar, setPageUser}: HeaderProps) => {
    const [currentUser, setCurrentUser] = useState(getUser());

    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            const email = await loginInUser(tokenResponse);
            if (!email) return;
            await createUser(email);
            const newUser = {role: UserRoles.ROLE_PROVIDER, email: email}
            setUser(newUser);
            setCurrentUser(newUser);
            if (setPageUser) setPageUser(newUser);
        },
    });
    const logout = () => {
        deleteUser();
        setCurrentUser(null);
        if (setPageUser) setPageUser(null);
        googleLogout();
    };

    return (
        <header className={styles.header}>
            <div className={styles.sideBar}>
                <Title>
                    Logo
                </Title>
            </div>
            <div className={styles.rightPart}>
                <Search onSetSearchText={onSetSearchText}/>
                <div className={styles.burgerWrapper} onClick={onToggleSideBar}>
                    <IconCross/>
                </div>
                <div className={styles.topMenu}>
                    {
                        currentUser
                            ? (
                                <Button onClick={logout} size={buttonSize.header} color={buttonColor.transparent}>
                                    <PowerOff/>
                                    LogOut
                                </Button>
                            )
                            : (
                                <Button onClick={login} size={buttonSize.header} color={buttonColor.transparent}>
                                    <User/>
                                    LogIn
                                </Button>
                            )
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;