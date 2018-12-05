export class Doctor {
   _id:string;
   doctorID: string;
   email:string ;
   password:string;
   phone:string;
   firstname : string;
   lastname : string;
   speciality : string;
   gender : string ;
   image:string;
   degree : string;
   college : string;
   eoc : string;
   eoy : string ; 
   clinicname: string;
   cliniccity: string;
   clinicaddress: string;
   timing:Doctortime;

}

// export class Demo{
//    firstname : String;
//    lastname : String;
//    speciality : String;
//    gender : String ;
// }

// export class Education
// {
//    degree : String;
//    college : String;
//    eoc : String;
//    eoy : String ;
// }

export interface Doctortime
{
  mon:day;
  tue:day;
  wed:day;
  thu:day;
  fri:day;
  sat:day;
  sun:day;
}
export interface day
{
  from:string; to:string;
}

export interface clinic{
  clinicname:string;
  cliniccity:string;
  clinicaddress:string ;
}
