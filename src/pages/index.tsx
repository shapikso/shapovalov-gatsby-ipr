import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import MainLayout from '../components/MainLayout/MainLayout';
import Products from '../components/Products/Products';
import {ROLE_CUSTOMER} from "../constants/userRoles";

const IndexPage: React.FC<PageProps> = () => {
  return (
      <MainLayout>
        <Products role={ROLE_CUSTOMER}/>
      </MainLayout>
  )
}

export default IndexPage
