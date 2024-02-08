import React from 'react';
import Link from 'next/link';

const Boutiques = () => {
  const Nos_Boutiques = [
    {
      id: 1,
      title: "PIZZA TIME GUYANGOURT",
      img: "/ImgBout/B1.jpg",
      salesQ: 1100,
      likesN: 100,
      PercentOff: 14,
      price: 9.0,
      openingTime: "10:00",
      closingTime: "20:00",
      slug: "pizza-time-guyangourt",
    },
    {
      id: 2,
      title: "PIZZA TIME MEAUX",
      img: "/ImgBout/B2.jpg",
      salesQ: 2200,
      likesN: 100,
      PercentOff: 10,
      price: 8.5,
      openingTime: "09:00",
      closingTime: "21:00",
      slug: "pizza-time-meaux",
    },
    {
      id: 3,
      title: "PIZZA TIME AMIENS CENTRE VILLE",
      img: "/ImgBout/B3.jpg",
      salesQ: 770,
      likesN: 100,
      PercentOff: 8,
      price: 7.12,
      openingTime: "08:00",
      closingTime: "22:00",
      slug: "pizza-time-amiens-centre-ville",
    },
    {
      id: 4,
      title: "PIZZA TIME SAINT-LEU",
      img: "/ImgBout/B4.jpg",
      salesQ: 600,
      likesN: 100,
      PercentOff: 12,
      price: 10.0,
      openingTime: "11:00",
      closingTime: "19:00",
      slug: "pizza-time-saint-leu",
    },
  ];

  // Fonction pour obtenir l'heure actuelle au format hh:mm
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  // Fonction pour vérifier si la boutique est ouverte en fonction de l'heure actuelle
  const isBoutiqueOpen = (openingTime:string, closingTime:string):boolean => {
    const currentTime = getCurrentTime();
    return currentTime >= openingTime && currentTime <= closingTime;
  };

  return (
    <div className='max-w-2xl mx-auto my-5'>
      <h2 className='text-3xl font-semibold text-center text-gray-600 sm:text-4xl'>Nos Boutiques</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {Nos_Boutiques.map(item => (
          <Link href={`/boutique/${item.slug}`} key={item.id}>
            <div className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer ${isBoutiqueOpen(item.openingTime, item.closingTime) ? 'border-green-500' : 'border-red-500'}`}>
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">Sales: {item.salesQ}</p>
                <p className="text-gray-600">Likes: {item.likesN}</p>
                <p className="text-gray-600">Price: ${item.price}</p>
                <p className="text-gray-600">Discount: {item.PercentOff}%</p>
                <p className={`text-${isBoutiqueOpen(item.openingTime, item.closingTime) ? 'green-600' : 'red-600'}`}>
  {isBoutiqueOpen(item.openingTime, item.closingTime) ? 'Open' : 'Closed'}
</p>

              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Boutiques;
