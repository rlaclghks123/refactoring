// 불필요하다고 판단한 TrackingInformation 클래스를 Shipment 클래스로 인라인 하기
class Shipment {
  _shippingCompany: string = '';
  _trackingNumber: string = '';

  get trackingInfo() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }

  get shippingCompany() {
    return this._shippingCompany;
  }
  set shippingCompany(arg) {
    this._shippingCompany = arg;
  }
  get trackingNumber() {
    return this._trackingNumber;
  }
  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }
}

const client2 = () => {
  const aShipment = new Shipment();
  const vendor = { name: 'A-SHIP', number: '010-1234-5678' };
  aShipment.shippingCompany = vendor.name;
  aShipment.trackingNumber = vendor.number;
  return aShipment.trackingInfo;
};

console.log(client2());
