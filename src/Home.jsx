const products = [
    { Name: 'radhi', isMarks: true, id: 1 },
    { Name: 'prince', isMarks: false, id: 2 },
    { Name: 'jal', isMarks: true, id: 3 }
]

export default function Home() {
    const listitem = products.map(product =>
        <li key={product.id}
            style={{ color: product.isMarks ? 'green' : 'red' }}>

            {product.Name} </li>
    
    );
    console.log(listitem);
    products.forEach(product => {
        console.log(product.Name);
      });
    return (
        <ul>{listitem}</ul>
    )

}

