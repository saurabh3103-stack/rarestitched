import Text from "@components/ui/text";
import Link from "@components/ui/link";
import { useTranslation } from "next-i18next";
import { IoEyeOutline } from "react-icons/io5";

interface Props {
	sectionHeading: string;
	categorySlug?: string;
	className?: string;
}

const SectionHeader: React.FC<Props> = ({
	sectionHeading = "text-section-title",
	categorySlug,
	className = "pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8",
}) => {
	const { t } = useTranslation("common");
	
	console.log(categorySlug,sectionHeading)
	return (
		<div
			className={`flex items-center justify-between -mt-2 lg:-mt-2.5 ${className}`}
		>
			<Text variant="mediumHeading">{t(`${sectionHeading}`)}</Text>
			{categorySlug && (
				<Link
					href={categorySlug}
					className="flex items-center  font-semibold  transition duration-200"
				>
					<span className="mr-2">See All</span>
					<IoEyeOutline className=" transition duration-200" />
				</Link>
			)}
		</div>
	);
};

export default SectionHeader;
