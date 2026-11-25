export const StyledForm = () => {
    return  (
        //every attribute in JSX must be written in camelCase form like 'for' to 'htmlFor', 'class' to 'className'
        <form className="form">
            <label htmlFor="name" id="username">Username:</label>
            <input type="text" className="username input"/>
            <br/>
            <label htmlFor="password" id="password">Password:</label>
            <input type="password" className="pass input"/>
        </form>
    );
};