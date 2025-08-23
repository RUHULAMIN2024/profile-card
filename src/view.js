import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import ShowCard from './Components/Common/ShowCard';

document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-pc-block-profile-card');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);
		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />
			
			<ShowCard isEditor={false} attributes={attributes} />
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});