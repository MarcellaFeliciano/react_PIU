
import img1 from "../assets/amigas.png";
import img2 from "../assets/bests.png";
import img3 from "../assets/evelyn_popo.png";
import img4 from "../assets/iuri.png";
import img5 from "../assets/marcella_kekel.png";
import img6 from "../assets/popo.png";

export default function Galeria({ Card }) {
    const cardsData = [
        { title: 'Amigas', description: 'Descrição do Card 1', img: img1 },
        { title: 'Bests', description: 'Descrição do Card 2', img: img2 },
        { title: 'Evelyn e Popó', description: 'Descrição do Card 3', img: img3 },
        { title: 'Iuri Redes', description: 'Descrição do Card 4', img: img4 },
        { title: 'Marcella e Kekel', description: 'Descrição do Card 5', img: img5 },
        { title: 'Popó', description: 'Descrição do Card 6', img: img6 },
    ];

    return (
        <>
            <h2>Galeria de fotos - EXPOTEC</h2>
            <div className="galeria">
                {cardsData.map((card, index) => (
                    <Card key={index} title={card.title} description={card.description} img={card.img} />
                ))}
            </div>
        </>
    );
}
//  description={card.description}



// const products = [
//   { title: 'Cabbage', isFruit: false, id: 1 },
//   { title: 'Garlic', isFruit: false, id: 2 },
//   { title: 'Apple', isFruit: true, id: 3 },
// ];

// export default function ShoppingList() {
//   const listItems = products.map(product =>
//     <li
//       key={product.id}
//       style={{
//         color: product.isFruit ? 'magenta' : 'darkgreen'
//       }}
//     >
//       {product.title}
//     </li>


// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

// export default function Profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={'Photo of ' + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize
//         }}
//       />
//     </>
//   );
// }