export interface Package {
    slug: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    description: string;
    content: string;
    price: number;
    duration: string;
    activities: string[];
    image: string;
    badge: string;
    minimum:number;
    badgeColor:string;
}

export const PACKAGES_DATA: Package[] = [
    {
        slug: "bentota-trio-water-sports",
        title: "Bentota Trio: Jet Ski, Banana Boat & Sofa Ride",
        metaTitle: "Bentota Trio Water Sports Package | La Luna Bentota",
        metaDescription:
      "Experience 3 top Bentota water sports in one package! Enjoy a 3km Jet Ski ride, 3km Banana Boat, and 3km Sofa Ride at LaLuna Water Sports.",
        description: "Get ready for non-stop ocean excitement! The Bentota Express Combo combines three of Bentota's most thrilling water sports—Jet Skiing, Banana Boating, and the bouncy Sofa Tube Ride—into one fast-paced adventure package. Perfect for friends, families, and thrill-seekers looking for maximum fun in short time.",
        content: `Experience the absolute best of Bentota's water sports in one thrilling package! Whether you're craving high-speed ocean adrenaline or splashing around with family and friends, this 3-in-1 combo delivers maximum excitement.

Your adventure starts with a 3km Jet Ski ride across the smooth waters of Bentota lagoon and ocean—take the controls yourself or ride with an experienced instructor. Next, hop on the 3km Banana Boat for a fun-filled, high-speed group ride full of splashes and laughter. Finally, hold on tight during the 3km Sofa Tube Ride, an ultra-fun towed ride that skims, bounces, and glides across the water!

At LaLuna Water Sports, we provide premium, fully maintained equipment, certified safety jackets, and expert guide supervision so you can enjoy every second with total peace of mind.`,
        price: 100,
        duration: "Approx. 1 hour",
        activities: ["Jet Ski (3km)", "Banana Boat (3km)", "Sofa Tube Ride (3km)"],
        image: "/images/packages/adrenaline.jpg",
        badge: 'Family Favorite',
        minimum: 4,
        badgeColor: 'bg-site-green/10',
    },
    {
        slug: "bentota-quad-water-sports-pack",
        title: "Bentota Quad Thrill: Jet Ski, Banana, Sofa & Lay-Down Tube",
        metaTitle: "Bentota Quad Water Sports Package | La Luna Bentota",
        metaDescription:
    "Experience 4 thrilling water sports in Bentota! Enjoy a 3km Jet Ski ride, Banana Boat, Sofa Ride, and Lay-Down Tube ride at La Luna Water Sports.",
        description:
    `Take your water sports adventure to the next level with 4 high-speed activities! Enjoy 3km of Jet Skiing, Banana Boating, Sofa Ride, plus the high-adrenaline Lay-Down Tube ride. Perfect for groups, couples, and thrill-seekers.`,
        content: `Ready for the ultimate 4-in-1 ocean adventure? The Bentota Quad Thrill combines four of the most exhilarating water sports into one action-packed combo designed for maximum fun and unbeatable value!

Your session kicks off with a 3km Jet Ski ride across the calm waters of Bentota lagoon or open ocean. Next, jump on the 3km Banana Boat for high-speed laughter and splashes with your group. Then, hold tight for the 3km Sofa Tube Ride, gliding and bouncing across the waves. Finally, get ready for the ultimate rush—the 3km Lay-Down Tube Ride! Skim inches above the water surface lying flat on your stomach for an unmatchable adrenaline surge.

At La Luna Water Sports, every activity includes top-grade equipment, certified life jackets, and full guide supervision so you can push your limits in complete safety.`,
        price: 130, // Adjust price as needed
        duration: "45-60 Mins",
        activities: [
            "Jet Ski (3km)",
            "Banana Boat (3km)",
            "Sofa Tube Ride (3km)",
            "Lay-Down Tube (3km)",
        ],
        image: "/images/packages/bentota-quad-water-sports-pack.jpg",
        badge: 'Family Favorite',
        minimum: 4,
        badgeColor: 'bg-site-green/10',
    },
    {
        slug: "bentota-speed-boat-combo-pack",
        title: "Bentota Speed Boat Combo: Jet Ski, Banana, Sofa & Speed Boat",
        metaTitle: "Bentota Speed Boat & Water Sports Package | La Luna Bentota",
        metaDescription:
            "Combine speed boat cruising with top water sports in Bentota! Jet Ski, Banana Boat, Sofa Ride, and Speed Boat round trip at La Luna Water Sports.",
        description:
            "The ultimate mix of high-speed cruising and thrilling water sports! Enjoy a full Speed Boat round trip alongside 3km rides of Jet Ski, Banana Boat, and Sofa Tube.",
        content: `Combine thrilling water sports action with scenic speed boat cruising in Bentota! This dynamic 4-in-1 package offers the perfect balance of heart-pounding rides and high-speed water sightseeing.

        Your adventure features a fast-paced 3km Jet Ski ride, a crowd-favorite 3km Banana Boat ride, and an exciting 3km Sofa Tube ride that skips and glides across the water. To top it off, enjoy an exhilarating Speed Boat round trip along the scenic Bentota river and coast—perfect for taking in panoramic tropical views while cruising at high speed.

        Equipped with certified safety equipment and guided by experienced professionals at La Luna Water Sports, this package is tailor-made for families, groups, and adventure lovers.`,
        price: 140,
        duration: "45-60 Mins",
        activities: [
            "Jet Ski (3km)",
            "Banana Boat (3km)",
            "Sofa Tube Ride (3km)",
            "Speed Boat Round Trip",
        ],
        image: "/images/packages/speed-boat.jpg",
        badge: "Most Popular",
        minimum: 4,
        badgeColor: 'bg-site-green/10',
        }

];