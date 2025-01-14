const imageList = [
    "360_demo_car/1.JPG",
    "360_demo_car/2.JPG",
    "360_demo_car/3.JPG",
    "360_demo_car/4.JPG",
    "360_demo_car/5.JPG",
    "360_demo_car/6.JPG",
    "360_demo_car/7.JPG",
    "360_demo_car/8.JPG",
    "360_demo_car/9.JPG",
    "360_demo_car/10.JPG",
    "360_demo_car/11.JPG",
    "360_demo_car/12.JPG",
    "360_demo_car/13.JPG",
    "360_demo_car/14.JPG",
    "360_demo_car/15.JPG",
    "360_demo_car/16.JPG",
    "360_demo_car/17.JPG",
    "360_demo_car/18.JPG",
    "360_demo_car/19.JPG",
    "360_demo_car/20.JPG",
    "360_demo_car/21.JPG",
    "360_demo_car/22.JPG",
    "360_demo_car/23.JPG",
    "360_demo_car/24.JPG",
    "360_demo_car/25.JPG",
    "360_demo_car/26.JPG",
    "360_demo_car/27.JPG",
    "360_demo_car/28.JPG",
    "360_demo_car/29.JPG",
    "360_demo_car/30.JPG",
    "360_demo_car/31.JPG",
    "360_demo_car/32.JPG",
    "360_demo_car/33.JPG",
    "360_demo_car/34.JPG",
    "360_demo_car/35.JPG",
    "360_demo_car/36.JPG",
  ];
currentFocusIndex=0;
isDrag = false;
function CreateView360(){
    
    let templateGen='';
    let imageTemplate ='';
    for(let i = 0; i < imageList.length; i++)
    {
        if(i == 0)
        {
            imageTemplate += `
                <img class="image-item" id=${i} src="${imageList[i]}" style=" object-fit: cover; display:unset; z-index:999; pointer-events: none; -webkit-user-select: none; -ms-user-select: none;  user-select: none;" />
            `;
        }
        else{
            imageTemplate += `
                <img class="image-item" id=${i} src="${imageList[i]}" style=" object-fit: cover; display:none; z-index:999; pointer-events: none; -webkit-user-select: none; -ms-user-select: none;  user-select: none;" />
            `;
        }
    }
    templateGen = `
        <div id="templateGenerate_box" style="display:flex; align-items:center; justify-content:center; backgroud-color:red;  cursor: grab;"  onpointerdown="drageEnter(event)" onpointerup="drageLeave(event)"  onpointermove="dragYourCar(event)"> 
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
function drageEnter(event){
    console.log('drag Enter !');
    document.getElementById('templateGenerate_box').style.cursor= 'grabbing';
    isDrag = true;
}
function drageLeave(event){
    console.log('drag Leave !');
    document.getElementById('templateGenerate_box').style.cursor= 'grab'
    isDrag = false;
}
function dragYourCar(event){
    if(!isDrag)
    {
        return;
    }
    if(event.movementX > 0)
    {
        viewLeft();
    }
    else{
        viewRigth();
    }
}
CreateView360();