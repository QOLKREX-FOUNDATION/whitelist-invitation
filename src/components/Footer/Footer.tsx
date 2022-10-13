import Image from "next/image";
import { imagesLogo } from "./data";
import classes from "./footer.module.css";

export const Footer = () => {
	return (
		<div className={classes.container}>
			<div className={classes.logo}>
				{imagesLogo.map((data) => (
					<a
						key={data.alt}
						href={data.href}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src={data.src}
							width={data.width}
							height={data.height}
							alt={data.alt}
						/>
					</a>
				))}
			</div>

			<h3 className={classes.copyrigth}>
				© 2021-{new Date().getFullYear()} Qolkrex - All Rights Reserved.
			</h3>
		</div>
	);
};
