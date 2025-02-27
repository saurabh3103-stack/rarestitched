import React from "react";
import Link from "@components/ui/link";
import { useTranslation } from "next-i18next";

interface MenuItem {
	id: number | string;
	path: string;
	label: string;
	columnItemItems?: MenuItem[];
}
type MegaMenuProps = {
	columns: {
		id: number | string;
		columnItems: MenuItem[];
	}[];
};


const renderImages = (label) => {
  switch (label) {
    case 'men':
      return (
       <>
          <img src="https://media-uk.landmarkshops.in/cdn-cgi/image/h=730,w=540,q=85,fit=cover/lifestyle/1000010653029-Green-1000010653029_01-2100.jpg" alt="Men's Image 1" />
         
					</>
      );
    case 'women':
      return <>
			 <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/image%20(52)2024_04_24-15-32-04.png?format=webp&w=300&dpr=1.0" alt="Men's Image 1" />
			</>


case 'mugs':
	return <>
	 <img src="https://ik.imagekit.io/mcd/mac/product-images/coffee-mug-ceramic/cmfwh321mainapnifavouritehu.jpg?tr=w-1080,h-1440,c-at_max" alt="Men's Image 1" />
	 </>
case 'accessories':
	return <>
	 <img src="https://m.media-amazon.com/images/I/61J+0-Yz3NL._AC_UY1100_.jpg" alt="Men's Image 1" />
	 </>

    default:
      return <><img src="https://m.media-amazon.com/images/I/618VQ1iu2OL._AC_UF1000,1000_QL80_.jpg" alt="Men's Image 1" /> 
			 
			</> ;
  }
	
};
const MegaMenu: React.FC<MegaMenuProps> = ({ columns }) => {
	const { t } = useTranslation("menu");
	return (
		<div className="megaMenu shadow-header bg-gray-200 absolute ltr:-left-20 rtl:-right-20 ltr:xl:left-0 rtl:xl:right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
			<div className="grid grid-cols-4">
				{columns?.map((column) => (
					<ul
						className="even:bg-gray-150 pb-7 2xl:pb-8 pt-6 2xl:pt-7"
						key={column.id}
					>
						{column?.columnItems?.map((columnItem) => (
							<React.Fragment key={columnItem.id}>
								<li className="mb-1.5">
									<Link
										href={columnItem.path}
										className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
									>
										{t(columnItem.label)}
									</Link>
								</li>
								{columnItem?.columnItemItems?.map((item: any) => (
									<li
										key={item.id}
										className={
											columnItem?.columnItemItems?.length === item.id
												? "border-b border-gray-300 pb-3.5 mb-3"
												: ""
										}
									>
										<Link
											href={item.path}
											className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
										>
											{t(item.label)}
										</Link>
									</li>
								))}

								
							</React.Fragment>
							
						))}
						
					</ul>
					
				))}
			
				  {renderImages(columns[0].columnItems[0].img)}
			</div>
		</div>
	);
};

export default MegaMenu;



