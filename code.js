import helper from './module/helper.js';
import { Cell, Bomb } from './module/square.js';
const miner = (function(){
    const colCount = 10;
    const rowCount = 10;
    const bombCount = 13;
    let visibleCellCount = 0;
    const grid = [];
    const girdElement = document.querySelector('.grid')
    const infoElement = document.getElementById('info');
    girdElement.style = "grid-template-columns:repeat("+colCount+",1fr)"
    const bombIndex = helper.randomIntgers(bombCount,0,colCount*rowCount-1)
    bombIndex.forEach(bombIndex=>{
        grid[bombIndex] = new Bomb();
    })
    bombIndex.forEach(bombIndex=>{
        const neighbors = helper.neighbors(bombIndex,colCount,rowCount)
        neighbors.forEach(neighbors=>{
            if(typeof grid[neighbors] === 'undefined'){
                grid[neighbors] = new Cell();
            }
            if(!grid[neighbors].isBomb){
                grid[neighbors].increaseValue()
            }
        })
    })
    for(let i=0 ;i<colCount*rowCount;i++){
        if(typeof grid[i] === 'undefined'){
            grid[i] = new Cell();
        }
        const cellElement = document.createElement('div')
        cellElement.classList.add('cell')
        cellElement.innerHTML =  `<div class='center'>${grid[i].value}</div>`
        cellElement.addEventListener('click',function(){
            grid[i].show();
            visibleCellCount++;
            if(grid[i].isBomb){
                alert('ridi')
                visibleCells();
            }else{
                if(grid[i].value === 0){
                    showBombNeighbors(i)
                }
                check();
            }
        })
        girdElement.appendChild(cellElement)
        grid[i].element = cellElement
    }
    const cells = document.querySelectorAll('.cell')
    function visibleCells(){
        cells.forEach(cell=>cell.classList.add('visible'))
    }
    infoElement.innerHTML = `<button onClick="location.reload()">Try Again </button>`
    function showBombNeighbors(i){
        const neighbors = helper.neighbors(i,colCount,rowCount);
        neighbors.forEach(neighbor => {
            if(grid[neighbor].isBomb === false && grid[neighbor].isVisible === false){
                grid[neighbor].show();
                visibleCellCount++
                if(grid[neighbor].value === 0){
                    showBombNeighbors(neighbor)
                }
            }
        })
    }
    function check(){
        if(visibleCellCount+bombCount=== rowCount*colCount){
            alert('afarin')
        }
    }
})();