let ssn = prompt('주민번호 입력하세요;');
//680313-1234567
if(ssn){
  const num = ssn.indexOf('-');
  const c = ssn.charAt(ssn.indexOf('-') + 1);
  switch (c) {
    case '1': //alert('男');
    case '3': alert('男');  break;
    case '2': //alert('女');
    case '4': alert('女');  break;
    default: alert('外國人'); break;
  }
}else{
  alert('공백말고 입력 하세요;');
}
