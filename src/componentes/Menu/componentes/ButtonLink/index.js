import React from  'react';


function ButtonLink(props){
//props - {classname: o que vai passar  href:"/"}
    return(
        <a className={props.className}   href={props.href} >
            {props.children}
        </a>
    );
}

export default ButtonLink;