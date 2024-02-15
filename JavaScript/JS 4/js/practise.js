let faiz = 0.2;
let mebleg = Number(prompt("Istediyiniz mebleg:", 500));
let aylar = Number(prompt("Bolunecek aylarin sayi", 3));
let ayliqodenis = (mebleg*faiz + mebleg) / aylar;

alert(ayliqodenis);

let maas = Number(prompt("Ayliq geliriniz:"));

if(maas > ayliqodenis * 2) {

  alert("Siz kredit ala bilersiniz");

} else {

  alert("Siz kredit ala bilmersiniz (maasiniz yeterli deyil)");

};