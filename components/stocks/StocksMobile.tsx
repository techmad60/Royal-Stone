import Image from "next/image";

const stocks = [
    {
        logo: "/images/stocks/tesco.svg",
        name: "Tesco PLC",
        symbol: "TSCO",
        change: "+2.21%",
        price: "$290.19",
    },
    {
        logo: "/images/stocks/spotify.svg",
        name: "Spotify Technology SA",
        symbol: "SPOT",
        change: "+2.21%",
        price: "$290.19",
    },
    {
        logo: "/images/stocks/air-bnb.svg",
        name: "Airbnb",
        symbol: "ABNB",
        change: "+2.21%",
        price: "$290.19",
    },
    {
        logo: "/images/stocks/shopify.svg",
        name: "Shopify Inc",
        symbol: "SHOP",
        change: "+2.21%",
        price: "$290.19",
    },
];

export default function StockList() {
    return (
        <div>
            {stocks.map((stock, index) => (
                <section
                    key={index}
                    className="flex items-center justify-between bg-light-grey shadow-sm p-3 rounded-common mt-4"
                >
                    <div className="flex items-center gap-2">
                        <Image src={stock.logo} height={47} width={47} alt={`${stock.name} logo`} />
                        <div>
                            <p className="text-sm text-color-five font-medium">{stock.name}</p>
                            <p className="text-xs text-[#6B738599]">{stock.symbol}</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-color-one font-medium">{stock.change}</p>
                        <p className="text-color-six font-medium">{stock.price}</p>
                    </div>
                </section>
            ))}
        </div>
    );
}
