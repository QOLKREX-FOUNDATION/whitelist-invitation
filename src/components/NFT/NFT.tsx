import Image from "next/image";

export const NFT = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",

			}}
		>
		
        {/* <Image src="/img/nft.png" width={400} height={300} objectFit="contain" alt="nft" priority/> */}
			<video muted autoPlay loop
                style={{
                    margin: '2rem 0 0',
                    width: "80%",
                    borderRadius: 10,
                }}
            >
                <source src="/img/nft.mp4" type="audio/mpeg" />
            </video>
		</div>
	);
};
