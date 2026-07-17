type FooterProps={
    ref:React.RefObject<HTMLInputElement | null>
}

export const Footer = ({ref}:FooterProps) => {

    function handleFocus(){
        if(!ref.current) return;
        ref.current.focus();
        ref.current.style.backgroundColor='red'
    }

  return (
    <div 
    className="h-5 border p-5 rounded-lg fixed w-[99vw] bottom-0">
        <p className="h-5 flex justify-center items-center">
            <button onClick={handleFocus}>Focus on input</button>
        </p>
    </div>
  )
}
