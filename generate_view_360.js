const imageList = [
    "civik_fk/1.webp",
    "civik_fk/2.webp",
    "civik_fk/3.webp",
    "civik_fk/4.webp",
    "civik_fk/5.webp",
    "civik_fk/6.webp",
    "civik_fk/7.webp",
    "civik_fk/8.webp",
    "civik_fk/9.webp",
    "civik_fk/10.webp",
    "civik_fk/11.webp",
    "civik_fk/12.webp",
    "civik_fk/13.webp",
    "civik_fk/14.webp",
    "civik_fk/15.webp",
    "civik_fk/16.webp",
    "civik_fk/17.webp",
    "civik_fk/18.webp",
    "civik_fk/19.webp",
    "civik_fk/20.webp",
    "civik_fk/21.webp",
    "civik_fk/22.webp",
    "civik_fk/23.webp",
    "civik_fk/24.webp",
    "civik_fk/25.webp",
    "civik_fk/26.webp",
    "civik_fk/27.webp",
    "civik_fk/28.webp",
    "civik_fk/29.webp",
    "civik_fk/30.webp",
    "civik_fk/31.webp",
    "civik_fk/32.webp",
    "civik_fk/33.webp",
    "civik_fk/34.webp",
    "civik_fk/35.webp",
    "civik_fk/36.webp",
    "civik_fk/37.webp",
    "civik_fk/38.webp",
    "civik_fk/39.webp",
    "civik_fk/40.webp",
    "civik_fk/41.webp",
    "civik_fk/42.webp",
    "civik_fk/43.webp",
    "civik_fk/44.webp",
    "civik_fk/45.webp",
    "civik_fk/46.webp",
    "civik_fk/47.webp",
    "civik_fk/48.webp",
    "civik_fk/49.webp",
    "civik_fk/50.webp",
    "civik_fk/51.webp",
    "civik_fk/52.webp",
    "civik_fk/53.webp",
    "civik_fk/54.webp",
    "civik_fk/55.webp",
    "civik_fk/56.webp",
    "civik_fk/57.webp",
    "civik_fk/58.webp",
    "civik_fk/59.webp",
    "civik_fk/60.webp",
    "civik_fk/61.webp",
    "civik_fk/62.webp",
    "civik_fk/63.webp",
    "civik_fk/64.webp",
    "civik_fk/65.webp",
    "civik_fk/66.webp",
    "civik_fk/67.webp",
    "civik_fk/68.webp",
    "civik_fk/69.webp",
    "civik_fk/70.webp",
    "civik_fk/71.webp",
    "civik_fk/72.webp"
  ];
currentFocusIndex=0;
function CreateView360(){
    
    let templateGen='';
    let imageTemplate ='';
    for(let i = 0; i < imageList.length; i++)
    {
        if(i == 0)
        {
            imageTemplate += `
                <img id=${i} src="${imageList[i]}" style="display:unset; z-index:999" />
            `;
        }
        else{
            imageTemplate += `
                <img id=${i} src="${imageList[i]}" style="display:none; z-index:999" />
            `;
        }
    }
    templateGen = `
        <div style="display:flex; align-items:center; justify-content:center; backgroud-color:red"> 
        ${imageTemplate}
        </div>
    `;
    currentFocusIndex = 0;
    document.getElementById('viewBox').innerHTML = templateGen;
    return templateGen; 
}
function updateView(preIndex, currentIndex){
    document.getElementById(preIndex).style.display = 'none';
    document.getElementById(currentIndex).style.display = 'unset';
}
function viewRigth(){
    let preIndex = currentFocusIndex;
    let currentIndex ;
    if(currentFocusIndex == imageList.length - 1)
    {   
        currentIndex = 0;
    }
    else{
        currentIndex = currentFocusIndex+ 1;
    }
    updateView(preIndex, currentIndex)
    updateCurrentFocusIndex(currentIndex);
}
function viewLeft(){
    let preIndex = currentFocusIndex;
    let currentIndex;
    if(currentFocusIndex == 0)
    {   
        currentIndex = imageList.length-1;
    }
    else{
        currentIndex = currentFocusIndex - 1;
    }
    updateView(preIndex, currentIndex)
    updateCurrentFocusIndex(currentIndex);
}
function updateCurrentFocusIndex(currentIndex){
    currentFocusIndex = currentIndex;
}
CreateView360();