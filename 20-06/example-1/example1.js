function onMouseUp(e) {
    const activeTextarea = document.activeElement;
    
    const classIsThere=activeTextarea.className;
    if(classIsThere==null){
        console.log("no class");
    }else{
        console.log(classIsThere);
    }
    const selection = activeTextarea.value.substring(
    
    activeTextarea.selectionStart,
    activeTextarea.selectionEnd

    );
    
    
    alert(selection.length);

    const outputElement = document.getElementById('output-element');
    const outputText = document.getElementById('output-text');
    outputElement.innerHTML = activeTextarea.id;
    outputText.innerHTML = selection;

    }

    const textarea1 = document.getElementById('mangru');
    const textarea2 = document.getElementById('ta-example-two');

    textarea1.addEventListener('mouseup', onMouseUp, false);
    textarea2.addEventListener('mouseup', onMouseUp, false);
    