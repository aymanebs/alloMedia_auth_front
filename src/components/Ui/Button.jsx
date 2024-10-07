
function Button({Label = "Submit"}){
    return (
        <>
        <button className="btn btn-green" type="submit">{Label}</button>
        </>
    )
}

export default Button;