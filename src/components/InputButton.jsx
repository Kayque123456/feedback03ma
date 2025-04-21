export function inputButton({ value, setNotaAvaliacao }) {
    function handleMudarNotaAvaliacao(nota) {
        setNotaAvaliacao(nota)
    }

    return (
        <input type="button" value={value} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13 hover:bg-orange hover:text-white Sm:w-13 Sm:h-14  hover:cursor-pointer duration-500 font-bold" onClick={() => handleMudarNotaAvaliacao(value)}/>
    )
}