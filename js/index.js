function fun1() {
  var rng=document.getElementById('order__input_range'); //rng - это Input
  var p=document.getElementById('order__range__value');
  p.innerHTML=`${rng.value}%`;
}
