let products=JSON.parse(localStorage.getItem("basket"));
let count=1;
let table=document.querySelector(".table");
for(let product of products){
    console.log(product)
    let tdN=document.createElement("td");
    let tdImage=document.createElement("td");
    let tdName=document.createElement("td");
    let tdCount=document.createElement("td");
    let tdRemove=document.createElement("td");


    tdN.innerText=count;
    count++;

    let img=document.createElement("img");
    img.setAttribute("src",product.Src);
    tdImage.append(img);
    let i=document.createElement("i");
    i.onclick=function(){
        tdCount.innerText-=1;
        if(this.parentElement.parentElement.parentElement.children.length==0){
            table.classList.add("invisible");
        }
        if(tdCount.innerText-1==0){
            this.parentElement.parentElement.remove();
        }
    }
    i.className="fas fa-times";
    tdRemove.append(i);

    tdName.innerText=product.Name;
    tdCount.innerText=product.Count;

    let tr=document.createElement("tr");
    tr.append(tdN,tdImage,tdName,tdCount,tdRemove);

    document.querySelector(".table").lastElementChild.append(tr);
}