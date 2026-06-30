export default function useClipboard(text:string){
    navigator.clipboard.writeText(text)
}