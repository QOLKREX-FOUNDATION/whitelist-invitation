export const NFT = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <video muted autoPlay loop
                style={{
                    margin: '2rem 0 0',
                    width: "70%",
                    borderRadius: 10,
                }}
            >
                <source src="/img/nft.mp4" type="audio/mpeg" />
            </video>
        </div>
    )
}
