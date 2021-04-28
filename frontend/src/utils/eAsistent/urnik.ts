import { week as weekUtil } from './time';

export const CORSProxyBase = 'https://eap.quantumly.workers.dev/corsproxy/?apiurl=';

export async function download(
	url = 'https://www.easistent.com/urniki/ajax_urnik',
	week = weekUtil(),
	school = 0,
	professor = 0,
	sClass = 0,
	student = 0,
	classroom = 0
): Promise<string> {
	const form = new FormData();
	form.append('id_sola', school.toString());
	form.append('teden', week.toString());
	form.append('id_profesor', professor.toString());
	form.append('id_razred', sClass.toString());
	form.append('id_dijak', student.toString());
	form.append('id_ucilnica', classroom.toString());
	form.append('qversion', '1');

	const r = await fetch(`${CORSProxyBase}${url}`, { method: 'POST', body: form });
	return r.text();
}
