const Body = (props) => {
    return (
        <div>
            <div className="text-gray-300 pb-4">
                {props.headlineText}
            </div>
            <div>
                {props.bodyText}
            </div>
            <div className="pt-4 underline">
                {props.bottomText}
            </div>
        </div>
    )
}

export default Body;