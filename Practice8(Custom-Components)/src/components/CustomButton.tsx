
type CustomButtonProps=React.ButtonHTMLAttributes<HTMLButtonElement>&{
    variant:'danger'|'warning'|'',
    size?:'sm'|'md'|'lg',
}


export const CustomButton = ({variant,children,size="md",...props}:CustomButtonProps) => {
    console.log(variant,children);
    
    const variantColor={
        '':'bg-blue-500',
        danger:'bg-red-500',
        warning:'bg-yellow-500',
    }

    const sizeCategory={
        sm:`text-sm px-2 py-1`,
        md:`text-md px-4 py-1`,
        lg:`text-lg px-6 py-1`,
    }

  return (
    <button 
        {...props}
        className={`border ${sizeCategory[size]} ${variantColor[variant]}` } 
        // style={{backgroundColor}}
    >
        {children}
    </button>
  )
}
