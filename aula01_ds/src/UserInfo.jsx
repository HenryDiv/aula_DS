function Comment(props){
    return (
        <div className="Comment">
        <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
        {props.author.name}
        </div>
        </div>
        <div className="Comment-text">
        {props.text} 
        </div>
        <div className="Comment-date">
        {FormatDate(props.date)}
            </div>
        </div>
    );
}