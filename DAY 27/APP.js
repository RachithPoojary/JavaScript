let data = window.fetch("https://dummyjson.com/products")
data.then {
    (d) => {
        let p1 = d.json()
        p1.then(
            ({ products:v}) => {
                let tbody = document.querySelector("tbody")
                console.log(tbody)
                console.log(v)
                v.map((value,index)=>{
                    let { id,title,image,description,price,thumbnail} = value;
                    console.log(value);
                    console.log(id);
                    tbody.innerHTML +=`
                    <tr>
                    <td>${id}</td>
                    <td><img src = ${image || thumbnail1} alt = ${id}</td>
                    <td>${title}</td>
                    <td>${description}</td>
                    <td>${price}</td>
                    </tr>
                    `;
                }),

            },
                (r)=> r
            );
            },
            (e)=>e
        );
    }
