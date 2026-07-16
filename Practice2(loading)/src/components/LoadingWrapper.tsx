type LoadingWrapperProps={
  loading:boolean,
  children:React.ReactNode
}

export const LoadingWrapper = ({loading,children}:LoadingWrapperProps) => {
  if(loading){
    return <div>Loading...</div>
  }

  return (
    <div>
      {children}
    </div>
  )
}


// // components.tsx

// import React from "react";

// interface ProductCardProps {
//   loading: boolean;
//   title: string;
//   price: number;
//   rating: number;
//   inStock: boolean;
//   onAddToCart: () => void;
// }

// // Receives a `loading` prop but does NOT handle it
// export const ProductCard: React.FC<ProductCardProps> = ({
//   title,
//   price,
//   rating,
//   inStock,
//   onAddToCart,
// }) => {
//   return (
//     <div className="product-card">
//       <h3>{title}</h3>
//       <p className="price">${price}</p>
//       <p className="rating">⭐ {rating}</p>
//       <p className="stock">{inStock ? "In Stock" : "Out of Stock"}</p>
//       <button onClick={onAddToCart} disabled={!inStock}>
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// interface UserProfileProps {
//   loading: boolean;
//   name: string;
//   email: string;
//   avatarUrl: string;
//   bio: string;
//   followers: number;
// }

// // Also receives `loading` but does NOT handle it
// export const UserProfile: React.FC<UserProfileProps> = ({
//   name,
//   email,
//   avatarUrl,
//   bio,
//   followers,
// }) => {
//   return (
//     <div className="user-profile">
//       <img src={avatarUrl} alt={name} />
//       <h2>{name}</h2>
//       <p className="email">{email}</p>
//       <p className="bio">{bio}</p>
//       <span className="followers">{followers} followers</span>
//     </div>
//   );
// };

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