const Button =(props)=>{
    const {children} = props;

    return (
        <button 
            className="h-10 px-6 text-white bg-blue-700 rounded-md"
        >
            {children}
        </button>
    )
}

export default Button