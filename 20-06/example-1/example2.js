const displayBodyonMouseClick = () => {
    const bodyId=document.body;
    if(bodyId.id==='null'){
        alert('no-body-id😒')
    }else{
    alert("😎");
    }
}

addEventListener('click', displayBodyonMouseClick, false);