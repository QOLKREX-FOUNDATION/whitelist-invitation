import DOG from "../../../public/Json/race/Dogs.json";
import CAT from "../../../public/Json/race/Cats.json";

interface IOptionRaces {
	"en-Us": string;
	"es-Es": string;
	value: string;
}

export interface IRacesJson {
	DOG: IOptionRaces[];
	CAT: IOptionRaces[];
}

export const racesJson = {
	DOG,
	CAT,
};
