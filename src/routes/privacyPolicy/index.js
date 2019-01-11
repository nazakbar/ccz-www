import Helmet from 'preact-helmet';
import SectionHero from '../../components/sectionHero';
import PageIntro from '../../components/pageIntro';
import InfoTypeIntro from '../../components/sectionPrivacy/infoTypeIntro';
import Type from '../../components/sectionPrivacy/type';
import InfoUse from '../../components/sectionPrivacy/infoUse';
import OtherInfo from '../../components/sectionPrivacy/otherInfo';
import InfoBase from '../../components/sectionPrivacy/infoBase';

import { heroShort, privacyIntro, infoTypeIntro, givenTitle, infoTypeGiven, autoTitle, infoTypeAuto, infoTypeThirdParties, infoHowUseTitle, infoUseLists, otherInfo, infoChanges, infoContact } from './content';

const PrivacyPolicy = () => (
	<div>
		<Helmet
			title="Concrezan | Privacy Policy"
			meta={[{
				name: 'description',
				content: `This Privacy Policy describes how we collect, use, process, and disclose your information, including personal information, in conjunction with your access to and use of the Site.`
			}]}
		/>
		<SectionHero
			theme={{ main: `#FFF` }}
			heroShort={heroShort}
		/>
		<PageIntro
			theme={{ main: `#FFF` }}
			{...privacyIntro}
		/>
		<InfoTypeIntro
			theme={{ main: `#FFF` }}
			{...infoTypeIntro}
		/>
		<Type
			theme={{ main: `#FFF` }}
			infoListTitle={givenTitle}
			infoLists={infoTypeGiven}
		/>
		<Type
			theme={{ main: `#FFF` }}
			infoListTitle={autoTitle}
			infoLists={infoTypeAuto}
		/>
		<Type
			theme={{ main: `#FFF` }}
			infoTitle={infoTypeThirdParties}
		/>
		<InfoUse
			theme={{ main: `#FFF` }}
			{...infoHowUseTitle}
			listItems={infoUseLists}
		/>
		<OtherInfo
			theme={{ main: `#FFF` }}
			{...otherInfo}
		/>
		<InfoBase
			theme={{ main: `#FFF` }}
			{...infoChanges}
		/>
		<InfoBase
			theme={{ main: `#FFF` }}
			infoContact={infoContact}
		/>
	</div>
);

export default PrivacyPolicy;