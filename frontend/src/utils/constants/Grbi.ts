import { Obcine } from './Obcine';

export enum Grbi {
	Maribor = 'maribor.svg',
	Benedikt = 'benedikt.svg',
	Cerkvenjak = 'cerkvenjak.svg',
	Duplek = 'duplek.svg',
	HoceSlivnica = 'hoce-slivnica.svg',
	Kungota = 'kungota.svg',
	Lenart = 'lenart.svg',
	LovrencNaPohorju = 'lovrenc-na-pohorju.svg',
	MiklavzNaDravskemPolju = 'miklavz-na-dravskem-polju.svg',
	Pesnica = 'pesnica.svg',
	RaceFram = 'race-fram.svg',
	Ruse = 'ruse.svg',
	SelnicaObDravi = 'selnica-ob-dravi.svg',
	Starse = 'starse.svg',
	SvetaTrojica = 'sveta-trojica.svg',
	SvetaAna = 'sveta-ana.svg',
	SvetiJurijVSlovenskihGoricah = 'sveti-jurij-v-slovenskih-goricah.svg',
	Sentilj = 'sentilj.svg'
}

export const computeGrb = (obcina: Obcine) => {
	// @ts-expect-error Magic
	return Grbi[Obcine[obcina]] as Grbi | undefined;
};
