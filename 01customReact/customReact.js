function customRender (reactElement, cusContainer){

    /* version 1
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    cusContainer.appendChild(domElement)
    */
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    cusContainer.appendChild(domElement)
}


const reactElement = {
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const cusContainer = document.querySelector('#root')

customRender (reactElement, cusContainer)