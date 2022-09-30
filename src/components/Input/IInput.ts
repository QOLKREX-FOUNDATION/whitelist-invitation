export interface IInput {
	type: string;
	name: string;
	value: string;
    required?:boolean
	handleChangeForm: (e: any) => void;
	placeHolder:string
}
