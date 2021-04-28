import cheerio from 'cheerio';

export const CORSProxyBase = 'https://eap.quantumly.workers.dev/corsproxy/?apiurl=';
export const UrnikURLBase = 'https://www.easistent.com/urniki/';
export const UrnikRegex = /((http(s|):\/\/)?(www.)?easistent.com\/urniki\/)?(?<code>[0-9a-f]{40,40})/gi;
export const SchoolIDRegex = /.+?var id_sola = '(\d+)';/gm;

export async function getSchoolInfo(url: string): Promise<SchoolInfo | undefined> {
	const urnikID = UrnikRegex.exec(url);
	if (!urnikID?.groups?.code) return;

	const html = await (await fetch(`${CORSProxyBase}${UrnikURLBase}${urnikID.groups.code}`)).text();
	const $ = cheerio.load(html);

	const razredi = new Map<string, number>();
	// @ts-expect-error Magic
	$('#id_parameter option').each((_, el) => razredi.set(el.children[0].data, Number(el.attribs.value)));

	const solaIme = $('#okvir_prijava h1').text();

	let scripts = '';
	// @ts-expect-error Magic
	$('script').each((_, el) => (scripts += el.children[0]?.data));
	const solaID_ = SchoolIDRegex.exec(scripts);
	const solaID = solaID_ === null ? null : solaID_[1];

	return {
		ime: solaIme,
		id: solaID,
		razredi
	};
}

export interface SchoolInfo {
	ime: string;
	id: string | null;
	razredi: Map<string, number>;
}
