import { useEffect } from "react";

export const MyModal = ({ closeModal }: { closeModal: () => void }) => {

    useEffect(()=>{
        document.body.style.overflowY='hidden';

        return ()=>{
            document.body.style.overflowY='visible';
        }
    },[])

  return (
    <>
    <div className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm"></div>
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white border border-gray-200 p-5 w-70 rounded-xl shadow-2xl m-auto flex flex-col gap-3 ">
      <h1 className="bold text-2xl">Stayed Tuned</h1>
      <p>Suscribe to our channel and the never miss latest video</p>
      <button className="border rounded-sm w-30" 
        onClick={closeModal}>
        accept
      </button>
    </div>
    </>
  );
};
