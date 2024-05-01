import React, {useState} from 'react';
import MainLayout from "../../components/MainLayout/MainLayout";
import Products from '../../components/Products/Products';
import {ROLE_PROVIDER} from "../../constants/userRoles";
import {getUser} from "../../services/localStorageServices";
import {UserInterface} from "../../types/user.types";
import NotLogin from "../../components/Products/NotLogin/NotLogin";

const Index = () => {
    const [currentUser, setCurrentUser] = useState<UserInterface | null>(getUser());
    return (
        <MainLayout setPageUser={setCurrentUser}>
            {
                currentUser
                    ? <Products role={ROLE_PROVIDER}/>
                    : <NotLogin/>
            }
        </MainLayout>
    );
};

export default Index;