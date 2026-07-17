import { useEffect, useState } from "react";
import { ProductCard } from "./components/ProductCard";
import { UserProfile } from "./components/UserProfile";

interface AppProps {
  isLoading: boolean;
}

export const App : React.FC<AppProps> = ({ isLoading }) => {
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
        setLoading(true);
         fetch(`https://picsum.photos/v2/list?page=1&limit=3`)
        .then((resp)=>resp.json())
        .finally(()=>{
            setLoading(false);
        })
    },[])

  return (
    <div>
        <ProductCard
        loading={loading}
        title="Wireless Headphones"
        price={99.99}
        rating={4.5}
        inStock={true}
        onAddToCart={() => {}}
      />

      <UserProfile
        loading={true}
        name="Jane Doe"
        email="jane@example.com"
        avatarUrl="/avatars/jane.png"
        bio="Frontend developer & coffee enthusiast"
        followers={1240}
      />
      
    </div>
  )
}


// components.tsx

// import React from "react";

// // Example usage — `loading` is passed but currently ignored by both components
// interface AppProps {
//   isLoading: boolean;
// }

// export const App: React.FC<AppProps> = ({ isLoading }) => {
//   return (
//     <>
//       <ProductCard
//         loading={isLoading}
//         title="Wireless Headphones"
//         price={99.99}
//         rating={4.5}
//         inStock={true}
//         onAddToCart={() => {}}
//       />

//       <UserProfile
//         loading={isLoading}
//         name="Jane Doe"
//         email="jane@example.com"
//         avatarUrl="/avatars/jane.png"
//         bio="Frontend developer & coffee enthusiast"
//         followers={1240}
//       />
//     </>
//   );
// };