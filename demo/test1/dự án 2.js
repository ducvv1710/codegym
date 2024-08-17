class ProductManagement {
    constructor(name, brand, type, image, link, amount, price) {
        this.name = name;
        this.brand = brand;
        this.type = type;
        this.image = image;
        this.link = link;
        this.amount = amount;
        this.price = price;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setBrand(brand) {
        this.brand = brand;
    }

    getBrand() {
        return this.brand;
    }

    setType(type) {
        this.type = type;
    }

    getType() {
        return this.type;
    }

    setPrice(price) {
        this.price = price;
    }

    getPrice() {
        return this.price;
    }

    setImage(image) {
        this.image = image;
    }

    getImage() {
        return this.image;
    }

    setAmount(amount) {
        this.amount = amount;
    }

    getAmount() {
        return this.amount;
    }

    setLink(link) {
        this.link = link;
    }

    getLink() {
        return this.link;
    }
}

let product1 = new ProductManagement("iPhone 14 Pro Max", "Apple", "Smartphone", "data:image/webp;base64,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", " ", 5, 31000);
let product2 = new ProductManagement("Samsung Galaxy S23 Ultra", "Samsung", "Smartphone", "data:image/webp;base64,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", " ", 3, 25000);
let product3 = new ProductManagement("Google Pixel 7", "Google", "Smartphone", " https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR1NiaQrV2wnRIiwEN6PIaLqWgs1eBRwXs3N04kpPNVmGK-MWj_rsw0aXAUtUWCUwqd6gjJEf_66tOhojGS8pw0SRRfd3VAA2O580gxwmTEL7lgdM6OffXlZDczxjSxRKhLT3NFkfCQkg&usqp=CAc", " ", 2, 18000);
let product4 = new ProductManagement("Xiaomi Mi 11", "Xiaomi", "Smartphone", "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ7c-nuVJKS8bdz8fKEFpYlOLgcb4hcDh0ID9QWviS99wr4mhGkQqyGD4ip_mfSdwvx_2yuAAfO5UQedrvCZ2095ij01P6SUbCztNfmsHCwm4Qb4opqQkuvTnGatcaHgi0A91XJhjgx&usqp=CAc ", " ", 4, 15000);
let product5 = new ProductManagement("Sony Xperia 5", "Sony", "Smartphone", " https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRPkAYJb4HCqO7lS8e7m-WM9wcr0qd7BrrLTnEDeCtVvAIWVB4CmMO6VkcAEvzzV1_6Rmpd5jRlmSYntKb3aVLkjIBKXk4BMP_wODcqW2uDbrtybn1TDt_iMykSFlAjaS37egIAX13xAQ&usqp=CAc", " ", 1, 20000);
let product6 = new ProductManagement("Oppo Find X5", "Oppo", "Smartphone", "data:image/webp;base64,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", "", 6, 17000);

let arr = [product1, product2, product3, product4, product5, product6];

function displayProduct(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += "<tr>" +
            "<td style='text-align: center'>" + arr[i].getName() + "</td>" +
            "<td style='text-align: center'>" + arr[i].getBrand() + "</td>" +
            "<td style='text-align: center'>" + arr[i].getType() + "</td>" +
            "<td style='text-align: center'><img onclick='handleZoomImage(" + i + ")' id='image-" + i + "' width='100px' src='" + arr[i].getImage() + "' alt='ảnh lỗi'></td>" +
            "<td style='text-align: center'>" + arr[i].getAmount() + "</td>" +
            "<td style='text-align: center'>" + arr[i].getPrice() + "</td>" +
            "<td style='text-align: center'><button onclick='editProduct(" + i + ")'>Sửa</button></td>" +
            "<td style='text-align: center'><button onclick='deleteProduct(" + i + ")'>Xóa</button></td>" +
            "</tr>";
    }
    document.getElementById("view-body").innerHTML = str;
}

function handleZoomImage(index) {
    const indexId = "image-" + index;
    document.getElementById("btn-modal").click();
    const currentImg = document.getElementById(indexId);
    document.getElementById("preview-image").src = currentImg.src;
}

function addNewProduct() {
    let productName = document.getElementById("name").value;
    let productBrand = document.getElementById("brand").value;
    let productType = document.getElementById("type").value;
    let productImage = document.getElementById("image").value;
    let productAmount = document.getElementById("amount").value;
    let productPrice = document.getElementById("price").value;

    if (productName === "" || productBrand === "" || productType === "" || productImage === "" || productAmount === "" || productPrice === "") {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
    }

    let product = new ProductManagement(productName, productBrand, productType, productImage, "", productAmount, productPrice);
    arr.unshift(product);
    saveProducts();
    clearForm();
    alert("Thêm sản phẩm thành công");
    displayProduct(arr);
}

function deleteProduct(i) {
    let check = confirm("Bạn có muốn xóa sản phẩm " + arr[i].getName() + " này không?");
    if (check) {
        arr.splice(i, 1);
        saveProducts();
        alert("Xóa sản phẩm thành công");
        displayProduct(arr);
    }
}

function editProduct(i) {
    let product = arr[i];
    document.getElementById("name").value = product.getName();
    document.getElementById("brand").value = product.getBrand();
    document.getElementById("type").value = product.getType();
    document.getElementById("image").value = product.getImage();
    document.getElementById("amount").value = product.getAmount();
    document.getElementById("price").value = product.getPrice();
    editingIndex = i;
}

function saveProduct() {
    if (currentEdit !== null) {
        let productName = document.getElementById("name").value;
        let productBrand = document.getElementById("brand").value;
        let productType = document.getElementById("type").value;
        let productImage = document.getElementById("image").value;
        let productAmount = document.getElementById("amount").value;
        let productPrice = document.getElementById("price").value;

        if (productName === "" || productBrand === "" || productType === "" || productImage === "" || productAmount === "" || productPrice === "") {
            alert("Vui lòng điền đầy đủ thông tin.");
            return;
        }

        let product = arr[currentEdit];
        product.setName(productName);
        product.setBrand(productBrand);
        product.setType(productType);
        product.setImage(productImage);
        product.setAmount(productAmount);
        product.setPrice(productPrice);

        currentEdit = null;
        alert("Cập nhật sản phẩm thành công");
        displayProduct(arr);
    } else {
        alert("Không có sản phẩm nào được chọn để chỉnh sửa.");
    }
}


function searchProduct() {
    let searchInput = document.getElementById("searchInput").value.toLowerCase();
    let filteredArr = arr.filter(product => product.getName().toLowerCase().includes(searchInput));
    displayProduct(filteredArr);
}

function sortProducts() {
    let sortValue = document.getElementById("sortSelect").value;
    if (sortValue === "asc") {
        arr.sort((a, b) => a.getPrice() - b.getPrice());
    } else if (sortValue === "desc") {
        arr.sort((a, b) => b.getPrice() - a.getPrice());
    }
    displayProduct(arr);
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("brand").value = "";
    document.getElementById("type").value = "";
    document.getElementById("image").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("price").value = "";
}

function saveProducts() {
    localStorage.setItem("products", JSON.stringify(arr));
}

function loadProducts() {
    let savedProducts = localStorage.getItem("products");
    if (savedProducts) {
        let productsArray = JSON.parse(savedProducts);
        return productsArray.map(product => new ProductManagement(product.name, product.brand, product.type, product.image, product.link, product.amount, product.price));
    }
    return [];
}

document.getElementById("sortSelect").addEventListener("change", sortProducts);

let editingIndex = null;

displayProduct(arr);
