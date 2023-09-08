import { assert } from 'chai';
import { SetDefaultOwnerProps } from './리팩토링전1';

let defaultOwnerData = { firstName: '마틴', lastName: '파울러' };

export const defaultOwner = () => ({ ...defaultOwnerData });
// export const defaultOwner = () => defaultOwnerData;
export const sertDefaultOwner = (arg: SetDefaultOwnerProps) => {
  defaultOwnerData = arg;
};

const owner1 = defaultOwner();
assert.equal('파울러', owner1.lastName, '처음값 확인');

const owner2 = defaultOwner();
owner2.lastName = '파슨스';
assert.equal('파슨스', owner1.lastName, '처음값 확인');
