import React from 'react';
import * as styles from './ModalDeleteProduct.module.scss';
import Cross from '../../icons/cross.inline.svg';
import Button, {buttonColor, buttonSize} from "../../common/Button/Button";
import {deleteProduct} from "../../../services/productsServices";
import useDisable from "../../../hooks/useDisable";
import useKeypress from "../../../hooks/useKeyPress";
import {ESCAPE_KEY} from "../../../constants/keys";

interface ModalDeleteProductProps {
    closeModal: (id?: number) => void,
    productId: number,
    deleteItemFromList: (id: number) => void,
};

const ModalDeleteProduct = ({closeModal, productId, deleteItemFromList}: ModalDeleteProductProps) => {
    const {isDisable, disableWhileReq} = useDisable();

    const closeModalHandler = () => closeModal();
    const deleteProductConfirm = () => {
        disableWhileReq(deleteProduct(productId)
            .then(() => deleteItemFromList(productId))).then(closeModalHandler);
    };
    useKeypress(ESCAPE_KEY, closeModalHandler);

    return (
        <div className={styles.modalWrapper}>
            <div className={styles.modal} >
                <div className={styles.titleModalPart}>
                    Delete product
                    <Cross onClick={closeModalHandler}/>
                </div>
                <div className={styles.messageModalPart}>
                    Do you want delete product?
                </div>
                <div className={styles.buttonsModalPart}>
                    <Button
                        size={buttonSize.small}
                        color={buttonColor.transparentPrimary}
                        onClick={deleteProductConfirm}
                        disabled={isDisable}
                    >
                        Yes
                    </Button>
                    <Button size={buttonSize.small} onClick={closeModal} disabled={isDisable}>No</Button>
                </div>
            </div>
        </div>
    );
};

export default ModalDeleteProduct;