import { SetDefaultOwnerProps } from './리팩토링전1';

let defaultOwnerData = { firstName: '마틴', lastName: '파울러' };

export const defaultOwner = () => ({ ...defaultOwnerData });
export const sertDefaultOwner = (arg: SetDefaultOwnerProps) => {
  defaultOwnerData = arg;
};
