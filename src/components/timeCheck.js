export default function timeCheck(time) {
	const [h, m, s] = time;
	return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}
