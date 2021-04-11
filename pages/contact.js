import Head from 'next/head'

const contact = () => {
    return (
        <div>
        <head><title>Raja|Contact</title>
        <meta name="keyword" content="raja" /></head>
           <h1>I am contact page</h1> 
           <from>
           <label> Name </label><br/>
           <input type="text" placeholder="Enter Name" />
           <br/>
           <label> Password </label><br/>
           <input type="password" placeholder="Enter Name" /><br/>
           <button type="submit" >submit</button>
           </from>
        </div>
    )
}

export default contact
