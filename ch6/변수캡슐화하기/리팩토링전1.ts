export interface SetDefaultOwnerProps {
  firstName: string;
  lastName: string;
}

let defaultOwner = { firstName: '마틴', lastName: '파울러' };

const spaceship = {
  owner: defaultOwner,
};

defaultOwner = { firstName: '레베카', lastName: '파슨스' };

const getDefaultOwner = () => defaultOwner;
const sertDefaultOwner = (arg: SetDefaultOwnerProps) => {
  defaultOwner = arg;
};
