/* eslint-disable prettier/prettier */
/*jadi dto sendiiri sebenernya kita pengen nih liat apakah data ini ada isinya(validator terutama pipes coba cari apa itu pipes)?
kan di postman mah ada param/body kita centang misal ada author,year,category
kalo gw cuma year sama category doang dicentang kan muncul dua di postman 
tapi kalo orang awam gatau nih ini author gw kosong atau ga dicentang kan muncul 2 
makanya nanti diinstal menggunakan library transform dan class-validator
*/
export class UpdateBookDto {
  title: string;
  author: string;
  category: string;
  year: string;
}
