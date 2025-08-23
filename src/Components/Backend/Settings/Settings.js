
import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { generalStyleTabs } from '../../../utils/options';
import {tabController} from "../../../../../bpl-tools/utils/functions"
import General from './General/General';
import Style from './Style/Style';

const Settings = ({ attributes, setAttributes }) => {
	const { alignment } = attributes;

	return <>
		<InspectorControls>
			

			<TabPanel className='bPlTabPanel wp-block-pc-block-profile-card' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}>
				{
					tab => <>
						{'general' === tab.name && <General attributes={attributes} setAttributes={setAttributes} />}

						{'style' === tab.name && <Style attributes={attributes} setAttributes={setAttributes} />}
					</>
				}
			</TabPanel>
		</InspectorControls>


		<BlockControls>

			<AlignmentToolbar value={alignment} onChange={val => setAttributes({ alignment: val })} describedBy={__('Profile Card Alignment')} alignmentControls={[
				{ title: __('Profile Card in left', 'pc-block'), align: 'left', icon: 'align-left' },
				{ title: __('Profile Card in center', 'pc-block'), align: 'center', icon: 'align-center' },
				{ title: __('Profile Card in right', 'pc-block'), align: 'right', icon: 'align-right' }
			]} />

		</BlockControls>
	</>;
};
export default Settings;