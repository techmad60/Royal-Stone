
export default function FormButton ({ButtonText=""}) {
    return (
        <button type="submit" className={`flex font-medium bg-green-700 w-full justify-center self-center text-lg duration-300 hover:bg-green-800 shadow-md py-6 px-3 rounded-md text-white`}>
            {ButtonText}
        </button>
       
    )
}