export class Patient{
  constructor(
    public email:string,
    public password:string,
    public firstName? :string,
    public lastName?:string,
    public gender?:string,
    public dateOfBirth?:string,
    public address?:string,
    public city?:string,
    public state?:string,
    public zip?:string,
    public phone?:string,
    public pregnant?:string,
    public emergencyContact?:string,
    public emergencyPhone?:string,
    public insurances?:any[],
    public signedDisclosure?:boolean,
    public referredBy?:string
  ) {}
}
