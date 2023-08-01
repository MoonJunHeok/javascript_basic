console.log(location.href);
// let url = 'https://www.naver.com';
// location.href = url;


function go(){
  let url = 'https://www.naver.com';
  // location.href = url;
  location.assign(url);
  // location.replace(url);
  location.reloed();
}
// assign은 이동할때마다 히스토리에 남음(뒤로가기가능)
// replace는 히스토리에 남지않는다.