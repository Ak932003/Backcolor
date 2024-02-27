let changeColor = () => {
    let colors = ['red', 'green', 'blue', 'pink', 'yellow', 'purple', 'aqua', 'salmon', 'indigo', 'forestgreen']
    let index = Math.floor(Math.random()*10);
    document.body.style.backgroundColor = colors[index];
}