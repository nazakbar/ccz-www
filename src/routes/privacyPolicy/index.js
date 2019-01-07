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