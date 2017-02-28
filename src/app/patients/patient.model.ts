export class Patient{
  constructor(
    public email:string,
    public password:string,
    public firstName? :string,
    public lastName?:string,
    public gender?:string,
    public dob?:string,
    public address?:string,
    public phone?:number,
    public pregnant?:boolean,
    public emergencyContact?:any,
    public insurances?:any[],
    public signedDisclosure?:boolean
  ) {}
}
