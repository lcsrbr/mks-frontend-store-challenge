import IProducts from "./IProducts";

export default interface ICheckout extends IProducts {
    cartCode: string,
}