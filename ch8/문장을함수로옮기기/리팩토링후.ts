import { PersonInterface, PhotoInterface } from './리팩토링전';

export const renderPhoto = (aPhoto: PhotoInterface) => {
  return `<img src="${aPhoto.url}" />`;
};

// 이 방식이 더 가독성이 좋아 보입니다.
// export const emitPhotoData = (aPhoto: PhotoInterface) => {
//   const result = [];
//   result.push(`<p>제목: ${aPhoto.title}</p>`);
//   result.push(`<p>위치: ${aPhoto.location}</p>`);
//   result.push(`<p>날짜: ${aPhoto.date.toDateString()}</p>`);
//   return result.join('\n');
// };

export const emitPhotoData = (aPhoto: PhotoInterface) => {
  const result = [];
  result.push(`
        <p>제목: ${aPhoto.title}</p>
        <p>위치: ${aPhoto.location}</p>
        <p>날짜: ${aPhoto.date.toDateString()}</p>
    `);
  return result.join('\n');
};

// export const renderPerson = (person: PersonInterface) => {
//   const result = [];
//   result.push(`<p>${person.name}</p>`);
//   result.push(renderPhoto(person.photo));
//   result.push(emitPhotoData(person.photo));
//   return result.join('\n');
// };

export const renderPerson = (person: PersonInterface) => {
  const result = [];
  result.push(`
      <p>${person.name}</p>
      ${renderPhoto(person.photo)}
      ${emitPhotoData(person.photo)}
  `);
  return result.join('\n');
};

export const photoDiv = (person: PhotoInterface) =>
  ['<div>', emitPhotoData(person), '</div>'].join('\n');

const photo = { title: '로이사진', location: '양재천', date: new Date(), url: 'http://abc.com' };
console.log('** renderPerson **\n', renderPerson({ name: '로이', photo }));
console.log('\n** photoDiv **\n', photoDiv(photo));
